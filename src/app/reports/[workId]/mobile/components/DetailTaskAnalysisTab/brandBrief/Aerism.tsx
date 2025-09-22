import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function Aerism() {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>

      <div>
        {/* 브랜드 소개 섹션 */}
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>

          <div className="space-y-[20px]">
            <div className="flex gap-[16px]">
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  <BlueSpan>
                    땀을 빠르게 흡수하고 건조하는 쾌적 테크놀로지 [에어리즘]
                  </BlueSpan>
                  <br />: 머리카락의 약 1/10 굵기의 극세섬유가 빠르게 땀을
                  흡수하며 코튼 대비 약 1.9배 빠르게 건조
                  <br />
                  <br />
                  초경량·초극세사 소재, 섬유 기술, 다양한 연령과 라이프스타일을
                  아우르는 제품 라인업으로 전 세계적으로  
                  <BlueSpan>
                    쾌적함(Dry & Comfort) 이라는 새로운 기준을 제시
                  </BlueSpan>
                  <br />
                  <br />
                  유니클로의 대표 제품군 중 하나로서, 2012년 출시 이후 기능성
                  소재의 대명사로 한국시장 내 높은 인지도를 확보하고 있음
                  <br />- 제품 라인업 참고 - 
                  <a
                    href="https://www.uniqlo.com/kr/ko/women/airism"
                    target="_blank"
                    className="underline"
                  >
                    여성
                  </a>
                   /
                  <a
                    href="https://www.uniqlo.com/kr/ko/men/airism"
                    target="_blank"
                    className="underline"
                  >
                    남성
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          {/* 브랜드 소개 팁 */}
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="font-B01-R text-gray-900">
              - 땀을 빠르게 흡수하고 건조하는 에어리즘, 쾌적함의 기준을 제시한
              유니클로의 대표 제품
              <br />
              <br />→ 홍보해야하는 제품의 USP를 설명하고 있어요. 에어리즘은
              Dry&Comfort로 땀의 흡수/건조와 쾌적함이 USP에요
            </div>
          </div>
        </div>

        {/* 시장 상황 */}
        <div className="mt-[70px]">
          <div className="p-[30px] border border-gray-200 rounded-[20px]">
            <div className="font-T03-SB text-gray-900 mb-[32px]">시장 상황</div>

            <div className="space-y-[8px] font-B01-M">
              <DashList>
                에어리즘은 <BlueSpan>기능성 이너웨어 시장</BlueSpan>에서 기술력,
                제품 다양성, 글로벌 인지도 측면에서 <BlueSpan>독보적 </BlueSpan>
                국내 다양한 브랜드에서 이너웨어 중심의 냉감 제품을 잇따라
                출시하며 경쟁 과열
              </DashList>

              <DashList>
                <BlueSpan>지구 온난화</BlueSpan>로 인해 쾌적 기능을 갖춘 의류에
                대한
                <BlueSpan>소비자 수요 꾸준히 증가 </BlueSpan>
                예상
              </DashList>
            </div>
          </div>

          <div className="flex flex-col gap-[70px]">
            <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
              <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
                <Tip /> 수상한 Tip
              </div>
              <div className="space-y-[8px] font-B01-R">
                - 기능성 이너웨어 시장에서의 독보적 인지도와 입지
                <br />- 냉감 이너웨어에 대한 시장 경쟁 과열
                <br />- 지구 온난화로 인해 소비자 수요 증가
                <br />
                <br />
                → 기능성 이어웨어 시장을 강조하고 있어요. 땀이라는 요소로,
                ‘스포츠 의류’와의 혼동을 주의!
                <br />→ 시장 수요 증가와 경쟁 과열이라는 기회와 위협 요인
                속에서, 차별성을 구축할 필요가 있어보여요
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

            <div className="space-y-[20px] font-B01-M">
              <DashList>
                여름에 입는 시원한 소재’라는 인지가 강하지만, 에어리즘은 땀을
                빨리 흡수하고 건조하는 드라이 기능과 매끄러운 감촉을 갖춰
                <BlueSpan> 모든 계절에 입기 좋은 소재 </BlueSpan>→ 이 차별점을
                기반으로
                <BlueSpan> 중장기적 연간 상품으로 육성 필요</BlueSpan>
                <br />
                <br />
                주요 제품은 에어리즘 이너웨어
                <br />
                <br />
                2025년도에는{" "}
                <BlueSpan>오늘의 땀에 에어리즘으로 답하다</BlueSpan> 는 메시지로
                캠페인 집행중
                <br />
                <br />
                [Made for all] 이라는 브랜드 방향성에 맞게 모든 연령대를 위한
                제품이 구비되어있으나, 
                <br />
                <BlueSpan>커뮤니케이션은 2030에 집중</BlueSpan>
              </DashList>
            </div>
          </div>

          <div className="flex flex-col gap-[70px]">
            <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
              <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
                <Tip /> 수상한 Tip
              </div>
              <div className="flex gap-[3.5px] font-B01-R">
                - 여름에 입는 시원한 소재라는 인식, 하지만 모든 계절 입기 좋은
                소재로 중장기적 연간상품으로 육성 필요
                <br />- 커뮤니케이션은 2030에 집중
                <br />
                <br />
                → 땀을 말린다는 특징으로 인해, 여름에 치중될 수 있는 상황 속
                사계절 의류로 확장하고자 함을 알 수 있어요
                <br />→ 여름에만 나는 ‘온도에 따른 땀’에서 벗어나, 일상 속
                다양한 땀을 다각도로 해석해볼 필요가 있어요
              </div>
            </div>
          </div>
        </div>

        {/* 해결 과제 */}
        <div className="mt-[70px]">
          <div className="p-[30px] border border-gray-200 rounded-[20px]">
            <div className="font-T03-SB text-gray-900 mb-[32px]">해결 과제</div>

            <div className="space-y-[8px] font-B01-M">
              <div>
                <BlueSpan>
                  20대 고객을 에어리즘에 신규 유입시킬 수 있는 아이디어
                </BlueSpan>
              </div>
              <DashList>
                단순히 시원하기만 한 것이 아닌,{" "}
                <BlueSpan>1년 365일 내내 입기 좋은</BlueSpan> Daily Sweat
                Discomfort Solution 으로서의 인지 및 포지셔닝 강화
              </DashList>
              <DashList>
                땀을 빠르게 흡수하고 말려주는 드라이 기능과 매끄러운 감촉으로{" "}
                <BlueSpan>
                  사람들의 일상을 쾌적하게 만들어주는 소재로 어필
                </BlueSpan>
              </DashList>
            </div>
          </div>

          <div className="flex flex-col gap-[70px]">
            <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
              <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
                <Tip /> 수상한 Tip
              </div>
              <div className=" font-B01-R">
                - 20대 고객을 에어리즘에 신규 유입, 1년 내내 입기 좋은 데일리
                솔루션 입지 강화, 소재 특성을 활용한 어필
                <br />
                <br />→ 다시 한번 체크! 1. 20대 타깃에게 2. 1년 365일 데일리
                아이템으로써 3. 에어리즘만이 할 수 있는 아이디어
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
              <DashList>
                <BlueSpan>
                  {" "}
                  이너웨어/여름의 사용성에 대해서는 이미 잘 알려져있으니 해당
                  이미지 확대는 지양할 것
                </BlueSpan>{" "}
              </DashList>
            </div>
          </div>

          <div className="flex flex-col gap-[70px]">
            <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
              <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
                <Tip /> 수상한 Tip
              </div>
              <div className=" font-B01-R">
                - 이너웨어와 여름의 사용성에 대한 이미지 확대는 지양
                <br />
                <br />
                → 여름의 덥고 습한 기후를 상기시키는 상황에서 아이디어 떠올리는
                것을 피해야 해요
                <br />→ 땀이 가지는 상징적 의미를 기준으로 솔루션을 떠올리는
                것도 방법!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aerism;
