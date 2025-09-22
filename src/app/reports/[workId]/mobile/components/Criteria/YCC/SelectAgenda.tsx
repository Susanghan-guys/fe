import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const SELECT_AGENDA: Item[] = [
  {
    id: 1,
    title: "생활 밀착도",
    desc: "과하게 거창하거나 이질적인 주제가 아니라, 일상에서 실제로 겪거나 쉽게 접할 수 있는 상황/불편함/이슈에 기반하고 있는가.",
  },
  {
    id: 2,
    title: "민감도 회피 및 긍정성 유지",
    desc: "사회문제를 다루되, 불쾌함·피로감·양극화를 유발하지 않고, 누구나 가볍게 웃으며 받아들이거나 참여할 수 있는 긍정적인 톤을 유지했는가.",
  },
  {
    id: 3,
    title: "인식 전환 유도",
    desc: `단순한 정보 제공만으로도 타겟의 인식이나 행동에 실질적인 영향을 줄 수 있을 만큼, \n 정보 전달 그 자체가 캠페인 설계에서 핵심적인 역할을 하는 주제인가.`,
  },
  {
    id: 4,
    title: "공공성 기반의 확산 가능성",
    desc: "주제가 개인 내부 문제에 국한되지 않고, 사회적으로 공유 및 확산이 가능한 성격인가.",
  },
  {
    id: 5,
    title: "문제의 명확성",
    desc: "캠페인이 해결하고자 하는 문제가 복잡하거나 모호한 사회적 담론이 아니라, 어떤 문제인지 즉시 파악 가능한가.",
  },
];

const SelectAgenda = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <SectionBlock
        heading="아젠다 선정"
        description={`타겟이 쉽게 공감할 수 있는 긍정적인 확장 가능성을 지닌 주제이며, 사회적으로 민감하거나 과도하게 논쟁적이지 않은 주제를 선정했는지를 평가함.`}
        items={SELECT_AGENDA}
      />
    </div>
  );
};

export default SelectAgenda;
