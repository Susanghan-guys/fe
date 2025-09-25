"use client";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CoreCapabilityCardProps {
  title: string;
  description: string;
}

function CoreCapabilityCard({ title, description }: CoreCapabilityCardProps) {
  const isMobile = useIsMobile();

  return (
    <div
      className={`border border-blue-main rounded-[16px] flex-1 ${
        isMobile ? "px-[35px] py-[27px]" : "pl-[35px] pr-[17px] py-[27px]"
      }`}
    >
      <h3
        className={`text-blue-main mb-[10px] ${
          isMobile ? "font-T04-SB" : "font-T03-SB"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-gray-700 ${
          isMobile ? "font-B02-R leading-relaxed" : "font-B01-R"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

interface AwardCardProps {
  title: string;
  subtitle: string;
  tags?: string[];
  summary: string;
  image: string;
  width: number;
  height: number;
}

function AwardCard({
  title,
  subtitle,
  tags,
  summary,
  image,
  width,
  height,
}: AwardCardProps) {
  const isMobile = useIsMobile();
  return (
    <div className="bg-white rounded-[16px] py-[27px] px-[35px] border border-gray-200 w-full">
      <div className="mb-3">
        <h3
          className={`text-blue-main mb-[9px] ${
            isMobile ? "font-T04-SB" : "font-T03-B"
          }`}
        >
          {" "}
          {title}
        </h3>

        <div className="flex flex-wrap gap-[14px] mb-[27px]">
          <div
            className={`text-gray-800 ${
              isMobile ? "font-B01-R" : "font-T04-SB"
            }`}
          >
            {subtitle}
          </div>

          <div className="flex gap-2 flex-wrap">
            {tags?.map((tag, index) => (
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

      <div className="mb-8 flex justify-center">
        <Image
          src={image}
          alt={subtitle}
          width={width}
          height={height}
          className="rounded object-contain"
        />
      </div>

      <div>
        <p className="text-gray-500 font-B01-M mb-[10px]">Summary</p>
        <pre
          className={`text-gray-900 w-full whitespace-pre-line ${
            isMobile ? "font-B02-R" : "font-B01-M"
          }`}
        >
          {summary}
        </pre>
      </div>
    </div>
  );
}

function CapabilityAndAwardsSection({
  capabilities,
  works,
}: {
  capabilities: { title: string; description: string }[];
  works: AwardCardProps[];
}) {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className={`gap-4 ${isMobile ? "flex flex-col" : "grid grid-cols-2"}`}
      >
        {capabilities.map((capability, index) => (
          <CoreCapabilityCard
            key={index}
            title={capability.title}
            description={capability.description}
          />
        ))}
      </div>

      <div
        className={`gap-6 mt-6 ${
          isMobile ? "flex flex-col" : "grid grid-cols-2"
        }`}
      >
        {works.map((work, index) => (
          <AwardCard key={index} {...work} />
        ))}
      </div>
    </>
  );
}

interface AwardCriteriaProps {
  contestName: "DCA" | "YCC";
}

function AwardCriteria({ contestName }: AwardCriteriaProps) {
  const dcaData = [
    {
      capabilities: [
        {
          title: "경험의 극대화",
          description:
            "브랜드 경험을 극대화 시키는 상황, 매체를 발견하여 효과적인 브랜드 메시지 전달",
        },
        {
          title: "진정성",
          description:
            "해당 브랜드만이 제시할 수 있는 진정성 있는 방식으로 공감을 유도",
        },
      ],
      works: [
        {
          title: "그랑프리",
          subtitle: "Kool ME, Heal ME",
          tags: ["롯데칠성음료 크러시"],
          summary: `Krush 풀오픈캔을 형상화한 인터렉티브 구조물에 탄산감과 시원함, 뚜껑이 열릴때의 소리까지, 제품의 USP를 꾹꾹 눌러담아 타깃에게 전달하는 첨예한 전략과 디테일이 돋보임. 디테일한 설명과는 대비되게, 타깃이 느끼는 경험은 쉽고 직관적인 점이 인상적.`,
          image: "/image/dcaanalyze/dca_grangfree.png",
          width: 418,
          height: 308,
        },
        {
          title: "Gold",
          subtitle: "함께하는 모두에게 쏙",
          tags: ["롯데웰푸드 빼빼로"],
          summary: `마음을 전한다는 빼빼로의 본질적 가치를 유지하면서도, 타인을 생각하는 마음이라는 새로운 소재로 표현한 것이 인상적. 마음을 전하는 과정의 어려움을 빼빼로를 매개체로 완화하고자 한 시도에서 느껴지는 캠페인의 진정성.`,
          image: "/image/dcaanalyze/dca_gold.png",
          width: 418,
          height: 308,
        },
      ],
    },
    {
      capabilities: [
        {
          title: "포지셔닝",
          description:
            "일상 속 당연함에서 반전을 제공, 타깃의 행동 경로에 자연스럽게 녹아드는 포지셔닝 전략",
        },
        {
          title: "익숙한 매체의 새로운 변주",
          description:
            "익숙한 매체에 경험 장치-요소를 결합하여 새로운 활용 방향을 제시",
        },
      ],
      works: [
        {
          title: "Gold",
          subtitle: "톡! 떨어진, 땀 말리는 에어리즘",
          tags: ["유니클로 에어리즘"],
          summary: `‘땀’이 가지는 긴장, 부끄러움 등의 상징적 요소로 새롭게 접근하였으며, 이모티콘을 통해 땀이 다양한 감정 표현 수단으로 사용되고 있다는 점을 포착함. 이스터에그 기능으로 시각적 재미와 높은 바이럴 효과, 구매유도까지 이어지는 흐름이 뛰어남.`,
          image: "/image/dcaanalyze/dca_positioning.png",
          width: 418,
          height: 234,
        },
        {
          title: "Gold",
          subtitle: "티켓 투 몬스터버스",
          tags: ["롯데월드"],
          summary: `평소 어트렉션 탑승시 체험할 수 있는 리액션캠의 경험을 포토부스에 의자를 설치하여 일상속으로 꺼내온 점이 인상적. 자칫 뻔할 수 있는 포토부스 매체에 흔들림과 같은 어트렉션 요소로 새로운 매체 활용의 방향성을 제시, 티켓을 통한 방문 유도 요소도 매력적.`,
          image: "/image/dcaanalyze/dca_tickettobus.png",
          width: 418,
          height: 234,
        },
      ],
    },
    {
      capabilities: [
        {
          title: "서로 다른 영역의 연결",
          description:
            "전혀 다른 분야를 연결하여 새로운 긍정적 화학 반응을 일으킴",
        },
        {
          title: "경험의 극대화",
          description:
            "브랜드 경험을 극대화 시키는 상황, 매체를 발견하여 효과적인 브랜드 메시지 전달",
        },
      ],
      works: [
        {
          title: "Gold",
          subtitle: "사랑의 빼터리",
          tags: ["롯데웰푸드"],
          summary: `1020 타깃의 응원 문화와 응원봉이라는 소재와 그 과정에서 나타나는 건전지 방전, 폐건전지 문제를 빼빼로와 연결짓는 독창적인 발상. 자칫 복잡해질 수 있는 독특한 소재들을 환경 캠페인과 구체적인 step, 연계 아이디어로 논리적으로 연결한 점이 인상적.`,
          image: "/image/dcaanalyze/dca_lovebattery.png",
          width: 418,
          height: 308,
        },
        {
          title: "Silver",
          subtitle: "답답함 속, 쾌적함",
          tags: ["유니클로 에어리즘"],
          summary: `땀과 습기가 가장 극대화되는 순간을 발굴하여 육체와 감정 두가지의 동기부여를 제공한 점이 인상깊음. ‘흡방습성’이라는 키워드를 가장 잘 표현할 수 있는 매체를 활용하여 티셔츠 모양으로 표현한 거울은 시각적 임팩트를 제공함.`,
          image: "/image/dcaanalyze/dca_cleaning.png",
          width: 418,
          height: 308,
        },
      ],
    },
    {
      capabilities: [
        {
          title: "서로 다른 영역의 연결",
          description:
            "전혀 다른 분야를 연결하여 새로운 긍정적 화학반응을 일으키는 접점 창조",
        },
        {
          title: "솔루션 도달의 전략적인 설계",
          description:
            "아이디어를 더 매력적이고 설득력있게 만드는 도달-연계 전략",
        },
      ],
      works: [
        {
          title: "Silver",
          subtitle: "[정품인증]을 확인하세요",
          tags: ["롯데GRS 롯데리아"],
          summary: `RFP에서 제안한 불고기버거의 오리지널리티를 ‘정품인증’의 맥락에서, 동일한 니즈가 극대화된 리셀 플랫폼과 연결지은 점이 매우 신선함. 또한, 이를 브랜드의 주장이 아닌, 검증된 플랫폼이라는 메시지로 전달하는 것이 인상적.`,
          image: "/image/dcaanalyze/dca_lotteria.png",
          width: 418,
          height: 308,
        },
        {
          title: "Silver",
          subtitle: "뽑빼로, 즐거움을 100빼로 나누자",
          tags: ["롯데웰푸드 빼빼로"],
          summary: `맛을 선택한다는 당연한 공식을 반전시킨 랜덤 방식의 패키지 아이디어가 인상적. 빼빼로의 익숙함이 랜덤 패키지의 신선함을 더 부각되게 느껴지게 하며, 패키지 자체보다 이를 알리는 홍보, 확산 방안에 집중한 것이 실질적 효과성에 대한 기대와 타깃 적합성을 강화시킴.`,
          image: "/image/dcaanalyze/dca_lottefood.png",
          width: 418,
          height: 308,
        },
      ],
    },
    {
      capabilities: [
        {
          title: "서로 다른 영역의 연결",
          description:
            "전혀 다른 분야를 연결하여 새로운 긍정적 화학반응을 일으키는 접점 창조",
        },
      ],
      works: [
        {
          title: "Silver",
          subtitle: "너가 노는 사이, 다 지켜줄게",
          tags: ["SBI저축은행 사이다뱅크"],
          summary: `MZ 타깃의 페스티벌 트렌드 속 물품 보관함을 통해 ‘안전성’, ‘가벼운 해방감’이라는 사이다뱅크의 강점을 상기시킨 연결성이 돋보임. 편의성을 기반으로 타깃의 자연스러운 참여를 유도하며 귀중품을 맡기고 찾는 경험이 서비스 이용 경험으로 연상/확장되는 점이 인상적.`,
          image: "/image/dcaanalyze/dca_bank.png",
          width: 418,
          height: 308,
        },
      ],
    },
  ];

  const yccData = [
    {
      capabilities: [
        {
          title: "직관성",
          description:
            "타겟의 관점에서 문제를 발견하고, 사용자의 참여를 이끌어낼 수 있는 직관적인 해결 방법",
        },
        {
          title: "실현가능성",
          description:
            "시의성 있는 아젠다를 선정하면서도, 본질적 문제를 해결할 수 있는 실현 가능성",
        },
      ],
      works: [
        {
          title: "본선 진출작",
          subtitle: "던지면 싹이 트는 발아톤, 씨드컵",
          summary: `러닝 트렌드의 그림자라 할 수 있는 급수 후 버려지는 종이컵 문제를 ‘버리는 행위’ 자체가 ‘씨앗을 심는 행위’로 전환했다. ‘못하게’가 아닌 ‘더 하게’의 방식으로 문제를 풀어낸 점과 옥상정원으로의 연계가 인상적임.`,
          image: "/image/yccanalyze/ycc_seedcup.png",
          width: 418,
          height: 234,
        },
        {
          title: "본선 진출작",
          subtitle: "소방냥이를 찾아라",
          summary: `안전불감증을 대표하는 소화기 위치 인지의 문제를 ‘찾고 싶은’ 소방냥이를 찾는 액션으로 재해석함. 실행에 용이한 작은 넛지로도 큰 문제를 해결할 수 있다는 점을 보여줌으로써 실현 가능성과 문제 해결력을 모두 충족함.`,
          image: "/image/yccanalyze/ycc_cat.png",
          width: 418,
          height: 234,
        },
        {
          title: "본선 진출작",
          subtitle: "본리할 용기, 수거했어 오늘도",
          summary: `여전히 심각한 강한 한강 쓰레기 문제를 타겟의 입장에서 보다 친근하게 풀어냄. 쓰레기를 모아 분리수거장으로 가져가는 과정을 ‘애벌분리수거’로 재해석해, 분리수거 행동 자체를 새롭게 정의하고 참여율을 높였다는 점이 돋보임.`,
          image: "/image/yccanalyze/ycc_today.png",
          width: 418,
          height: 234,
        },
        {
          title: "본선 진출작",
          subtitle: "치매조기예방의 일상화를 위한 캠페인, 깜빡예보 대기표",
          summary: `노령층이 자주 찾는 장소의 대기표를 매체로 전환함. 노출도와 주목도가 모두 높은 대기표를 통해 ‘실종’ 이라는 결과가 아닌, ‘예방’에 초점을 맞추고, 구체적 실천을 유도한 점이 효과적이었음.`,
          image: "/image/yccanalyze/ycc_campaign.png",
          width: 418,
          height: 234,
        },
      ],
    },
  ];

  const data = contestName === "DCA" ? dcaData : yccData;

  return (
    <div className="space-y-12 w-full">
      {data.map((section, idx) => (
        <CapabilityAndAwardsSection
          key={idx}
          capabilities={section.capabilities}
          works={section.works}
        />
      ))}
    </div>
  );
}

export default AwardCriteria;
