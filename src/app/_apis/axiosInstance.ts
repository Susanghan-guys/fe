import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CONTENT_TYPE_JSON = "application/json";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

type FailedQueueItem = {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
};

export const publicAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

export const authAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
  },
});

let isRefreshing = false;
let failedQueue: FailedQueueItem[] = [];

const processQueue = (error: unknown, token?: string) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else if (token) resolve(token);
  });
  failedQueue = [];
};

const handleLogoutAndRedirect = () => {
  if (typeof window !== "undefined") {
    console.log("🔐 토큰 만료로 인한 자동 로그아웃 처리 시작");
    localStorage.clear();
    console.log("🧹 localStorage 클리어 완료");

    // 로그인 페이지로 리다이렉션
    window.location.replace("/login");
    console.log("🔄 로그인 페이지로 리디렉션 시도");
  }
};

authAxiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authAxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest: CustomAxiosRequestConfig = error.config;
    const isUnauthorized = error.response?.status === 401;
    const isNotRetried = !originalRequest._retry;

    if (isUnauthorized && isNotRetried) {
      originalRequest._retry = true;

      if (typeof window === "undefined") return Promise.reject(error);

      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        handleLogoutAndRedirect();
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers.Authorization = "Bearer " + token;
            return authAxiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const res = await publicAxiosInstance.post("/v1/auth/refresh-token", {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = res.data.result;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        processQueue(null, accessToken);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = "Bearer " + accessToken;

        return authAxiosInstance(originalRequest);
      } catch (refreshError) {
        console.log("❌ 토큰 리프레시 실패:", refreshError);
        processQueue(refreshError);
        handleLogoutAndRedirect();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
