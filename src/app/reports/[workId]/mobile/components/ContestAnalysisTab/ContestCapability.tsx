import React from "react";

interface CapabilityItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

function CapabilityItem({
  title,
  description,
  isLast = false,
}: CapabilityItemProps) {
  return (
    <div>
      <h3 className="font-T03-SB text-blue-main mb-3">{title}</h3>
      <p className="font-B01-R text-gray-800">{description}</p>
      {!isLast && <div className="border-t border-[#ececec] my-9"></div>}
    </div>
  );
}

function ContestCapability({ contest }: { contest: string }) {
  const DCA_capabilities = [
    {
      title: "브리프 해석능력",
      description:
        "DCA는 매년 다양한 브랜드와 그에 맞는 과제들을 제시해주는 공모전이에요. 때문에, 선택한 브랜드가 정말 원하는 것과 과제를 올바르게 해석하는 것이 중요해요!",
    },
    {
      title: "매체 활용의 창의성",
      description:
        "DCA는 브리프보드 제출이 기본으로, 출품작이 매우 많은 공모전입니다. 때문에, 차별화된 매체 선정으로 돋보이는 창의성을 제시하는 것이 중요해요!",
    },
    {
      title: "개념의 전환",
      description:
        "광고 공모전의 기본은 바로 인사이트. 당연한 현상을 다르게 바라보고 해석하여 새로운 방향을 제시하는 능력이 핵심이에요.",
    },
  ];

  const YCC_capabilities = [
    {
        title: "열린 주제",
        description:
          "명확한 RFP 없이 포괄적인 주제를 갖고 있어요. 때문에, 구체적이고 명확하면서, 사람들이 공감할 수 있는 아젠다를 선정하는 것이 중요해요!",
      },
      {
        title: "매체 활용의 창의성",
        description:
          "YCC는 후보작을 대상으로 실제 멘토가 붙어 집행까지 이루어지는 공모전이에요. 때문에 대학생 수준에서 구현가능한 규모와 현실성을 고려해야해요.",
      },
      {
        title: "개념의 전환",
        description:
          "YCC는 아이디어를 바탕으로 실제 캠페인 진행이 이루어지기 때문에, 사람들의 인지와 자연스러운 참여를 유도하는 확산 전략의 구체적이고 현실적인 설계가 중요해요!",
      },
  ];

  return (
    <div className="bg-white rounded-lg w-[453px]">
      <div className="space-y-0">
        {contest === "DCA"
          ? DCA_capabilities.map((capability, index) => (
              <CapabilityItem
                key={index}
                title={capability.title}
                description={capability.description}
                isLast={index === DCA_capabilities.length - 1}
              />
            ))
          : YCC_capabilities.map((capability, index) => (
              <CapabilityItem
                key={index}
                title={capability.title}
                description={capability.description}
                isLast={index === YCC_capabilities.length - 1}
              />
            ))}
      </div>
    </div>
  );
}

export default ContestCapability;
