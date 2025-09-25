"use client";
import Loading from "@/components/common/Loading";
import { usePersonalSummary } from "@/hooks/queries";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

type SummaryProps = { workId: number };

const Summary = ({ workId }: SummaryProps) => {
  const { data: summaryData, isLoading, isError } = usePersonalSummary(workId);
  const isMobile = useIsMobile();

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-[29px]">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500"> 에러가 발생했습니다.</div>
    );

  return (
    <div
      className={`flex flex-col items-start w-full ${
        isMobile ? "gap-[18px]" : "gap-[52px]"
      }`}
    >
      <div
        className={`text-gray-900 ${isMobile ? "font-B01-B" : "font-T02-B"}`}
      >
        작품 요약
      </div>

      <div
        className={`flex flex-col items-start rounded-[12px] bg-gray-50 w-full ${
          isMobile ? "p-6 gap-6" : "px-[30px] py-[34px] gap-[46px]"
        }`}
      >
        <div className={`flex flex-col ${isMobile ? "gap-2" : "gap-[14px]"}`}>
          <span
            className={`text-blue-main ${
              isMobile ? "font-B02-SB" : "font-T04-SB"
            }`}
          >
            타겟
          </span>
          <div
            className={`text-gray-800  ${
              isMobile ? "font-B03-M" : "font-B01-M"
            }`}
          >
            {summaryData?.result.target}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? "gap-2" : "gap-[14px]"}`}>
          <span
            className={`text-blue-main ${
              isMobile ? "font-B02-SB" : "font-T04-SB"
            }`}
          >
            인사이트
          </span>
          <div
            className={`text-gray-800  ${
              isMobile ? "font-B03-M" : "font-B01-M"
            }`}
          >
            {summaryData?.result.insight}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? "gap-2" : "gap-[14px]"}`}>
          <span
            className={`text-blue-main ${
              isMobile ? "font-B02-SB" : "font-T04-SB"
            }`}
          >
            솔루션
          </span>
          <div
            className={`text-gray-800 ${
              isMobile ? "font-B03-M" : "font-B01-M"
            }`}
          >
            {summaryData?.result.solution}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
