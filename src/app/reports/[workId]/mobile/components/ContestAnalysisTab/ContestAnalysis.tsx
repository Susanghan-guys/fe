import React from "react";
import ReportHeader from "../ReportHeader";
import ContestCard from "./ContestCard";
import ContestCapability from "./ContestCapability";
import AwardCriteria from "./AwardCriteria";

interface ContestAnalysisProps {
  contestName: string;
  workId: number;
  brand: string;
  workName: string;
  workMembers: string[];
  hasFeedback: boolean;
}

function ContestAnalysis({
  contestName,
  workId,
  brand,
  workName,
  workMembers,
  hasFeedback,
}: ContestAnalysisProps) {
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
      <div className="flex justify-between items-center w-full">
        <ContestCard contest={contestName} />
        <ContestCapability contest={contestName} />
      </div>

      <div className="flex justify-between items-center w-full mt-[108px]">
        <AwardCriteria />
      </div>
    </div>
  );
}

export default ContestAnalysis;
