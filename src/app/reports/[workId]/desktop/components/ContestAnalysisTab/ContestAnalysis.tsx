"use client";
import React from "react";
import ReportHeader from "../ReportHeader";
import ContestCard from "./ContestCard";
import ContestCapability from "./ContestCapability";
import AwardCriteria from "./AwardCriteria";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ContestAnalysisProps {
  contestName: "DCA" | "YCC";
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
  const isMobile = useIsMobile();

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

      <div
        className={`flex w-full ${
          isMobile
            ? "flex-col items-start"
            : "flex-row justify-between items-center"
        }`}
      >
        <ContestCard contest={contestName} />
        <ContestCapability contest={contestName} />
      </div>

      <div className={`flex w-full ${isMobile ? "" : "mt-[108px]"}`}>
        <AwardCriteria contestName={contestName} />
      </div>
    </div>
  );
}

export default ContestAnalysis;
