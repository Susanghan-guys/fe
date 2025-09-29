"use client";
import React from "react";
import FileDropBox from "@/components/common/FileDropBox";
import { useSubmitStore } from "@/store/useSubmitStore";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const YCCPlanPart = () => {
  const setYccBriefUploaded = useSubmitStore((s) => s.setYccBriefUploaded);
  const setYccBriefFile = useSubmitStore((s) => s.setYccBriefFile);
  const isMobile = useIsMobile();

  const handleFileChange = (planFile: File | null) => {
    setYccBriefFile(planFile);
    setYccBriefUploaded(!!planFile);
    
    // GA 이벤트: 기획서 제출
    if (planFile) {
      trackGAEvent(GA_EVENT.InputDocYcc, {
        screen: "AP"
      });
    }
  };

  return (
    <div
      className={`w-full ${
        isMobile ? "px-4 mt-[80px]" : "px-[325px] mt-[130px]"
      }`}
    >
      <div className="text-gray-900 font-T02-B mb-6">
        기획서 제출 <span className="text-blue-main">*</span>
      </div>

      <FileDropBox
        accept=".pdf,.ppt,.pptx"
        maxSizeMB={10}
        placeholder="마우스로 파일을 끌어오거나, 클릭해 업로드하세요"
        description="10MB 이내의 PPT, PDF 파일"
        onFileChange={handleFileChange}
      />
    </div>
  );
};

export default YCCPlanPart;
