import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const YCC_Possibility: Item[] = [
  {
    id: 1,
    title: "기술적/제작적 실현 가능성",
    desc: "현존하는 기술로 구현 가능한 캠페인 아이디어인가.",
  },
  {
    id: 2,
    title: "실행의 구체성",
    desc: "캠페인 아이디어가 타겟의 특성과 논리적으로 연결되어 있으며, 그들의 동기·감정·행동을 효과적으로 반영하였는가.",
  },
  {
    id: 3,
    title: "기대효과의 설득력",
    desc: "캠페인을 통해 무엇이 바뀔 수 있는지, 어떤 긍정적인 변화가 일어날 수 있는지에 대한 기대효과가 납득 가능한 수준인가",
  },
  {
    id: 4,
    title: "전제의 합리성",
    desc: "타겟이 캠페인에 도달하기 위해 전제되어야 하는 조건들이 과하게 이상적이거나 비현실적이지는 않은가.",
  },
  {
    id: 5,
    title: "간단한 개입으로 연결 가능한 구조",
    desc: "주제에서 캠페인으로 이어지는 과정이 한눈에 이해하기 쉽게 직관적으로 연결되며, 간단한 참여 구조만으로도 실현 가능한 아이디어인가.",
  },
];

const YccPossibility = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <div className="text-gray-900 font-T02-B"> 평가 기준</div>

      <SectionBlock
        heading="실현 가능성"
        description={`캠페인 아이디어가 주어진 예산, 기간, 매체, 실행 환경 등 현실적인 제약을 고려하여 실행 가능한 수준으로 설계되었으며, 
          이를 통해 무엇이 바뀔 수 있는지에 대한 기대효과가 구체적이고 설득력 있게 제시되었는지를 평가함.`}
        items={YCC_Possibility}
      />
    </div>
  );
};

export default YccPossibility;
