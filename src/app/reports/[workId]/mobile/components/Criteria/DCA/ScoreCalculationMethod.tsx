import React from "react";

const steps = [
  {
    id: 1,
    text: (
      <>
        <span className="text-gray-900 font-B01-SB">평가 기준:</span> 공모전
        별로 수상에 필요한 핵심 항목 5가지 (각 항목당{" "}
        <span className="text-gray-900 font-B01-SB">50점 x 5 = 250점</span>)
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <span className="text-gray-900 font-B01-SB">상세 평가 항목:</span> 평가
        기준을 구체적으로 나눈 하위 항목 (각 항목당{" "}
        <span className="text-gray-900 font-B01-SB"> 10점 x 5 = 50점</span>)
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <span className="text-gray-900 font-B01-SB">총점 산정 방식: </span> 평가
        총합 250점을 100점으로 환산 (최종 점수 =
        <span className="text-gray-900 font-B01-SB"> 총점 100점</span>)
      </>
    ),
  },
];

const ScoreCalculationMethod = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="text-gray-900 font-T02-B"> 점수 산정 방식</div>
      <div className="text-gray-700 font-medium text-[20px] mt-[18px]">
        {" "}
        총점은 5가지 평가 기준의 총점인 250점을 100분위로 환산해 산정합니다.
      </div>

      <div className="w-full rounded-[18px] bg-gray-50 mt-[34px] flex gap-5 flex-col items-start py-[34px] pl-[29px]">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-[18px]">
            <div className="w-[25px] h-[25px] rounded-full bg-blue-main flex items-center justify-center">
              <span className="text-white font-B03-B">{step.id}</span>
            </div>

            <span className="text-gray-700 font-B01-M">{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCalculationMethod;
