"use client";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const ScoreCalculationMethod = () => {
  const isMobile = useIsMobile();

  const steps = [
    {
      id: 1,
      title: "평가 기준",
      desc: isMobile ? (
        <>
          공모전 별로 수상에 필요한 핵심 항목 5가지 <br />
          (각 항목당{" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            50점 x 5 = 250점
          </span>
          )
        </>
      ) : (
        <>
          공모전 별로 수상에 필요한 핵심 항목 5가지 (각 항목당{" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            50점 x 5 = 250점
          </span>
          )
        </>
      ),
    },
    {
      id: 2,
      title: "상세 평가 항목",
      desc: isMobile ? (
        <>
          평가 기준을 구체적으로 나눈 하위 항목 <br />
          (각 항목당{" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            10점 x 5 = 50점
          </span>
          )
        </>
      ) : (
        <>
          평가 기준을 구체적으로 나눈 하위 항목 (각 항목당{" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            10점 x 5 = 50점
          </span>
          )
        </>
      ),
    },
    {
      id: 3,
      title: "총점 산정 방식",
      desc: isMobile ? (
        <>
          평가 총합 250점을 100점으로 환산 <br />
          (최종 점수 ={" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            총점 100점
          </span>
          )
        </>
      ) : (
        <>
          평가 총합 250점을 100점으로 환산 (최종 점수 ={" "}
          <span
            className={`text-gray-900 ${
              isMobile ? "font-B03-SB" : "font-B01-SB"
            }`}
          >
            총점 100점
          </span>
          )
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      <div
        className={
          isMobile ? "text-gray-900 font-B01-B" : "text-gray-900 font-T02-B"
        }
      >
        점수 산정 방식
      </div>

      <div
        className={`text-gray-700 mt-3 ${
          isMobile ? "font-B02-M text-sm" : "font-medium text-[20px]"
        }`}
      >
        총점은 5가지 평가 기준의 총점인 250점을 100분위로 환산해 산정합니다.
      </div>

      {/* 리스트 */}
      <div
        className={`w-full rounded-[18px] bg-gray-50 flex flex-col items-start ${
          isMobile ? "mt-6 gap-6 p-6" : "mt-[34px] gap-5 py-[34px] pl-[29px]"
        }`}
      >
        {steps.map((step) => (
          <div key={step.id} className="w-full">
            {isMobile ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="w-[17px] h-[17px] rounded-full bg-blue-main flex items-center justify-center text-white">
                    <span className="font-normal text-[8px]">{step.id}</span>
                  </div>
                  <span className="font-B03-SB text-gray-900">
                    {step.title}
                  </span>
                </div>

                <div className="mt-3 font-B03-M text-gray-700">{step.desc}</div>
              </>
            ) : (
              <div className="flex items-center gap-[18px]">
                <div className="w-[25px] h-[25px] rounded-full bg-blue-main flex items-center justify-center text-white">
                  <span className="font-B03-B">{step.id}</span>
                </div>
                <span className="text-gray-700 font-B01-M">
                  <span className="text-gray-900 font-B01-SB">
                    {step.title}:
                  </span>{" "}
                  {step.desc}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCalculationMethod;
