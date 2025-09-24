"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useReportDetail } from "@/hooks/queries";

import DetailTaskAnalysis from "./components/DetailTaskAnalysisTab/DetailTaskAnalysis";
import WorkEvaluation from "./components/WorkSummary/WorkEvaluation";
import { isAxiosError } from "axios";
import ContestAnalysis from "./components/ContestAnalysisTab/ContestAnalysis";

type ContestName = "DCA" | "YCC";

const DesktopReport = () => {
  const params = useParams() as { workId?: string };
  const router = useRouter();
  const searchParams = useSearchParams();
  const workId = Number(params?.workId);

  // 쿼리 파라미터에서 현재 탭 가져오기
  const currentTab = searchParams?.get("tab") || "공모전 분석";

  const [showVerifiedToast, setShowVerifiedToast] = useState(false);

  useEffect(() => {
    const verified = searchParams?.get("verified");
    if (verified === "1") {
      setShowVerifiedToast(true);
      const timeout = setTimeout(() => setShowVerifiedToast(false), 3000);
      setTimeout(() => {
        router.replace(`/reports/${workId}?tab=${currentTab}`);
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [searchParams, router, workId, currentTab]);

  const { data: reportData, isLoading, error } = useReportDetail(workId);
  const contestName = reportData?.result?.contestName as
    | ContestName
    | undefined;

  const isYcc = reportData?.result?.contestName === "YCC";
  const tabs = isYcc
    ? ["공모전 분석", "개인 출품작 분석"]
    : ["공모전 분석", "세부 과제 분석", "개인 출품작 분석"];

  // YCC인데 세부 과제 분석 탭이 선택된 경우 공모전 분석으로 리다이렉트
  useEffect(() => {
    if (isYcc && currentTab === "세부 과제 분석") {
      router.replace(`/reports/${workId}?tab=공모전 분석`);
    }
  }, [isYcc, currentTab, router, workId]);

  // 탭 변경 시 쿼리 파라미터 업데이트
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
        <div className="flex items-center shadow-1-b px-[112px] h-[58px]">
          {tabs.map((tab) => (
            <div
              key={tab}
              className="px-[17px] py-[17px] text-gray-300 font-B02-M"
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="w-full py-[86px]">
          <div className="w-[996px] mx-auto">
            <div className="mt-6">
              <div className="h-[400px] bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!reportData?.isSuccess || !reportData.result) {
    return (
      <div className="w-full">
        <div className="text-gray-500 text-center py-8">
          리포트 정보를 찾을 수 없습니다.
        </div>
      </div>
    );
  }

  const { brand, workName, workMembers, hasFeedback } = reportData.result;

  return (
    <div className="w-full">
      {showVerifiedToast && (
        <div className="fixed flex items-center gap-3 bottom-[44px] right-[120px] z-50 rounded-[10px] bg-blue-50 text-gray-900 px-5 py-4 font-B02-M">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="26" height="26" rx="13" fill="#256AFF" />
            <path
              d="M7 12.4706L11.7143 17L19 10"
              stroke="#FAFAFA"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          새로운 리포트가 추가되었습니다
        </div>
      )}

      {/* 탭 네비게이션 */}
      <div className="flex items-center shadow-1-b px-[112px] h-[58px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-[17px] py-[17px] cursor-pointer transition-colors ${
              currentTab === tab
                ? "text-gray-800 border-b-2 border-gray-800 font-B02-SB"
                : "text-gray-300 hover:text-gray-700 font-B02-M"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="w-full py-[86px]">
        <div className="w-[996px] mx-auto">
          {/* 탭 컨텐츠 */}
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
    </div>
  );
};

export default DesktopReport;
