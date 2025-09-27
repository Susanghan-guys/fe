"use client";
import React, { useEffect } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useReportDetail } from "@/hooks/queries";
import { isAxiosError } from "axios";
import ContestAnalysis from "../desktop/components/ContestAnalysisTab/ContestAnalysis";
import DetailTaskAnalysis from "../desktop/components/DetailTaskAnalysisTab/DetailTaskAnalysis";
import WorkEvaluation from "../desktop/components/WorkSummary/WorkEvaluation";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

type ContestName = "DCA" | "YCC";

const MobileReport = () => {
  const params = useParams() as { workId?: string };
  const router = useRouter();
  const searchParams = useSearchParams();
  const workId = Number(params?.workId);

  const currentTab = searchParams?.get("tab") || "공모전 분석";

  const { data: reportData, isLoading, error } = useReportDetail(workId);
  const contestName = reportData?.result?.contestName as
    | ContestName
    | undefined;

  const isYcc = contestName === "YCC";
  const tabs = isYcc
    ? ["공모전 분석", "개인 출품작 분석"]
    : ["공모전 분석", "세부 과제 분석", "개인 출품작 분석"];

  useEffect(() => {
    if (isYcc && currentTab === "세부 과제 분석") {
      router.replace(`/reports/${workId}?tab=공모전 분석`);
    }
  }, [isYcc, currentTab, router, workId]);

  const handleTabChange = (tab: string) => {
    router.push(`/reports/${workId}?tab=${tab}`, { scroll: false });
  };

  useEffect(() => {
    if (isAxiosError(error) && error.response?.status === 403) {
      router.replace(`/reports/${workId}/verify-code`);
    }
  }, [error, router, workId]);

  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex overflow-x-auto shadow-1-b px-4 h-[48px]">
          {tabs.map((tab) => (
            <div key={tab} className="px-3 py-3 text-gray-300 font-B02-M">
              {tab}
            </div>
          ))}
        </div>
        <div className="p-6 text-center text-gray-400">불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    if (isAxiosError(error) && error.response?.status === 403) return null;
    return <div className="text-center text-red-500 p-6">리포트 로딩 실패</div>;
  }

  if (!reportData?.isSuccess || !reportData.result) {
    return <div className="text-center text-gray-500 p-6">데이터 없음</div>;
  }

  const { brand, workName, workMembers, hasFeedback } = reportData.result;

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto shadow-1-b px-3 h-[48px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-3 py-3 whitespace-nowrap cursor-pointer transition-colors ${
              currentTab === tab
                ? "text-gray-800 border-b-2 border-gray-800 font-B02-SB"
                : "text-gray-300 hover:text-gray-600 font-B02-M"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="w-full py-10 px-5">
        {currentTab === "공모전 분석" && contestName && (
          <ContestAnalysis
            contestName={contestName}
            workId={workId}
            brand={brand}
            workName={workName}
            workMembers={workMembers}
            hasFeedback={hasFeedback ?? false}
          />
        )}

        {currentTab === "세부 과제 분석" && !isYcc && contestName && (
          <DetailTaskAnalysis
            contestName={contestName}
            workId={workId}
            brand={brand}
            workName={workName}
            workMembers={workMembers}
            hasFeedback={hasFeedback ?? false}
          />
        )}

        {currentTab === "개인 출품작 분석" && contestName && (
          <WorkEvaluation
            contestName={contestName}
            workId={workId}
            brand={brand}
            workName={workName}
            workMembers={workMembers}
            hasFeedback={hasFeedback ?? false}
          />
        )}
      </div>
    </div>
  );
};

export default MobileReport;
