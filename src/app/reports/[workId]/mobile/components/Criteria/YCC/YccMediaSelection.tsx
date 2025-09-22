import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const YCC_MEDIA_SELECTION_ITEMS: Item[] = [
  {
    id: 1,
    title: "캠페인 목적에 적합한 매체 전략 선정 여부",
    desc: "인지도 제고, 행동 유도, 브랜드 경험 제공 등 캠페인의 핵심 목표에 부합하는 매체 유형과 포맷이 전략적으로 선정 되었는가.",
  },
  {
    id: 2,
    title: "매체 활용의 창의성 및 확장성",
    desc: "익숙한 매체를 새롭게 활용하거나, 타겟의 주목을 끌 수 있는 창의적 매체 기획 또는 새로운 미디어 접점 발굴이 이루어졌는가.",
  },
  {
    id: 3,
    title: "맥락 및 상황에 기반한 매체 활용 여부",
    desc: "타겟의 일상생활 동선, 특정 시간대, 장소, 행동 맥락을 고려하여 매체가 전략적으로 배치되고 활용되었는가.",
  },
  {
    id: 4,
    title: "실행 용이성",
    desc: `매체 활용 방식이 복잡한 기술, 과도한 예산, 전문가 수준의 제작을 요구하지 않고, \n 대학생 수준에서도 충분히 구현 가능한 현실적인 범위 내에 설계되었는가.`,
  },
  {
    id: 5,
    title: "메시지 전달 방식의 직관성",
    desc: "매체를 통해 전달되는 콘텐츠(카피, 비주얼, 인터랙션 등)가 복잡한 해석 없이도 타겟이 즉시 이해하고 반응할 수 있도록 구성되었는가.",
  },
];

const YccMediaSelection = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <SectionBlock
        heading="매체 선정"
        description={` 캠페인의 핵심 메시지와 타겟 특성, 브랜드 전략을 바탕으로, 적절하고 전략적인 매체를 선정했으며,
          그 활용 방식 또한 맥락에 맞고 창의적이며 목적 지향적으로 설계되었는지를 평가함.`}
        items={YCC_MEDIA_SELECTION_ITEMS}
      />
    </div>
  );
};

export default YccMediaSelection;
