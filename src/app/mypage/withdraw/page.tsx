"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import Header from "@/components/common/Header";
import ButtonBase from "@/components/common/ButtonBase";
import GrayButton from "@/components/common/GrayButton";
import { Checkbox } from "@/components/common/Checkbox";
import TextInput from "@/components/common/TextInput";

import DivisionLine from "../components/DivisionLine";
import { withdrawUser, WithdrawalReason } from "@/app/_apis/user";
import WithdarwConfirmModal from "./components/WithdarwConfirmModal";

export default function WithdrawPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedReasons, setSelectedReasons] = useState<WithdrawalReason[]>(
    []
  );
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherReason, setOtherReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const reasonsOptions = [
    { id: WithdrawalReason.LOW_EFFECT, label: "학습 효과 미비" },
    { id: WithdrawalReason.USABILITY, label: "서비스 사용성" },
    { id: WithdrawalReason.OTHER_SERVICE, label: "다른 서비스 사용" },
    { id: WithdrawalReason.NO_CONTEST, label: "원하는 공모전 부재" },
    { id: WithdrawalReason.UNKNOWN, label: "어떤 무언가" },
    { id: WithdrawalReason.SECURITY, label: "보안 우려" },
  ];

  const handleReasonChange = (reasonId: WithdrawalReason) => {
    setSelectedReasons((prev) => {
      if (prev.includes(reasonId)) {
        return prev.filter((id) => id !== reasonId);
      } else {
        return [...prev, reasonId];
      }
    });
  };

  const handlePrevious = () => {
    router.back();
  };

  const handleComplete = async () => {
    if (selectedReasons.length === 0 && !isOtherSelected) {
      alert("탈퇴 이유를 하나 이상 선택해주세요.");
      return;
    }

    if (isOtherSelected && !otherReason.trim()) {
      alert("기타 사유를 입력해주세요.");
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmWithdrawal = async () => {
    setIsSubmitting(true);
    try {
      const requestBody = {
        withdrawalReasons: selectedReasons,
        etc: isOtherSelected ? otherReason : undefined,
      };

      await withdrawUser(requestBody);

      alert("서비스 탈퇴가 완료되었습니다.");
      
      // 완전한 데이터 정리
      localStorage.clear();
      sessionStorage.clear();
      
      // React Query 캐시 정리
      queryClient.clear();
      
      // 브라우저 캐시 정리 (이미지 캐시 포함)
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }
      
      // useAuth 훅에 localStorage 변경 알림
      window.dispatchEvent(new Event('localStorageChange'));
      
      // 페이지 새로고침으로 완전한 상태 초기화
      window.location.href = "/";
    } catch (error) {
      console.error("탈퇴 실패:", error);
      alert("탈퇴 처리 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
      setShowConfirmModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="bg-white rounded-[20px] pl-[50px] pr-[42px] py-[52px] w-full max-w-md">
          <h1 className="font-T01-SB text-gray-900 mb-2 ">서비스 탈퇴하기</h1>
          <p className="font-B01-R text-gray-300 ">
            탈퇴하시는 이유를 알려주세요
          </p>
          <DivisionLine marginTop={24} marginBottom={38} />
          <div className="grid grid-cols-2 gap-y-[42px] gap-x-[39px] mb-[42px]">
            {reasonsOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center cursor-pointer"
              >
                <Checkbox
                  checked={selectedReasons.includes(option.id)}
                  onChange={() => handleReasonChange(option.id)}
                  className="mr-[14px]"
                />
                <span className="font-B02-M text-gray-950">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="mb-[29px]">
            <label className="flex items-center cursor-pointer mb-[13px]">
              <Checkbox
                checked={isOtherSelected}
                onChange={() => setIsOtherSelected(!isOtherSelected)}
                className="mr-[14px]"
              />
              <span className="font-B02-M text-gray-950">기타</span>
            </label>

            {isOtherSelected && (
              <div className="flex w-full justify-end">
                <TextInput
                  placeholder="이유를 입력해 주세요."
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  className="w-[320px]"
                />
              </div>
            )}
          </div>

          <div className="flex gap-[15px] pt-4 justify-end">
            <GrayButton
              onClick={handlePrevious}
              label="이전"
              className="w-[88px] rounded-[10px]"
            />
            <ButtonBase
              label="완료"
              onClick={handleComplete}
              disabled={
                isSubmitting ||
                (selectedReasons.length === 0 && !isOtherSelected)
              }
              size="M"
            />
          </div>
        </div>
      </div>

      <WithdarwConfirmModal
        isOpen={showConfirmModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmWithdrawal}
        title="정말 탈퇴하시겠습니까?"
        description="계정 정보는 복원되지 않습니다."
        cancelText="취소"
        confirmText="탈퇴하기"
      />
    </div>
  );
}
