"use client";
import React from "react";
import { useSubmitStore } from "@/store/useSubmitStore";
import FileDropBox from "@/components/common/FileDropBox";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const BriefBoard = () => {
  const setBriefUploaded = useSubmitStore((s) => s.setBriefUploaded);
  const setBriefBoardFile = useSubmitStore((s) => s.setBriefBoardFile);
  const isMobile = useIsMobile();

  const handleFileChange = (uploadedFile: File | null) => {
    setBriefBoardFile(uploadedFile);
    setBriefUploaded(!!uploadedFile);
    
    // GA 이벤트: 브리프보드 제출
    if (uploadedFile) {
      trackGAEvent(GA_EVENT.SubmitBriefboardDca, {
        error_count: 0, // TODO: 실제 오류 횟수 추적 필요
        screen: "AP"
      });
    }
  };

  return (
    <div
      className={`w-full ${isMobile ? "px-5 mt-16" : "px-[325px] mt-[130px]"}`}
    >
      <div
        className={`text-gray-900 mb-6 ${
          isMobile ? "font-T04-SB" : "font-T02-B"
        }`}
      >
        브리프보드 제출<span className="text-blue-main">*</span>
      </div>

      <FileDropBox
        accept=".jpg,.jpeg"
        maxSizeMB={10}
        placeholder={
          isMobile
            ? "파일을 선택해 업로드하세요"
            : "마우스로 파일을 끌어오거나, 클릭해 업로드하세요"
        }
        description="10MB 이하의 JPG, JPEG 파일"
        onFileChange={handleFileChange}
        required
      />
    </div>
  );
};

export default BriefBoard;
