"use client";

import React, { useEffect } from "react";
import DesktopReport from "./desktop/DesktopReport";
import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";
import MobileReport from "./mobile/MobileReport";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useParams, useRouter } from "next/navigation";
import { AuthGuard } from "@/components/common/AuthGuard";
import { useOAuthCallback } from "@/hooks/useOAuthCallback";

function Page() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const params = useParams() as { workId?: string };
  const workId = Number(params?.workId);
  
  // OAuth 콜백 처리 - AuthGuard보다 먼저 실행
  const { isOAuthCallback, isProcessing } = useOAuthCallback({
    removeCodeFromUrl: true
  });

  // 뒤로가기 시 /reports로 이동
  useEffect(() => {
    const handlePopState = () => {
      router.push("/reports");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  // OAuth 콜백 처리 중일 때는 로딩 표시
  if (isOAuthCallback || isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">로그인 처리 중...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard redirectTo={`/reports/${workId}`}>
      <div className="min-h-screen ">
        <Header />
        <div className="min-h-[calc(100vh-80px)]">
          {isMobile ? <MobileReport /> : <DesktopReport />}
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}

export default Page;
