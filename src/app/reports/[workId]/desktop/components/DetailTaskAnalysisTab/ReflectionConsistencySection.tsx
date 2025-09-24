import React from "react";
import { useDcaBriefEvaluation } from "@/hooks/queries";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ReflectionConsistencySectionProps {
  workId: number;
}

function ReflectionConsistencySection({
  workId,
}: ReflectionConsistencySectionProps) {
  // DCA 브리프 해석 데이터 가져오기
  const { data: briefData, isLoading, error } = useDcaBriefEvaluation(workId);
  const isMobile = useIsMobile();
  // 로딩 중일 때 스켈레톤 UI 표시
  if (isLoading) {
    return (
      <div className="flex gap-[53px]">
        <div className="flex-1">
          <div className="h-[24px] bg-gray-200 rounded mb-[23px] animate-pulse"></div>
          <div className="h-[120px] bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  // 에러 발생 시 기본 텍스트 표시
  if (error || !briefData?.isSuccess || !briefData.result) {
    return (
      <div className="flex gap-[53px]">
        <div className="flex-1">
          <h3
            className={` text-blue-main mb-[23px] ${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            }`}
          >
            반영 일관성
          </h3>
          <p
            className={`text-gray-800 ${
              isMobile ? "font-B02-R" : "font-B01-R"
            }`}
          >
            기획 의도에서 제시한 &apos;허전함을 부드럽게 채운다&apos;는 콘셉트가
            매체 아이디어와 실행 과정 전반에 일관되게 드러난다. 버스 창문이
            열리고 닫히는 물리적 구조를 활용해 &apos;채워짐&apos;의 상징을
            구현한 점은 브랜드 자산과 브리프 요구를 효과적으로 시각화했다.
            전반적으로 브랜드 요구사항과 실행 아이디어가 잘 맞물린 사례로,
            물리적 매체 특성을 브랜드 자산과 연결한 점이 돋보인다.
          </p>
        </div>
      </div>
    );
  }

  const { consistency } = briefData.result;

  return (
    <div className="flex gap-[53px]">
      <div className="flex-1">
        <h3
          className={` text-blue-main mb-[23px] ${
            isMobile ? "font-B01-SB" : "font-T03-SB"
          }`}
        >
          반영 일관성
        </h3>
        <p
          className={`text-gray-800 ${isMobile ? "font-B02-R" : "font-B01-R"}`}
        >
          {consistency}
        </p>
      </div>
    </div>
  );
}

export default ReflectionConsistencySection;
