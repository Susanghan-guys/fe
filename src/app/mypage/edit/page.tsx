"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/common/Header";
import TextInput from "@/components/common/TextInput";
import ButtonBase from "@/components/common/ButtonBase";
import { useUserMe, useUpdateUserProfile } from "@/hooks/queries/useUser";
import GrayButton from "@/components/common/GrayButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

export default function ProfileEditPage() {
  const router = useRouter();
  const { data: userData, isLoading } = useUserMe();
  const updateProfileMutation = useUpdateUserProfile();
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (userData?.result?.name) {
      setName(userData.result.name);
    }
  }, [userData]);

  const handlePrevious = () => {
    router.back();
  };

  const handleComplete = async () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await updateProfileMutation.mutateAsync({ name });
      router.back();
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
      alert("프로필 업데이트에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-main mx-auto mb-4"></div>
            <p className="text-gray-600">로딩 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white sm:bg-gray-100">
      <Header />

      <div className="flex sm:items-center sm:justify-center min-h-[calc(100vh-80px)]">
        <div
          className={`bg-white rounded-[20px] ${
            isMobile
              ? "w-full px-[20px] py-[50px] h-[calc(100vh-180px)]"
              : "px-[48px] py-[52px] w-full max-w-md"
          }`}
        >
          <h1 className="font-T01-SB text-gray-900 mb-8 ">프로필 정보</h1>

          <div className="h-full">
            <div>
              <label
                htmlFor="name"
                className="block  font-B03-M text-gray-500 mb-2"
              >
                이름
              </label>
              <TextInput
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름이 뭐예요~"
                className="w-full"
              />
            </div>

            <div
              className={`flex gap-[15px] ${
                isMobile ? "h-full items-end" : "pt-[71px]"
              } justify-end`}
            >
              <GrayButton
                onClick={handlePrevious}
                label="이전"
                className="flex-1 "
              />
              <ButtonBase
                label="완료"
                onClick={handleComplete}
                disabled={
                  isSubmitting ||
                  !name.trim() ||
                  updateProfileMutation.isPending
                }
                size="M"
                className="flex-1 !px-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
