import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function Tams() {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>
      {/* 브랜드 소개 */}
      <div>
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>

          <div className="space-y-[20px]">
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                22년 4월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  국내{" "}
                  <BlueSpan>최초로 출시된 제로 칼로리 과일 탄산 음료</BlueSpan>
                  로 제로 탄산의 유행을 이끔
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>요즘 제일 탐나는 제로 컨셉으로 커뮤니케이션 진행</div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                25년 4월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  <BlueSpan> 제로가 아닌 제품으로도 확장</BlueSpan>하고자 리뉴얼
                  진행
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    국내 소비자가 선호하는 오렌지, 포도, 사과, 파인애플 맛으로
                    재정비
                  </div>
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    리뉴얼을 통해 기존 과일 향에 과즙을 더해 잘 익을 과일 맛과
                    풍부한 과일 향을 전달
                  </div>
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    새롭게 등장한 탐스 쥬시 오렌지/포도와 업그레이드된 탐스 제로
                    사과/파인애플로 구성
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                22년 4월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  [잘 익은 탄산의 맛] 이라는 메세지로
                  <BlueSpan> 과즙감에 집중하는 커뮤니케이션</BlueSpan>
                  진행
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    {" "}
                    <BlueSpan>의외성을 선호하는 Gen-Z 타깃</BlueSpan>에 맞추어
                    온/오프라인 캠페인 전개
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="font-B01-R text-gray-900">
              - 국내 최초 제로 과일 탄산음료로 시장 선도
              <br />- 제로가 아닌 제품으로도 확장하고자 리뉴얼
              <br />- 과즙감에 집중하는 커뮤니케이션 진행
              <br />
              <br />
              → 국내 최초이자 시장 선도를 이끈 탐스제로는 제로 음료로서의
              아이덴티티는 분명한 상황이에요
              <br />
              → 하지만 동시에 제로 음료에만 치중된 인지도가 제품의 확장을
              가로막고 있다는 말이기도 해요
              <br />
              → 이를 해결하고자, 제로 과일 탄산음료 중 ‘과일’에 집중하여
              과즙감을 강조하는 모습을 확인할 수 있어요
              <br />
              <BlueSpan>
                * 의외성을 선호하는 Gen-Z 타깃에서, 의외성 있는 아이디어를
                원한다는 점을 확인할 수 있어요
              </BlueSpan>
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">시장 상황</div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                <BlueSpan>제로 칼로리의 보편화</BlueSpan>와{" "}
                <BlueSpan>새로운 플레이버</BlueSpan>의 지속적인 유입으로 경쟁
                극대화
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                <BlueSpan>익숙한 기존 브랜드 중심의 음용</BlueSpan>이 주를
                이루는 상황
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              - 제로음료 시장의 성장과 차별화된 경쟁 제품의 등장, 익숙한 브랜드
              중심의 음용
              <br />
              <br />→ 제로 음료 시장의 경쟁이 심화되는 가운데, 익숙한 브랜드
              중심의 음용은 제로 탄산으로 익숙한 탐스를 더욱 제로음료 카테고리에
              가두고 있다고 해석할 수 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 브랜드 상황 및 커뮤니케이션 타깃 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">
            브랜드 상황 및 커뮤니케이션 타깃
          </div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                주요 경쟁사 대비 후발주자로써 새롭게 리뉴얼 한 탐스의{" "}
                <BlueSpan>인지도 확보</BlueSpan>가 필요한 상황
              </div>
            </div>
            <DashList>
              <BlueSpan>대학생 및 Gen-Z 타깃</BlueSpan>을 대상으로 커뮤니케이션
              진행
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              - 주요 경쟁사 대비 후발주자로 리뉴얼한 탐스의 인지도 확보 필요,
              대학생 및 Gen-Z 타깃 중심
              <br />
              <br />
              → 후발주자라는 말은 ‘제로가 아닌 전체 음료 시장’의 기준을 의미해요
              <br />→ 대학생/Gen-Z 에게 ‘탐스 제로’가 아닌 ‘탐스’로서의 인지도를
              형성하는 것이 목표!
            </div>
          </div>
        </div>
      </div>

      {/* 해결 과제 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">해결 과제</div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                경쟁사와 차별화되는 리뉴얼 제품의{" "}
                <BlueSpan>맛을 중심으로 인지도 증대</BlueSpan> 캠페인 (가장
                풍부하고 진한 맛의 과즙 탄산 음료)
              </div>
            </div>{" "}
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                Gen-Z 타깃을 대상으로 주목도 높은{" "}
                <BlueSpan>디지털 캠페인 필수</BlueSpan>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 경쟁사와 차별화된 리뉴얼 제품의 맛을 중심으로 타깃 주목도 높은
              디지털 캠페인 필수
              <br />
              <br />
              → 핵심 차별성은 바로 ‘맛’! ‘맛’을 중심으로한 커뮤니케이션에
              집중해야해요
              <br />→ 타깃이 많이 사용하고 즐기는 디지털 매체와 아이디어는
              ‘필수’!
            </div>
          </div>
        </div>
      </div>

      {/* 유의 및 참고사항 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">
            유의 및 참고사항
          </div>

          <div className="space-y-[8px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>과즙이 다량 함유되었음으로 오인지 될 수 있는 문구 지양</div>
            </div>
            <DashList>
              주스라는 표현은 식품 유형의 명칭이기 때문에 사용 불가
            </DashList>
            <DashList>
              <BlueSpan>
                서브 라인업을 포괄하는 브랜드 ‘탐스’를 메인으로 진행
              </BlueSpan>
              <br />
              [서브 브랜드 : 탐스 제로, 탐스 쥬시]
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 과즙이 다량 함유되었음으로 오인지 될 수 있는 무구 지양, ‘주스’
              표현 사용 불가, ‘탐스’브랜드를 메인으로 진행
              <br />
              <br />
              → 맛과 과즙에 집중하다 보면 발생할 수 있는 제품 카테고리에의
              혼동을 조심하세요
              <br />
              → 주스 워딩은 사용 X!
              <br />→ 개별 제품의 특징이 아닌, 전체 제품을 포괄할 수 있는
              ‘브랜드 정체성’에 집중해야 해요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tams;
