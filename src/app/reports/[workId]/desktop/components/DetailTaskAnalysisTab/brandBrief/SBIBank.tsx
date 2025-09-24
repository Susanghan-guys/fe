import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";
import { useIsMobile } from "@/hooks/useIsMobile";

function SBIBank() {
  const isMobile = useIsMobile();
  return (
    <div>
      <div className={`text-gray-900 font-T02-B ${isMobile ? 'mt-[50px] mb-[52px]' : 'mt-[108px] mb-[52px]'}`}>
        브리프 분석
      </div>
      {/* 브랜드 소개 */}
      <div>
        <div className={`${isMobile ? 'px-[20px] py-[30px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div className={`${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-gray-900 mb-[32px]`}>브랜드 소개</div>

          <div className="space-y-[20px]">
            <div className="flex gap-[16px]">
              <div className={`${isMobile ? 'font-B02-M' : 'font-B01-M'} text-gray-500 min-w-[80px]`}>
                2019년
              </div>
              <div className="flex-1">
                <div className={`${isMobile ? 'font-B02-M' : 'font-B01-M'} text-gray-800 mb-[10px]`}>
                  사이다뱅크는 SBI저축은행에서 고객에게 더욱 혁신적이고 편리한
                  금융 경험을 제공하기 위해 2019년에 출시한 모바일 뱅킹 앱(App)
                  (*가입자 약 160만 명, 2025년 2월 기준)
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex-1">
                <div className={`${isMobile ? 'font-B02-M' : 'font-B01-M'} text-gray-800 mb-[10px]`}>
                  하루만 맡겨도 이자를 주는 파킹통장과 같은 예/적금 상품 및
                  비교대출 플랫폼 대비 금리할인, 한도증액 혜택이 있는 다이렉트
                  신용대출 상품 등 다양한{" "}
                  <BlueSpan>실전금융 상품/서비스</BlueSpan> 제공
                  <br />
                  <br />
                  스마트폰 앱을 통해 발생하는{" "}
                  <BlueSpan>각종 금융사기 예방</BlueSpan>을 위한 혁신적 신기술
                  적용 
                  <br />
                  (보이스피싱 앱 방지 솔루션인 페이크파인더, 통신사 개통 정보를
                  활용하는 안심본인확인 서비스, 신분증 위조 여부를 판별 시스템,
                  앱 설치 이력과 사용 패턴을 분석하는 명의도용 방지 기술 등)
                  <br />
                  <br />
                  [참고]
                  <br />
                  1) <BlueSpan>저축은행</BlueSpan>
                  <br />- 1금융권이 포용하지 못한 서민과 중소기업 금융 편의
                  도모를 위해 설립
                  <br />- 시중은행보다 높은 금리의 예/적금 상품, 중저신용자 대상
                  대출 상품이 특징  <br />
                  <br />
                  2) SBI저축은행
                  <br />- 1971년 설립, 2013년 글로벌 금융 그룹 SBI 일원으로 출범
                  <br />- 중저신용자 대상 중금리 신용대출 공급액 업계 1위
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`${isMobile ? 'font-B02-M' : 'font-B01-R'} text-gray-900`}>
              - 사이다 뱅크에 대한 소개와 경쟁사 대비 차별성 있는 기능에 대한
              소개 (편의성, 실질적 혜택, 안전성)
              <br />* 저축은행에 대한 추가적인 설명
              <br />
              <br />→ 브리프에서 다양한 기능을 소개하고 있지만, 직접 앱을
              사용하는 등 실제 사용자 입장에서 서비스를 파악해볼 필요가 있어요{" "}
              <br />→ 저축은행을 따로 설명하는 것을 통해, 매인 타깃은 중 저
              신용자 대상임을 확인할 수 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[70px]'}`}>
        <div className={`${isMobile ? 'px-[20px] py-[30px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div className={`${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-gray-900 mb-[32px]`}>시장 상황</div>

          <div className={`space-y-[20px] ${isMobile ? 'font-B02-M' : 'font-B01-M'}`}>
            <DashList>
              <BlueSpan>간편/접근성으로 수요를 이끌던 인터넷 뱅킹 3사</BlueSpan>{" "}
              (카카오뱅크, 케이뱅크, 토스)가 저축은행 주요 수익군인 중저신용자
              대출 공급까지 확대하며 공격적 접근
              <br />
              <br />
              <BlueSpan>
                1 금융권은 은행·카드·보험·증권 등 각 계열사의 핵심 서비스를 한
                앱(App)에서 해결할 수 있는 &apos;슈퍼앱&apos;
              </BlueSpan>{" "}
              으로 탈바꿈하며 경쟁 격화
              <br />
              <br />
              2025년 9월 1일자로 2금융권(저축은행 및 상호금융권) 예금보호한도
              1억 원 상향 예정으로 부동산 PF리스크 등에서 시작된 저축은행의
              불안정성에 대한 소비자 부정 인식 상쇄 기대
            </DashList>{" "}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 간편/편의성을 강점으로, 인터넷 뱅킹 3사의 성장 → 사이다뱅크의
              주요 수익군까지 공급 확대로 공격적 접근
              <br />- 1 금융권은 계열사의 통합 서비스를 제공하는 슈퍼앱으로 경쟁
              격화
              <br />- 예금 보호 한도 상향으로, 소비자 불안 감소 기대
              <br />
              <br /> → 편의성을 극대화한 라이프스타일 중심의 인터넷 뱅킹과
              계열사 연계 혜택을 제공하는 1금융권의 사업 영역 확장으로인해
              확고한 포지셔닝이 필요한 상황이에요 <br />→ 예금 보호 한도 상향은
              분명 기회이지만, 사이다뱅크의 핵심 홍보요소로 활용하긴 어려워요.
              참고 정도로만 활용!
            </div>
          </div>
        </div>
      </div>

      {/* 브랜드 상황 및 커뮤니케이션 타깃 */}
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[70px]'}`}>
        <div className={`${isMobile ? 'px-[20px] py-[30px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div className={`${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-gray-900 mb-[32px]`}>
            브랜드 상황 및 커뮤니케이션 타깃
          </div>

          <div className={`space-y-[20px] ${isMobile ? 'font-B02-M' : 'font-B01-M'}`}>
            <DashList>
              1등이라는 위상이 아닌 <BlueSpan>‘실질적 역량’ 강조</BlueSpan>로
              브랜드 가치 확립을 위한 <BlueSpan>[실전금융]</BlueSpan> 캠페인
              집행 중<br />
              상대적으로 사이다뱅크 포함 저축은행 앱의 상기도 저조
              <br />→ 모바일 뱅킹 앱 상기도 Top3인 카카오뱅크, 토스,
              신한SOL뱅크의 평균값 63.5% vs. 사이다뱅크 25.2%, OK저축은행 26.3%
              <br />
              <span className={`text-gray-500 ${isMobile ? 'font-B02-R' : 'font-B02-R'}`}>
                (*출처: 2024년 하반기 SBI저축은행 브랜드 Tracking 조사)
              </span>
              <br />
              <br />
              반면, 현 사이다뱅크 사용자들은 UI/UX 및 디자인, 안정성, 이벤트,
              보안 등 고른 만족도를 보이며,{" "}
              <BlueSpan>지속 사용 의향은 81%로 높은 편</BlueSpan>
              <br />
              <span className={`text-gray-500 ${isMobile ? 'font-B02-R' : 'font-B02-R'}`}>
                (*출처: 2024년 하반기 SBI저축은행 브랜드 Tracking 조사)
              </span>
              <br />
              <br /> 높은 자산을 축적하며{" "}
              <BlueSpan>
                적극적인 투자와 저축이 활발해진 MZ세대(2044세)
              </BlueSpan>
              가 금융시장의 메인스트림으로 급부상 중, 이들은 공격적 투자/거래량
              증가되는 만큼{" "}
              <BlueSpan>
                주거래은행에 대한 로열티가 낮고 스위칭이 높은 편
              </BlueSpan>
              으로 1금융권이 아닌 저축은행의 입장에서 오히려 공략하기 좋은 대상
            </DashList>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>

            <div className={`${isMobile ? 'font-B02-M' : 'font-B01-R'} text-gray-900`}>
              - 1등이라는 위상이 아닌 ‘실질적 역량’ 강조 → 실전금융 캠페인 진행
              중<br />- 저축은행 앱의 상기도 저조
              <br />- 사용자들은 전반적인 앱 기능에 만족도를 보이며 높은 지속
              사용 의향
              <br />- 투자와 저축에 적극적인 MZ세대, 주거래은행에 대한 낮은
              로열티와 높은 스위칭 특징 <br />
              <br />→ 사이다뱅크가 전달하고자 하는 메시지는 ‘실질적인
              도움’이라는 것을 알 수 있어요 <br />→ 저축은행 앱의 낮은 상기도가
              핵심 페인포인트로, 저축은행 앱과 사이다뱅크 자체의 인지도 상승이
              가장 해결해야할 중요 과제에요
              <br /> → 사용자들이 만족하며 높은 재사용 율을 보인다는 것 역시,
              한번 알리고 쓰게만 만들면 자신있다!라는 뜻이기도 해요 <br />→
              공격적 투자와 저축을 하는 MZ세대의 ‘합리적 특징’을 활용해, 신규
              유저를 유입할 가능성을 기대하고 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 해결 과제 */}
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[70px]'}`}>
        <div className={`${isMobile ? 'px-[20px] py-[30px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div className={`${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-gray-900 mb-[32px]`}>해결 과제</div>

          <div className={`space-y-[8px] ${isMobile ? 'font-B02-M' : 'font-B01-M'}`}>
            <DashList>
              모바일 뱅킹에 익숙한{" "}
              <BlueSpan>MZ세대 대상 사이다뱅크 인지도 제고</BlueSpan>, 나아가{" "}
              <BlueSpan>앱 설치 유도</BlueSpan>할 수 있는 캠페인
            </DashList>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 모바일 뱅킹에 익숙한 MZ 세대 대상 인지도 제고 및 설치유도까지
              이어지는 캠페인
              <br />
              <br />→ 설치유도가 중요해요! 앱 설치로 연결되는 요소를 넣거나,
              자연스럽게 설치를 유도할 수 있는 장치를 꼭 챙겨주세요
            </div>
          </div>
        </div>
      </div>

      {/* 유의 및 참고사항 */}
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[70px]'}`}>
        <div className={`${isMobile ? 'px-[20px] py-[30px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div className={`${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-gray-900 mb-[32px]`}>
            유의 및 참고사항
          </div>

          <div className={`space-y-[8px] ${isMobile ? 'font-B02-M' : 'font-B01-M'}`}>
            <DashList>
              예/적금 혹은 대출상품으로 국한하지 않고{" "}
              <BlueSpan>사이다뱅크 앱 자체에 대한 인지도 제고</BlueSpan>를 위한
              접근 
            </DashList>{" "}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 예/적금 및 대출상품으로 국한하지 않고, 앱 자체에 대한 인지도
              제고를 위한 접근
              <br />
              <br />
              → 특정 기능이나 혜택을 알리는 것이 아닌, 브랜드 자체의 이미지를
              요소로 활용하는 ‘브랜딩’ 아이디어가 필요하다는 의미에요
              <br />→ 서비스가 떠오를 만한 상황이나 서비스의 이미지를 효과적으로
              알릴 시각적/청각적 요소 등 단순하게 생각하는 것도 방법!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SBIBank;
