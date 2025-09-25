"use client";

import React, { useEffect, useState } from "react";
import { Google, KaKao, Naver } from "../../../public";
import ToolTip from "./_components/Tooltip";
import Header from "@/components/common/Header";
import { useSearchParams } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = () => {
  const [lastProvider, setLastProvider] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLastProvider(localStorage.getItem("socialLogin"));
    }
  }, []);
  const onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowTooltip(false);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="bg-white w-full max-w-[434px] rounded-[20px] px-[47px] py-10 sm:px-[47px] sm:py-[52px] flex flex-col gap-[15px]">
          <p className="text-gray-900 font-T01-SB mb-5"> 로그인 </p>

          {/* 카카오 */}
          <div
            className="relative group flex py-3 w-full items-center justify-between rounded-[10px] bg-[#FEE500] cursor-pointer"
            onClick={() => {
              const redirectParam = redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : '';
              window.location.href = `${BACKEND_URL}/oauth2/authorization/kakao${redirectParam}`;
            }}
          >
            {lastProvider === "KAKAO" && showTooltip && (
              <div className="absolute -top-[44px] right-0 group-hover:block z-10">
                <ToolTip
                  text="마지막으로 로그인한 계정이에요"
                  onClose={onClose}
                />
              </div>
            )}
            <div className="absolute left-5">
              <KaKao />
            </div>
            <div className="text-black/85 text-center font-B02-M w-full">
              카카오 로그인
            </div>
          </div>

          {/* 구글 */}
          <div
            className="relative group flex py-3 w-full items-center justify-between rounded-[10px] bg-[#FFF] border border-[#E7E7E7] cursor-pointer"
            onClick={() => {
              const redirectParam = redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : '';
              window.location.href = `${BACKEND_URL}/oauth2/authorization/google${redirectParam}`;
            }}
          >
            {lastProvider === "GOOGLE" && showTooltip && (
              <div className="absolute -top-[44px] right-0 group-hover:block z-10">
                <ToolTip
                  text="마지막으로 로그인한 계정이에요"
                  onClose={onClose}
                />
              </div>
            )}
            <div className="absolute left-4">
              <Google />
            </div>
            <div className="text-black/85 text-center font-B02-M w-full">
              구글 로그인
            </div>
          </div>

          {/* 네이버 */}
          <div
            className="relative group flex py-3 w-full items-center justify-between rounded-[10px] bg-[#03C75A] cursor-pointer"
            onClick={() => {
              const redirectParam = redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : '';
              window.location.href = `${BACKEND_URL}/oauth2/authorization/naver${redirectParam}`;
            }}
          >
            {lastProvider === "NAVER" && showTooltip && (
              <div className="absolute -top-[44px] right-0 group-hover:block z-10">
                <ToolTip
                  text="마지막으로 로그인한 계정이에요"
                  onClose={onClose}
                />
              </div>
            )}
            <div className="absolute left-5">
              <Naver />
            </div>
            <div className="text-white text-center font-B02-M w-full">
              네이버 로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
