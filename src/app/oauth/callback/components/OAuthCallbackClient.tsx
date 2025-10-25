"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "@/app/_apis/auth";

export default function OAuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      exchangeCodeForToken(code)
        .then((data) => {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("userId", String(data.userId));
          localStorage.setItem("name", data.name);
          localStorage.setItem("profileImage", data.profileImage);
          localStorage.setItem("socialLogin", data.socialLogin);
          router.replace(data.isOnboarded ? "/home" : "/sign-up");
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
