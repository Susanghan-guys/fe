"use client";

import { useOAuthCallback } from "@/hooks/useOAuthCallback";

export default function OAuthCallbackClient() {
  // OAuth 콜백 처리 - 기본 온보딩 로직 사용
  useOAuthCallback();

  return null;
}
