import React from "react";
import SectionBlock from "../SectionBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const BRAND_UNDERSTAND_ITEMS: Item[] = [
  {
    id: 1,
    title: "브랜드 의도성 파악",
    desc: "브리프에서 제시된 브랜드의 진짜 의도를 깊이 있게 해석해내고, 그 해석이 작품 전반에 일관되게 반영되었는가.",
  },
  {
    id: 2,
    title: "브랜드 고유 자산 반영 여부",
    desc: "브랜드의 미션, 역사, 해리티지, 제품 철학 등 브랜드가 지켜온 고유한 아이덴티티를 헤치지 않는가.",
  },
  {
    id: 3,
    title: "해당 브랜드만이 가능한 아이디어인지 여부",
    desc: "동일한 캠페인 아이디어가 다른 브랜드에서 진행했을 경우 대체될 수 없는, 그 브랜드여야만 가능한 접근인가.",
  },
  {
    id: 4,
    title: "브랜드가 속한 카테고리에 대한 이해",
    desc: "해당 캠페인이 브랜드가 속한 제품/산업 카테고리 특성을 고려해 제작한 캠페인인가. (예: 자동차,식음료, 금융 서비스 등)",
  },
  {
    id: 5,
    title: "시장 및 브랜드 시의성 반영 여부",
    desc: "브랜드가 당면한 시장 변화, 이미지 전환 등의 맥락을 이해하고, 이를 능동적으로 해석하거나 돌파하려는 시도가 있었는가.",
  },
];

const BrandUnderstand = () => {
  const isMobile = useIsMobile();
  return (
    <div className={`${isMobile ? "mt-9" : "mt-[108px]"} flex flex-col`}>
      <SectionBlock
        heading="브랜드 이해도"
        description={`캠페인 아이디어가 주어진 예산, 기간, 매체, 실행 환경 등 현실적인 제약을 고려하여 실행 가능한 수준으로 설계되었으며,\n이를 통해 무엇이 바뀔 수 있는지에 대한 기대효과가 설득력 있게 제시되었는지를 평가함.`}
        items={BRAND_UNDERSTAND_ITEMS}
      />
    </div>
  );
};

export default BrandUnderstand;
