"use client";

import React from "react";
import { useRouter } from "next/navigation";
import GrayButton from "./GrayButton";
import ButtonBase from "./ButtonBase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string; // 로그인 후 리다이렉트할 URL
}

export function LoginModal({ isOpen, onClose, redirectTo }: LoginModalProps) {
  const router = useRouter();

  const handleLogin = () => {
    // 리다이렉트 URL이 있으면 쿼리 파라미터로 전달
    const loginUrl = redirectTo ? `/login?redirect=${encodeURIComponent(redirectTo)}` : "/login";
    router.push(loginUrl);
  };

  const handleClose = () => {
    onClose();
    // redirectTo가 있으면 해당 URL로, 없으면 홈으로
    const targetUrl = redirectTo || "/";
    router.push(targetUrl);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] p-5 pt-[30px] w-[328px] mx-4">
        <div className="flex flex-col items-center">
          {/* 경고 아이콘 */}
          <div className="mb-[18px]">
            <svg
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="23" cy="22.5" r="22.5" fill="#E9F0FF" />
              <path
                d="M21.0544 25.9044V12H24.7813V25.9044H21.0544ZM22.9179 33.0429C22.4783 33.0429 22.0817 32.9473 21.7281 32.7562C21.3745 32.5651 21.0974 32.2975 20.8967 31.9535C20.696 31.6094 20.5957 31.2272 20.5957 30.8067C20.5957 30.3862 20.696 30.004 20.8967 29.66C21.0974 29.3159 21.3745 29.0484 21.7281 28.8572C22.0817 28.6661 22.4783 28.5706 22.9179 28.5706C23.3575 28.5706 23.754 28.6661 24.1076 28.8572C24.4612 29.0484 24.7383 29.3159 24.939 29.66C25.1397 30.004 25.24 30.3862 25.24 30.8067C25.24 31.2272 25.1397 31.6094 24.939 31.9535C24.7383 32.2975 24.4612 32.5651 24.1076 32.7562C23.754 32.9473 23.3575 33.0429 22.9179 33.0429Z"
                fill="#6D9BFF"
              />
            </svg>
          </div>

          {/* 메시지 */}
          <h3 className="text-gray-900 font-T03-B mb-[6px]">
            로그인 후 이용 가능합니다
          </h3>
          <p className="text-gray-500 font-B02-M mb-6">로그인 하시겠습니까?</p>

          {/* 버튼 */}
          <div className="flex gap-3">
            <GrayButton
              onClick={handleClose}
              label="아니오"
              className="w-[88px]"
            />

            <ButtonBase
              onClick={handleLogin}
              label="로그인 하기"
              size="M"
              className="whitespace-nowrap w-[188px] flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
