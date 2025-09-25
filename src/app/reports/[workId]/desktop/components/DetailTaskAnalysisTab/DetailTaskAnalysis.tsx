import React from "react";
import ReportHeader from "../ReportHeader";
import ReflectionConsistencySection from "./ReflectionConsistencySection";
import BriefInterpretationSection from "./BriefInterpretationSection";
import BriefAnalysisSection from "./BriefAnalysisSection";

interface DetailTaskAnalysisProps {
  contestName: string;
  workId: number;
  brand: string;
  workName: string;
  workMembers: string[];
  hasFeedback: boolean;
}

function DetailTaskAnalysis({
  contestName,
  workId,
  brand,
  workName,
  workMembers,
  hasFeedback,
}: DetailTaskAnalysisProps) {
  return (
    <div>
      <ReportHeader
        workName={workName}
        contestName={contestName}
        brand={brand}
        workMembers={workMembers}
        workId={workId}
        hasFeedback={hasFeedback}
      />
      <div className="w-full h-[1.2px] bg-gray-100 mt-[36px] mb-[52px]" />
      <BriefInterpretationSection workId={workId} />

      <div
        className="w-full h-[1.2px] my-[42px]"
        style={{
          background:
            "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 4px, transparent 4px, transparent 8px)",
        }}
      />
      {/* api 연결 필요 */}
      <ReflectionConsistencySection workId={workId} />

      {/*  */}
      <BriefAnalysisSection brandName={"SBI 저축은행 사이다뱅크"} />
    </div>
  );
}

export default DetailTaskAnalysis;
