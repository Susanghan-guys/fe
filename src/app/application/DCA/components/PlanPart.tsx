"use client";
import React from "react";
import FileDropBox from "@/components/common/FileDropBox";
import { useSubmitStore } from "@/store/useSubmitStore";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const PlanPart = () => {
  const setadditionalFile = useSubmitStore((s) => s.setadditionalFile);
  const isMobile = useIsMobile();

  const handleFileChange = (uploadedFile: File | null) => {
    setadditionalFile(uploadedFile);
    
    // GA 이벤트: 기획서 제출
    if (uploadedFile) {
      trackGAEvent(GA_EVENT.InputDocDca, {
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
        기획서 제출{" "}
        <span
          className={`text-gray-500 ${isMobile ? "font-T04-M" : "font-T02-SB"}`}
        >
          (선택)
        </span>
      </div>

      <FileDropBox
        accept=".pdf,.ppt,.pptx"
        maxSizeMB={10}
        placeholder={
          isMobile
            ? "파일을 선택해 업로드하세요"
            : "마우스로 파일을 끌어오거나, 클릭해 업로드하세요"
        }
        description="10MB 이내의 PPT, PDF 파일"
        onFileChange={handleFileChange}
      />
    </div>
  );
};

export default PlanPart;
