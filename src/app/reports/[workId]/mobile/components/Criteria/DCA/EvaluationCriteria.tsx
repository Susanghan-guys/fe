import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const EVALUATION_ITEMS: Item[] = [
  {
    id: 1,
    title: "타겟 인사이트 도출 여부",
    desc: "브리프의 기본 정보에 그치지 않고, 타겟에 대한 추가적인 인사이트나 문제의식이 도출되었는가.",
  },
  {
    id: 2,
    title: "아이디어의 타겟 연계성",
    desc: "캠페인 아이디어가 타겟의 특성과 논리적으로 연결되어 있으며, 그들의 동기·감정·행동을 효과적으로 반영하였는가.",
  },
  {
    id: 3,
    title: "행동 유도 전략의 타겟화 여부",
    desc: "타겟의 특성에 기반한 구체적인 행동 유도 전략(참여, 공유, 구매 등)이 포함되어 있는가.",
  },
  {
    id: 4,
    title: "타겟과의 접점 고려 여부",
    desc: "타겟이 자주 접하는 미디어 채널이나 물리적 접점을 고려해 캠페인이 기획 되었는가.",
  },
  {
    id: 5,
    title: "타겟의 라이프스타일과의 접점 여부",
    desc: "캠페인 아이디어가 타겟의 일상, 취향, 소비 습관 등 라이프스타일 전반과 자연스럽게 맞닿아 있는가.",
  },
];

const EvaluationCriteria = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <div className="text-gray-900 font-T02-B"> 평가 기준</div>

      <SectionBlock
        heading="타겟 적합성"
        description={`작품에서 브리프가 제시한 주요 타겟이 가진 특성 (니즈, 관심사, 행동 양식)을 명확히 정의했으며,
          이것이 캠페인 아이디어와 논리적으로 연결되어 있는지를 평가함.`}
        items={EVALUATION_ITEMS}
      />
    </div>
  );
};

export default EvaluationCriteria;
