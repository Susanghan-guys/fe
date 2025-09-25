"use client";
import React from "react";
import ScoreCalculationMethod from "./DCA/ScoreCalculationMethod";
import BrandUnderstand from "./DCA/BrandUnderstand";
import ProblemDefinition from "./DCA/ProblemDefinition";
import Possibility from "./DCA/Possibility";
import EvaluationCriteria from "./DCA/EvaluationCriteria";
import MediaSelection from "./DCA/MediaSelection";
import { useIsMobile } from "@/hooks/useIsMobile";

interface DcaCriteriaProps {
  contestName: string;
}

const DcaCriteria = ({ contestName }: DcaCriteriaProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center w-full">
        <div
          className={`text-gray-900 ${isMobile ? "font-B03-M" : "font-B01-M"}`}
        >
          공모전
        </div>

        <span className={`text-gray-200 ${isMobile ? "mx-2" : "mx-3"}`}>|</span>

        <div
          className={`text-gray-700 ${isMobile ? "font-B03-R" : "font-B01-R"}`}
        >
          {contestName}
        </div>
      </div>

      <div
        className={`text-gray-900 ${
          isMobile ? "font-T04-SB mt-2" : "text-4xl mt-4 font-semibold"
        }`}
      >
        평가 기준
      </div>

      <div
        className={`w-full bg-gray-100 ${
          isMobile ? "h-px mt-[18px] mb-9" : "h-[1.2px] mt-[36px] mb-[52px]"
        }`}
      />

      <ScoreCalculationMethod />
      <EvaluationCriteria />
      <BrandUnderstand />
      <MediaSelection />
      <ProblemDefinition />
      <Possibility />
    </div>
  );
};

export default DcaCriteria;
