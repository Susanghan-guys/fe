"use client";

import React, { useState } from "react";
import CloseIcon from "../../../../../../public/icons/CloseIcon";
import CopyIcon from "../../../../../../public/icons/CopyIcon";
import CheckIcon from "../../../../../../public/icons/CheckIcon";
import ButtonBase from "@/components/common/ButtonBase";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportUrl?: string;
  reportCode?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  reportUrl = "https://www.pickspot.co.kr/",
  reportCode = "3463FJ29",
}) => {
  const [copiedField, setCopiedField] = useState<"url" | "code" | null>(null);

  const handleCopy = async (text: string, field: "url" | "code") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[479px] rounded-[10px] bg-white pt-[52px] px-[42px] pb-[42px] shadow-lg">
        {/* 헤더 */}
        <div className="mb-[36px] flex items-center justify-between">
          <h2 className="font-T01-SB text-gray-900">리포트 공유하기</h2>
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

        {/* 리포트 링크 */}
        <div className="mb-[28px]">
          <label className="mb-[12px] block font-B02-SB text-gray-900">
            리포트 링크
          </label>
          <div className="relative">
            <input
              type="text"
              value={reportUrl}
              readOnly
              className="w-full rounded-[8px] border border-gray-200 bg-gray-50 px-4 py-3 pr-12 font-B02-M text-gray-700 focus:outline-none"
            />
            <button
              onClick={() => handleCopy(reportUrl, "url")}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              {copiedField === "url" ? (
                <CheckIcon size={16} className="text-green-500" />
              ) : (
                <CopyIcon size={20} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* 리포트 코드 */}
        <div className="mb-[28px]">
          <label className="mb-[12px] block font-B02-SB text-gray-900">
            리포트 코드
          </label>
          <div className="relative">
            <input
              type="text"
              value={reportCode}
              readOnly
              className="w-full rounded-[8px] border border-gray-200 bg-gray-50 px-4 py-3 pr-12 font-B02-M text-gray-700 focus:outline-none"
            />
            <button
              onClick={() => handleCopy(reportCode, "code")}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              {copiedField === "code" ? (
                <CheckIcon size={16} className="text-green-500" />
              ) : (
                <CopyIcon size={20} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="mb-[36px]">
          <p className="font-C01-M text-gray-300 text-center">
            URL을 공유받은 사용자는 리포트 코드를 입력 후 리포트를 조회할 수 있습니다.
          </p>
        </div>

        {/* 완료 버튼 */}
        <div className="flex justify-end">
          <ButtonBase size="S" label="완료" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
