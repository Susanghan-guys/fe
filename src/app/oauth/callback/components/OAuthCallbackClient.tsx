"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "@/app/_apis/auth";

export default function OAuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    const redirectTo = searchParams.get("redirect");
    
    if (code) {
      exchangeCodeForToken(code)
        .then((data) => {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("userId", String(data.userId));
          localStorage.setItem("name", data.name);
          localStorage.setItem("profileImage", data.profileImage);
          localStorage.setItem("socialLogin", data.socialLogin);
          
          // 리다이렉트 URL이 있으면 해당 URL로, 없으면 기본 로직 사용
          if (redirectTo) {
            router.replace(redirectTo);
          } else {
            router.replace(data.isOnboarded ? "/home" : "/sign-up");
          }
        })
        .catch(() => {
          alert("로그인에 실패했습니다.");
          router.replace("/login");
        });
    } else {
      alert("로그인에 실패했습니다.");
      router.replace("/login");
    }
  }, [router, searchParams]);

  return null;
}
