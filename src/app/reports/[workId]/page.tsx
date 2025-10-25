"use client";

import React, { useEffect } from "react";
import DesktopReport from "./desktop/DesktopReport";
import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";
import MobileReport from "./mobile/MobileReport";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";

function Page() {
  const isMobile = useIsMobile();
  const router = useRouter();

  // 뒤로가기 시 /reports로 이동
  useEffect(() => {
    const handlePopState = () => {
      router.push("/reports");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-[calc(100vh-80px)]">
        {isMobile ? <MobileReport /> : <DesktopReport />}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
