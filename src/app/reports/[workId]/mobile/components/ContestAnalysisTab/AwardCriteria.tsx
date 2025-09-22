import React from "react";

interface CoreCapabilityCardProps {
  title: string;
  description: string;
}

function CoreCapabilityCard({ title, description }: CoreCapabilityCardProps) {
  return (
    <div className="border border-blue-main px-[35px] py-[27px] rounded-[16px] flex-1">
      <h3 className="text-blue-main font-T03-SB mb-[10px]">{title}</h3>
      <p className="text-gray-700 font-B01-R">{description}</p>
    </div>
  );
}

interface AwardCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
}

function AwardCard({ title, subtitle, tags, summary }: AwardCardProps) {
  return (
    <div className="bg-white rounded-[16px] py-[27px] pl-[35px] pr-[19px] border border-gray-200">
      <div className="mb-3">
        <h3 className="font-T03-B text-blue-main mb-[9px]">{title}</h3>
        <div className="flex gap-[14px] mb-[27px]">
          <p className="text-gray-800 font-T04-SB ">{subtitle}</p>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-main font-B03-SB px-[10px] py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 이미지 플레이스홀더 */}
      <div className="bg-gray-200 w-full h-[234px] rounded mb-8"></div>

      <div>
        <p className="text-gray-500 font-B01-M mb-[10px]">Summary</p>
        <p className="text-gray-900 font-B01-M">{summary}</p>
      </div>
    </div>
  );
}

function AwardCriteria() {
  const coreCapabilities = [
    {
      title: "Reframing",
      description:
        "당연하게 생각하던 개념을 재해석해, 이를 새로운 아이디어로 전환하는 창의적인 접근",
    },
    {
      title: "Feasibility",
      description:
        "창의적인 메세지를 실현가능성을 살려 구체적으로 풀어낼 수 있는 능력",
    },
  ];

  const grandPrizeWorks = [
    {
      title: "대상",
      subtitle: "탐스러운 탐스",
      tags: ["탐스", "Visual"],
      summary: "○○ 개념을 잡고 어쩌구 저쩌구 ㅇㅇ 개념을 잡고 어쩌구 저쩌",
    },
    {
      title: "대상",
      subtitle: "탐스러운 탐스",
      tags: ["탐스", "Visual"],
      summary: "○○ 개념을 잡고 어쩌구 저쩌구 ㅇㅇ 개념을 잡고 어쩌구 저쩌",
    },
  ];

  const bronzePrizeWorks = [
    {
      title: "동상",
      subtitle: "이젠 모두가 롯데리아",
      tags: ["롯데리아", "Visual"],
      summary: "○○ 매체 활용, 가장 수상 가능성 높았음",
    },
    {
      title: "동상",
      subtitle: "이젠 모두가 롯데리아",
      tags: ["롯데리아", "Visual"],
      summary: "○○ 매체 활용, 가장 수상 가능성 높았음",
    },
  ];

  return (
    <div className="space-y-8 w-full">
      <div>
        <h2 className="font-T02-B text-gray-900 mb-[52px]">수상 포인트</h2>
        <div className="flex gap-4">
          {coreCapabilities.map((capability, index) => (
            <CoreCapabilityCard
              key={index}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>

      {/* 수상작 섹션 */}
      <div className="grid grid-cols-2 gap-6">
        {/* 대상 수상작 */}
        <div className="space-y-4">
          {grandPrizeWorks.map((work, index) => (
            <AwardCard
              key={index}
              title={work.title}
              subtitle={work.subtitle}
              tags={work.tags}
              summary={work.summary}
            />
          ))}
        </div>

        {/* 동상 수상작 */}
        <div className="space-y-4">
          {bronzePrizeWorks.map((work, index) => (
            <AwardCard
              key={index}
              title={work.title}
              subtitle={work.subtitle}
              tags={work.tags}
              summary={work.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AwardCriteria;
