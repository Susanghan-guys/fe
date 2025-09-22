import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function LotteRia() {
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
                1979년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[10px]">
                  한국의 첫 QSR(Quick Service Restaurant) 브랜드로 출범하여,
                  불고기버거, 라이스버거 등 
                  <BlueSpan>
                    한국식 버거를 탄생시키며 한국을 대표하는 버거 프랜차이즈로
                    성장
                  </BlueSpan>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M ">
                전국에 1,300개가 넘는 매장을 보유하고 있으며 베트남, 미얀마,
                라오스, 몽골 등 해외에도 진출하여 성공적으로 자리를 잡고, 올
                하반기에는 미국 LA에 1호점을 출점할 예정
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
              - 한국의 첫 QSR 브랜드로, 한국식 버거를 탄생시키며 한국 대표 버거
              프렌차이즈로 성장
              <br />
              <br />→ ‘한국식 버거’라는 점에서 롯데리아만의 차별성을 파악할 수
              있어요
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">시장 상황</div>

          <div className="space-y-[20px] font-B01-M">
            <DashList>
              최근 몇 년간 국내 버거 시장은 지속적으로 성장해왔으며 2025년 약
              4~5조 원 규모로 추정
              <br />
              버거킹, 맥도날드 등 전통적인 글로벌 브랜드와 시장 내 가장 많은
              점유율을 경쟁하고 있으며, 파이브가이즈, 고든램지버거 등 프리미엄
              수제버거 브랜드의 국내 진출로 경쟁이 심화된 상황
            </DashList>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 시즌을 활용한 주력 마케팅과 비시즌으로 확장하는 서브 마케팅 추구
              <br />
              <br />→ 강점인 데이마케팅을 강화하여 이슈의 재점화, 또는 일상적
              접점을 늘리는 비시즌 전략을 희망한다고 볼 수 있어요
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
              치열한 경쟁 속에서{" "}
              <BlueSpan>
                롯데리아는 일반적인 버거의 틀에서 벗어나 한국적인 재료
              </BlueSpan>
              를 가지고 다양한 제품을 선보이면서 차별적인 경쟁력을 강화해 나가고
              있음
              <br />
              이러한 <BlueSpan>도전적 시도</BlueSpan>를 젊은 층에게 공감 받아
              <BlueSpan> 브랜드 선호도는 증가</BlueSpan>하는 추세이며,{" "}
              <BlueSpan>
                온라인 상 버거 프렌차이즈 브랜드 중 가장 높은 긍정률
              </BlueSpan>
              을 보이는 것으로 조사됨
              <br />
              <br />월 1회 이상 버거를 취식하며{" "}
              <BlueSpan>유행과 트렌드에 민감한 2034남녀</BlueSpan>
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>

            <div className="font-B01-R text-gray-900">
              - 일반적인 버거의 틀에서 벗어나, 한국적인 재료를 통한 다양한 제품
              <br />- 도전적 시도가 젊은 층에게 공감을 유도, 브랜드 선호도 증가
              / 온라인 상 브랜드 선호도가 가장 높음
              <br />
              <br />
              → 다시 한번 나온 ‘한국적인 버거’! 중요하게 볼 필요가 있겠죠?
              <br />→ 버거의 틀을 깨는 다양하고 뻔뻔한 시도가 젊은 층에게
              효과적이라는 선례를 이야기 해주고 있어요
              <br />→ 온라인 상 선호도가 높다고 말한 것은, 실질적인 판매는 그에
              미치지 못한다는 의미로도 해석 가능해요
            </div>
          </div>
        </div>
      </div>

      {/* 해결 과제 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">해결 과제</div>

          <div className="space-y-[8px] font-B01-M">
            <DashList>
              롯데리아의 대표 메뉴인 리아불고기(불고기버거)는 브랜드가 최초로
              선보이고 오랜 기간 사랑받은 제품이지만, 현재는 많은 경쟁사에서도
              유사 제품을 판매하면서 제품의 가치가 희석된 상황
              <br />
              <br />
              <BlueSpan>리아불고기의 오리지널리티를 강조</BlueSpan>하면서{" "}
              <BlueSpan>2034 타겟의 관심과 호감도</BlueSpan>를 올릴 수 있는
              캠페인 또는 아이디어
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 리아 불고기 버거는 롯데리아가 최초로 선보이고 사랑받은
              제품이지만, 경쟁사들의 유사제품으로 가치가 희석
              <br />- 오리지널리티를 강조하면서, 2034 타깃의 관심과 호감도를
              올리는 캠페인/아이디어
              <br />
              <br />
              → 리아 불고기의 오리지널리티가 의미하는 것이 무엇인지 체크해볼
              필요가 있어요
              <br />→ ‘롯데리아 만이 할 수 있는 리아 불고기 버거’의 특징을
              찾아내는 것이 이번 과제의 핵심!
              <br />→ 2034 타깃을 겨냥한 ‘도전적 시도’ 역시 빼먹으면 안되겠죠?
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
              리아불고기는 고열량저영양 식품으로 「어린이 식생활안전관리
              특별법」에 따른 가이드라인 준수필
              <br />
              예) 식품이 아닌 장난감이나 그 밖에 어린이의 구매를 부추길 수 있는
              물건을 무료로 제공한다는 내용이 담긴 광고 금지 등
            </DashList>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 어린이의 구매를 부추길 수 있는 물건을 제공한다는 내용이 담긴
              광고 금지
              <br />
              <br />→ 굿즈, 콜라보레이션 등의 아이디어 제안 시 주의 필요!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteRia;
