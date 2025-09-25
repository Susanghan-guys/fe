import React from "react";
import SectionBlock from "../SectionBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const POSSIBILITY_ITEMS: Item[] = [
  {
    id: 1,
    title: "기술적/제작적 실현 가능성",
    desc: "현존하는 기술로 구현 가능한 캠페인 아이디어인가.",
  },
  {
    id: 2,
    title: "실행의 구체성",
    desc: "캠페인 실행 방식이 단순한 개념 제안에 그치지 않고, 실제 구현 과정을 어느 정도 가늠할 수 있을 만큼 구체적으로 설명되었는가.",
  },
  {
    id: 3,
    title: "기대효과의 설득력",
    desc: "캠페인을 통해 무엇이 바뀔 수 있는지, 어떤 긍정적인 변화가 일어날 수 있는지에 대한 기대효과가 납득 가능한 수준인가.",
  },
  {
    id: 4,
    title: "문제 정의의 실질성",
    desc: "타겟이 캠페인에 도달하기 위해 전제되어야 하는 조건들이 과하게 이상적이거나 비현실적이지는 않은가.",
  },
  {
    id: 5,
    title: "실행 방안의 시각적 표현",
    desc: "디자인이 캠페인의 핵심 내용을 효과적으로 시각화하고 있으며, 이를 통해 캠페인을 실제로 실행했을 때의 모습이 자연스럽게 그려지는가.",
  },
];

const Possibility = () => {
  const isMobile = useIsMobile();
  return (
    <div className={`${isMobile ? "mt-9" : "mt-[108px]"} flex flex-col`}>
      <SectionBlock
        heading="실현 가능성"
        description={` 캠페인 아이디어가 주어진 예산, 기간, 매체, 실행 환경 등 현실적인 제약을 고려하여 실행 가능한 수준으로 설계되었으며,
          이를 통해 무엇이 바뀔 수 있는지에 대한 기대효과가 설득력 있게 제시되었는지를 평가함.`}
        items={POSSIBILITY_ITEMS}
      />
    </div>
  );
};

export default Possibility;
