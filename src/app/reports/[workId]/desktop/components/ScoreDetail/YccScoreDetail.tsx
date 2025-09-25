"use client";
import React from "react";
import ScoreList, {
  type ScoreItem,
  DCA_TYPES,
  YCC_TYPES,
  DCA_HEADINGS,
  YCC_HEADINGS,
  type Variant,
} from "./ScoreList";
import Loading from "@/components/common/Loading";
import {
  useScoreDetail,
  usePersonalStrengths,
  usePersonalWeakness,
} from "@/hooks/queries";
import { EvaluationType } from "@/app/_apis/schemas/reportResponse";
import { useIsMobile } from "@/hooks/useIsMobile";

type ContestName = "DCA" | "YCC";

interface YccScoreDetailProps {
  contestName: ContestName;
  workName: string;
  workId: number;
}

const toArray = <T,>(value: T | T[] | undefined | null): T[] =>
  Array.isArray(value) ? value : value ? [value] : [];

const normalizeLabel = (label: string) => label.trim();

interface SectionScoreListProps {
  workId: number;
  type: EvaluationType;
  heading: string;
  strengthLabels: Set<string>;
  weaknessLabels: Set<string>;
}

function SectionScoreList({
  workId,
  type,
  heading,
  strengthLabels,
  weaknessLabels,
}: SectionScoreListProps) {
  const { data, isLoading, isError } = useScoreDetail(workId, type);

  if (isLoading) {
    return (
      <div className="my-6 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-6 text-orange-point">
        {heading} 점수 상세를 불러오지 못했어요.
      </div>
    );
  }

  const detailArray = toArray(
    data?.result.detailEvaluations as
      | { code: string; label: string; score: number; description: string }
      | Array<{
          code: string;
          label: string;
          score: number;
          description: string;
        }>
      | undefined
  );

  const items: ScoreItem[] = detailArray.map((detail) => ({
    order: `${detail.score}점`,
    title: detail.label,
    body: detail.description,
  }));

  const variants: Variant[] = detailArray.map((detail) => {
    const label = normalizeLabel(detail.label);
    if (strengthLabels.has(label)) return "success";
    if (weaknessLabels.has(label)) return "warning";
    return "default";
  });

  return <ScoreList heading={heading} items={items} variants={variants} />;
}

function YccScoreDetail({
  contestName,
  workName,
  workId,
}: YccScoreDetailProps) {
  const types: EvaluationType[] = contestName === "DCA" ? DCA_TYPES : YCC_TYPES;
  const headings = contestName === "DCA" ? DCA_HEADINGS : YCC_HEADINGS;
  const isMobile = useIsMobile();

  const {
    data: strengthsResponse,
    isLoading: isStrengthsLoading,
    isError: isStrengthsError,
  } = usePersonalStrengths(workId);

  const {
    data: weaknessesResponse,
    isLoading: isWeaknessesLoading,
    isError: isWeaknessesError,
  } = usePersonalWeakness(workId);

  const isMetaLoading = isStrengthsLoading || isWeaknessesLoading;
  const isMetaError = isStrengthsError || isWeaknessesError;

  if (isMetaLoading) {
    return (
      <div className="flex items-center justify-center mt-[108px]">
        <Loading />
      </div>
    );
  }

  if (isMetaError) {
    return (
      <div className="text-orange-point">점수 상세를 불러오지 못했어요.</div>
    );
  }

  const strengthItems = toArray(strengthsResponse?.result);
  const weaknessItems = toArray(weaknessesResponse?.result);

  const strengthLabels = new Set(
    strengthItems.map((item) => normalizeLabel(item.label))
  );
  const weaknessLabels = new Set(
    weaknessItems.map((item) => normalizeLabel(item.label))
  );

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex flex-row items-center">
        <div
          className={`text-gray-900 ${isMobile ? "font-T03-M" : "font-B01-M"}`}
        >
          {workName}
        </div>

        <span className={`text-gray-300 ${isMobile ? "mx-2" : "mx-3"}`}>|</span>

        <div
          className={`text-gray-700 ${isMobile ? "font-B03-R" : "font-B01-R"}`}
        >
          {contestName}
        </div>
      </div>

      <div
        className={`text-gray-900 ${
          isMobile ? "font-T04-SB mt-2" : "font-semibold text-4xl mt-4"
        }`}
      >
        점수 상세보기
      </div>

      <div
        className={`w-full bg-gray-100 ${
          isMobile ? "h-px mt-[18px] mb-9" : "h-[1.2px] mt-9 mb-[52px]"
        }`}
      />

      <div
        className={`flex flex-col items-start rounded-[12px] bg-gray-50 w-full gap-3 ${
          isMobile ? "p-6" : "mb-10 py-6 px-9"
        }`}
      >
        <div
          className={`text-gray-800 ${isMobile ? "font-B01-B" : "font-T02-B"}`}
        >
          Tip
        </div>

        <div
          className={`text-gray-700 ${
            isMobile ? "font-B02-M" : "font-medium text-[20px]"
          }`}
        >
          강점과 보완점은 작품 분석 메인 페이지에서 한눈에 보실 수 있습니다.
        </div>
      </div>

      {types.map((type, idx) => (
        <SectionScoreList
          key={type}
          workId={workId}
          type={type}
          heading={headings[idx]}
          strengthLabels={strengthLabels}
          weaknessLabels={weaknessLabels}
        />
      ))}
    </div>
  );
}

export default YccScoreDetail;
