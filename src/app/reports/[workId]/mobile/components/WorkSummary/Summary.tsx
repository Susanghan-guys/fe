import Loading from "@/components/common/Loading";
import { usePersonalSummary } from "@/hooks/queries";
import React from "react";

type SummaryProps = { workId: number };

const Summary = ({ workId }: SummaryProps) => {
  const { data: summaryData, isLoading, isError } = usePersonalSummary(workId);

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
    <div className="flex flex-col gap-[52px] items-start">
      <div className="text-gray-900 font-T02-B"> 작품 요약</div>
      <div className="flex px-[30px] py-[34px] flex-col items-start rounded-[12px] bg-gray-50 w-full gap-[46px]">
        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 타겟</span>
          <div className="text-gray-800 font-B01-M">
            {summaryData?.result.target}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 인사이트</span>
          <div className="text-gray-800 font-B01-M">
            {summaryData?.result.insight}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <span className="text-blue-main font-T04-SB"> 솔루션</span>
          <div className="text-gray-800 font-B01-M">
            {summaryData?.result.solution}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
