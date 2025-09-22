import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const PROBLEM_DEFINE_ITEMS: Item[] = [
  {
    id: 1,
    title: "문제 정의의 명확성과 설득력",
    desc: "브리프의 기본 정보에 그치지 않고, 타겟에 대하 추가적인 인사이트나 문제의식이 도출되었는가.",
  },
  {
    id: 2,
    title: "자료와 문제정의 간의 일관성 연계성",
    desc: `참고한 자료들이 단순히 나열되는 데 그치지 않고, 캠페인이 설정한 문제의식과 긴밀하게 연결되어 있는가,\n 그리고 그 해석이 자료 전반에 걸쳐 일관된 논리 구조로 전개되었는가.`,
  },
  {
    id: 3,
    title: "과제 해석의 충실성",
    desc: "브리프에서 제시한 문제 상황에서 벗어나지 않는 문제 정의인가.",
  },
  {
    id: 4,
    title: "문제 정의의 실질성",
    desc: "브랜드, 타겟, 시장에 대한 충분한 이해를 바탕으로 표면적 진단을 넘어서, 실제 개선이 필요한 핵심 지점을 정확히 도출하였는가.",
  },
  {
    id: 5,
    title: "문제 정의의 차별성",
    desc: "차별화된 시선으로 문제를 정의하고, 그것을 우리만의 언어로 표현해서 전달하였는가.",
  },
];

const ProblemDefinition = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <SectionBlock
        heading="문제 정의"
        description={`캠페인이 해결하고자 하는 핵심 문제를 브리프의 단순 재진술에 그치지않고,
          브랜드·타겟·시장 맥락에 기반해 재해석하고 구체화했는지를 평가함.`}
        items={PROBLEM_DEFINE_ITEMS}
      />
    </div>
  );
};

export default ProblemDefinition;
