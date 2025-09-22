"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";
import CloseIcon from "../../../../../../public/icons/CloseIcon";
import ButtonBase from "@/components/common/ButtonBase";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (rating: number, review: string) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const handleSubmit = () => {
    onSubmit?.(rating, review);
    // 제출 후 모달 닫기
    onClose();
    // 상태 초기화
    setRating(0);
    setReview("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[644px] rounded-[10px] bg-white pt-[52px] px-[42px] pb-[42px] shadow-lg">
        {/* 헤더 */}
        <div className="mb-[36px] flex items-center justify-between">
          <h2 className="font-T01-SB text-gray-900">서비스 만족도 조사</h2>
          <button
            onClick={onClose}
            className="group flex h-6 w-6 items-center justify-center rounded-full cursor-pointer"
          >
            <CloseIcon
              size={36}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          </button>
        </div>

        {/* 평점 선택 */}
        <div className="mb-[28px] w-full">
          <div className="flex gap-2 w-full">
            {[1, 2, 3, 4, 5].map((score) => (
              <button
                key={score}
                onClick={() => setRating(score)}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors cursor-pointer",
                  rating === score
                    ? "border-blue-main bg-blue-main text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                )}
              >
                {score}
              </button>
            ))}
          </div>
        </div>

        {/* 후기 입력 */}
        <div className="mb-6">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="후기를 남겨주세요."
            className="h-[180px] w-full resize-none rounded-[8px] border border-gray-200 p-6 font-B02-M placeholder:text-gray-300 focus:border-blue-main focus:outline-none"
            maxLength={500}
          />
        </div>

        {/* 제출 버튼 */}
        <div className="flex justify-end">
          <ButtonBase size="M" label="제출하기" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
