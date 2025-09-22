import BBaBBaro from "./brandBrief/BBaBBaro";
import Tams from "./brandBrief/Tams";
import Aerism from "./brandBrief/Aerism";
import LotteWorld from "./brandBrief/LotteWorld";
import LotteGiants from "./brandBrief/LotteGiants";
import LotteRia from "./brandBrief/LotteRia";
import NexenTire from "./brandBrief/NexenTire";
import SBIBank from "./brandBrief/SBIBank";
import Krush from "./brandBrief/Krush";

interface BriefAnalysisSectionProps {
  brandName: string;
}

function BriefAnalysisSection({ brandName }: BriefAnalysisSectionProps) {
  // 브랜드별 컴포넌트 매핑
  const brandComponents = {
    빼빼로: BBaBBaro,
    탐스: Tams,
    크러시: Krush,
    에어리즘: Aerism,
    롯데월드: LotteWorld,
    롯데자이언츠: LotteGiants,
    롯데리아: LotteRia,
    넥센타이어: NexenTire,
    "SBI 저축은행 사이다뱅크": SBIBank,
  };

  // 해당 브랜드의 컴포넌트 가져오기
  const BrandComponent =
    brandComponents[brandName as keyof typeof brandComponents];

  // 브랜드 컴포넌트가 존재하면 렌더링, 없으면 기본 메시지 표시
  if (BrandComponent) {
    return <BrandComponent />;
  }

  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>
      <div className="p-[30px] border border-gray-200 rounded-[20px]">
        <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 정보</div>
        <div className="font-B01-M text-gray-800">
          {brandName} 브랜드에 대한 분석 정보를 준비 중입니다.
        </div>
      </div>
    </div>
  );
}

export default BriefAnalysisSection;
