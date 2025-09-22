import React from "react";
import SectionBlock from "../SectionBlock";

type Item = {
  id: number;
  title: string;
  desc: string;
};

const YCC_ABILITY: Item[] = [
  {
    id: 1,
    title: "스토리텔링",
    desc: "작품이 단순한 정보 전달을 넘어서, 메시지를 이야기 구조 안에 녹여내어 타겟이 몰입할 수 있도록 구성 되었는가.",
  },
  {
    id: 2,
    title: "공감 유도",
    desc: "작품이 평가자의 감정적인 반응을 이끌어낼 수 있는 서사와 표현을 갖추었는가.",
  },
  {
    id: 3,
    title: "시각·언어 표현의 완성도",
    desc: "메시지를 시각/언어적으로 풀어낸 방식이 캠페인의 감정적 분위기 및 전달 목표와 어울리며, 전달 효과를 높이고 있는가.",
  },
  {
    id: 4,
    title: "논리성",
    desc: `캠페인이 전달하고자 하는 메시지와 해결하고자 하는 문제가 자료, 인사이트, 아이디어로 자연스럽고 논리적으로 연결되어 있으며, \n 그 흐름이 명확히 전달되는가.`,
  },
  {
    id: 5,
    title: "직관적인 네이밍",
    desc: "캠페인명, 슬로건, 혹은 카피가 명확하고 인상적으로 표현되어, 짧은 시간 안에 타겟에게 강하게 기억되는가.",
  },
];

const Ability = () => {
  return (
    <div className="mt-[108px] flex flex-col">
      <SectionBlock
        heading="전달력"
        description={`캠페인이 타겟의 자발적인 참여를 유도하면서, 넓은 범위로 확산되어서 유의미한 사회적 임팩트로 이어질 수 있는지를 평가함.`}
        items={YCC_ABILITY}
      />
    </div>
  );
};

export default Ability;
