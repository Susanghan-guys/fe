import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "@/app/_apis/auth";

interface UseOAuthCallbackOptions {
  /**
   * OAuth 처리 후 리다이렉트할 기본 URL
   * redirect 파라미터가 없을 때 사용
   */
  defaultRedirectUrl?: string;
  /**
   * OAuth code 파라미터를 제거할지 여부
   * true면 OAuth 처리 후 code 파라미터를 URL에서 제거
   */
  removeCodeFromUrl?: boolean;
  /**
   * OAuth 처리 중 로딩 상태를 관리할지 여부
   */
  enableLoadingState?: boolean;
}

/**
 * OAuth 콜백 처리를 위한 커스텀 훅
 * 
 * @example
 * ```tsx
 * // 기본 사용법
 * useOAuthCallback();
 * 
 * // 커스텀 옵션 사용
 * useOAuthCallback({
 *   defaultRedirectUrl: "/home",
 *   removeCodeFromUrl: true,
 *   enableLoadingState: true
 * });
 * ```
 */
export function useOAuthCallback(options: UseOAuthCallbackOptions = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const {
    defaultRedirectUrl,
    removeCodeFromUrl = true
  } = options;

  const code = searchParams.get("code");
  const redirectTo = searchParams.get("redirect");

  useEffect(() => {
    if (!code) return;

    // OAuth 콜백 처리
    const handleOAuthCallback = async () => {
      setIsProcessing(true);
      
      try {
        const data = await exchangeCodeForToken(code);
        
        // 사용자 정보 저장
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("userId", String(data.userId));
        localStorage.setItem("name", data.name);
        localStorage.setItem("profileImage", data.profileImage);
        localStorage.setItem("socialLogin", data.socialLogin);
        
        // 리다이렉트 처리
        if (redirectTo) {
          // redirect 파라미터가 있으면 해당 URL로 이동 (최우선)
          let finalRedirectUrl = redirectTo;
          
          // 절대 URL이 아닌 경우에만 baseURL 추가
          if (!redirectTo.startsWith('http')) {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
            finalRedirectUrl = `${baseUrl}${redirectTo.startsWith('/') ? '' : '/'}${redirectTo}`;
          }
          
          // URL 유효성 검사
          try {
            new URL(finalRedirectUrl);
            router.replace(finalRedirectUrl);
          } catch (error) {
            console.error('Invalid redirect URL:', finalRedirectUrl, error);
            // 유효하지 않은 URL인 경우 기본 경로로 이동
            router.replace('/home');
          }
        } else if (defaultRedirectUrl) {
          // 기본 리다이렉트 URL이 있으면 해당 URL로 이동
          router.replace(defaultRedirectUrl);
        } else if (removeCodeFromUrl) {
          // 현재 URL에서 code 파라미터만 제거
          const currentPath = window.location.pathname;
          const otherParams = new URLSearchParams(searchParams.toString());
          otherParams.delete("code");
          otherParams.delete("redirect");
          
          const queryString = otherParams.toString();
          const finalUrl = queryString ? `${currentPath}?${queryString}` : currentPath;
          router.replace(finalUrl);
        } else {
          // 온보딩 상태에 따른 기본 리다이렉트 로직
          router.replace(data.isOnboarded ? "/home" : "/sign-up");
        }
        
      } catch (error) {
        console.error("OAuth 처리 실패:", error);
        alert("로그인에 실패했습니다.");
        router.replace("/login");
      } finally {
        setIsProcessing(false);
      }
    };

    handleOAuthCallback();
  }, [code, searchParams, router, defaultRedirectUrl, removeCodeFromUrl, redirectTo]);

  return {
    isOAuthCallback: !!code,
    isProcessing,
    redirectTo
  };
}
