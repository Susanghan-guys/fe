import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";
import { useIsMobile } from "@/hooks/useIsMobile";

function LotteGiants() {
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
                1975년
              </div>
              <div className="flex-1">
                <div className={`${isMobile ? 'font-B02-M' : 'font-B01-M'} text-gray-800 mb-[10px]`}>
                  실업야구 창단 이래로 1982년 프로야구단으로 전환하면서 지금까지
                  <BlueSpan> 팀명, 연고지, 모그룹이 바뀌지 않는 전통</BlueSpan>
                  이 있는 명문 구단
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className={`${isMobile ? 'font-B02-M' : 'font-B01-M'} `}>
                대한민국 최고의 인기 스포츠구단으로
                <BlueSpan> 연고지 부산은 야구의 도시 ‘구도(球都)’</BlueSpan>라
                불리고 있음
                <br />
                <br /> 전국구 팬덤 보유, 독보적인 응원문화를 가진 구단
                <br />
                <br /> 팬 페스티벌, 팬스티벌(콘서트), 자이언츠
                트레인(여행프로그램), 타구단과의 더비 시리즈 등{" "}
                <BlueSpan>팬 친화 이벤트 프로모션</BlueSpan>을 다양하게 전개하고
                있음(팬 엔터테인먼트 요소)
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
              - 팀명, 연고지, 모그룹이 바뀌지 않는 전통 명문 구단 <br />-
              대한민국 최고 인기 구단, 야구의 도시 부산 연고지의 전국구 팬덤과
              독보적인 응원문화
              <br />- 다양한 팬 친화 프로모션
              <br />
              <br />
              → 브리프 내용에서 전통성을 강조하는 모습을 쉽게 찾아볼 수 있어요
              <br />
              → 팬덤이 매우 중요하게 작용하는 브랜드임을 확인할 수 있어요
              <br />→ 롯데 자이언츠를 넘어, 부산이라는 도시와 사람들에 대한
              이해가 더 첨예한 기획으로 이어지겠죠?
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
              24시즌 프로야구 역대 최초 1천만 관중 달성, 올해 더욱 빠른 속도로
              흥행가도를 달리고 있음
              <br />
              (25시즌 1,200만 관중 돌파 예상)
              <br />
              <BlueSpan>프로야구의 주 소비층은 ‘2030 여성’</BlueSpan>으로{" "}
              <BlueSpan>구매력 높은 여성팬</BlueSpan>이 폭발적으로
              증가하며, 신규 팬 지속 유입을 위한 각 구단 팬 마케팅 다양화 중
              <BlueSpan>(이벤트, F&B, MD 사업 등)</BlueSpan>
            </DashList>{" "}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 국내 프로야구 역대 최고 흥행
              <br />- 구매력 높은 2030 여성을 주 소비층으로 시작하여, 신규 팬
              유입을 위한 마케팅 다양화 중<br />
              <br />
              → 과거 경기 중심의 스포츠 문화에서, 여성 타깃이 유입되면서 종합
              문화로의 변화가 이루어짐을 확인할 수 있어요
              <br />→ 소비층이 다양해지면서 F&B, 굿즈, 이벤트 등 다양한
              프로모션이 제안 가능해졌어요
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
              롯데자이언츠는 명실상부 No.1 인기 프로야구단임
              <br />
              향후 10년, 20년 뒤에도 인기를 지속할 수 있도록{" "}
              <BlueSpan>현재 팬덤을 만족시키고, 신규 팬 유입</BlueSpan>을 위한
              다양한 마케팅 활동 필요 <br />
              <br />
              미래 팬 확보를 위한{" "}
              <BlueSpan>주요 커뮤니케이션 타깃으로 1020세대 </BlueSpan>
              판단
            </DashList>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>

            <div className={`${isMobile ? 'font-B02-M' : 'font-B01-R'} text-gray-900`}>
              - 현재 팬을 만족시키고, 신규 팬 유입을 위한 마케팅 필요
              <br />- 미래 팬 확보를 위해 1020세대를 주 타깃으로 설정
              <br />
              <br />
              → 롯데 자이언츠에 대한 높은 이해도와 팬덤에 대한 이해도가 필수에요
              <br />
              → 그러면서도 대중에게 어필할 수 있는 ‘부러워지는 문화’가
              필요하다는 의미!
              <br />→ 1020 세대가 주타깃이라고 이야기하지만, 롯데자이언츠의
              정체성인 기존 올드 야구 팬도 놓쳐선 안돼요
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
              <BlueSpan>롯데자이언츠만 할 수 있는</BlueSpan> 유니크한 이벤트
              프로모션 제안(팬덤, 연고지 등 고려)
              <br />
              경기 외적 즐길 거리를 찾는 팬들을 만족시킬 수 있는 프로그램 제안 (
              <BlueSpan>
                비 야구팬도 야구장에 유입시킬 수 있는 방안 제시
              </BlueSpan>
              )
            </DashList>
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 롯데 자이언츠만이 할 수 있는 유니크한 이벤트 프로모션 / 비
              야구팬도 유입시킬 수 있는 외적 즐길거리
              <br />
              <br />
              → 과제를 따로 구분해서 설명하지 않고 있어요. 이는 둘 다 만족시키는
              것이 이상적일 수 있어요
              <br />
              → 롯데 팬이라면 높은 이해도로, 팬이 아니라면 외부의 시선으로
              매력을 발굴해보세요
              <br />→ 야구 팀의 매력은 활용하되, 야구 경기의 이해가 필요없는
              아이디어가 필요하다는 말이겠죠?
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
              MLB(미국 프로야구), NBA(미국 프로농구), NPB(일본 프로야구) 등 해외
              스포츠 리그 벤치마킹 가능하나, 롯데자이언츠만의 특색이 있어야
              함(KBO 리그에서 진행한 이벤트 프로모션은 제외)프로모션 진행 시점은
              특정되지 않음 (시즌 시작 전, 시즌 중, 비시즌 무관)
              <br />
              <br />
              [참고]
              <br />
              롯데자이언츠 유튜브 채널: 
              <a
                href="https://www.youtube.com/@giantstv"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://www.youtube.com/@giantstv
              </a>
              <br />
              롯데자이언츠 인스타그램:{" "}
              <a
                href="https://www.instagram.com/busanlottegiants"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @busanlottegiants
              </a>
            </DashList>{" "}
          </div>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-[40px]' : 'gap-[70px]'}`}>
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              - 해외 구단 벤치마킹 가능하나, 롯데자이언츠 만의 특색이 있어야함
              <br />- 프로모션 진행 시점은 미정
              <br />
              <br />
              → 결국 핵심은 ‘누구도 쉽게 따라할 수 없는’ 아이디어!
              <br />→ 경기 시즌의 응원, 먹거리 등에 국한될 필요 없이 더 폭넓게
              아이디어를 제안해 보세요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteGiants;
