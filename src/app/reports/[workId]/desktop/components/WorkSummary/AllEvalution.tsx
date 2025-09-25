"use client";
import React from "react";
import {
  WorkAllEvaluationResponse,
  WorkYCCEvaluationResponse,
} from "@/app/_apis/schemas/reportResponse";
import { useWorkAllEvaluation, useWorkYccEvaluation } from "@/hooks/queries";
import Loading from "@/components/common/Loading";
import { useIsMobile } from "@/hooks/useIsMobile";

type Item = { subject: string; value: number; description: string };
type ContestName = "DCA" | "YCC";

type AllEvalutionProps = {
  workId: number;
  contestName: ContestName;
};

const AllEvalution = ({ workId, contestName }: AllEvalutionProps) => {
  const isMobile = useIsMobile();
  const isDCA = contestName === "DCA";

  const dca = useWorkAllEvaluation(workId, { enabled: isDCA });
  const ycc = useWorkYccEvaluation(workId, { enabled: !isDCA });

  const active = isDCA ? dca : ycc;
  if (active.isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (active.isError) {
    return <div className="text-center text-red-500">에러가 발생했습니다.</div>;
  }

  const dcaResult: WorkAllEvaluationResponse["result"] | undefined = isDCA
    ? dca.data?.result
    : undefined;
  const yccResult: WorkYCCEvaluationResponse["result"] | undefined = !isDCA
    ? ycc.data?.result
    : undefined;

  if (isDCA && !dcaResult)
    return <div className="text-gray-600">데이터가 없습니다.</div>;
  if (!isDCA && !yccResult)
    return <div className="text-gray-600">데이터가 없습니다.</div>;

  const items: Item[] = isDCA
    ? [
        {
          subject: "타겟 적합성",
          value: dcaResult!.targetScore,
          description: dcaResult!.target,
        },
        {
          subject: "브랜드 이해도",
          value: dcaResult!.brandScore,
          description: dcaResult!.brand,
        },
        {
          subject: "매체 선정",
          value: dcaResult!.mediaScore,
          description: dcaResult!.media,
        },
        {
          subject: "문제정의",
          value: dcaResult!.problemScore,
          description: dcaResult!.problem,
        },
        {
          subject: "실현 가능성",
          value: dcaResult!.feasibilityScore,
          description: dcaResult!.feasibility,
        },
      ]
    : [
        {
          subject: "실현 가능성",
          value: yccResult!.feasibilityScore,
          description: yccResult!.feasibility,
        },
        {
          subject: "매체 선정",
          value: yccResult!.mediaScore,
          description: yccResult!.media,
        },
        {
          subject: "아젠다 선정",
          value: yccResult!.agendaScore,
          description: yccResult!.agenda,
        },
        {
          subject: "영향력",
          value: yccResult!.influenceScore,
          description: yccResult!.influence,
        },
        {
          subject: "전달력",
          value: yccResult!.deliveryScore,
          description: yccResult!.delivery,
        },
      ];

  return (
    <div
      className={`w-full flex flex-col items-start ${
        isMobile ? "gap-6" : "gap-12"
      }`}
    >
      {items.map((item) => (
        <div key={item.subject}>
          <div className="flex items-center gap-2 sm:gap-[10px]">
            <div
              className={`inline-flex items-center justify-center rounded-[8px] 
                ${
                  isMobile
                    ? "w-[32px] h-[26px] font-C01-M"
                    : "w-[45px] h-[33px] text-[14px]"
                } 
                bg-blue-50 text-blue-main font-medium leading-none`}
            >
              {item.value.toFixed(1)}
            </div>
            <div
              className={`text-gray-800 ${
                isMobile ? "font-B02-SB" : "font-T04-SB"
              }`}
            >
              {item.subject}
            </div>
          </div>
          <p
            className={`mt-[14px] text-gray-800 ${
              isMobile ? "font-B03-M" : "font-B01-M"
            }`}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllEvalution;
