import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const YCC_EFFECT: Item[] = [
  {
    id: 1,
    title: "참여 유도력",
    desc: "캠페인이 타겟의 자발적인 참여 욕구를 자극할 수 있도록 매력적이고 현실적인 참여 방식을 제시했는가.",
  },
  {
    id: 2,
    title: "성과 측정 가능성",
    desc: "캠페인의 기대효과를 어느정도 확인할 수 있도록 기획되었는지, 실행 후 결과를 측정·분석할 수 있는 가능성이 있는가.",
  },
  {
    id: 3,
    title: "확장성",
    desc: "캠페인이 특정 상황이나 일회성 이벤트에 국한되지 않고, 다양한 상황과 타겟, 채널로 자연스럽게 확장될 수 있는 구조를 갖추었는가.",
  },
  {
    id: 4,
    title: "실효성",
    desc: "캠페인의 전반적인 기획과 실행 방식이 보여주기식이 아닌, 문제 해결에 실질적으로 기여할 수 있는 방식으로 설계되었는가.",
  },
  {
    id: 5,
    title: "화제성",
    desc: "캠페인이 시의성 높은 소재나 의외의 전개 방식을 통해 주목을 끌고, 자연스러운 이슈화로 이어질 수 있도록 설계되었는가.",
  },
];

const Effect = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <SectionBlock
        heading="영향력"
        description={`캠페인이 타겟의 자발적인 참여를 유도하면서, 넓은 범위로 확산되어서 유의미한 사회적 임팩트로 이어질 수 있는지를 평가함.`}
        items={YCC_EFFECT}
      />
    </div>
  );
};

export default Effect;
