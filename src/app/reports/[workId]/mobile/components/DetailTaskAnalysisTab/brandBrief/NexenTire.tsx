import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function NexenTire() {
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
                1942년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[10px]">
                  흥아고무공업㈜으로 시작해, 올해로 창립 83주년을 맞이한 국내
                  대표 타이어 브랜드
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                2000년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[10px]">
                  넥센타이어로 사명 변경, 글로벌 Top 10 타이어 브랜드 도약을
                  목표로 지속 성장 중 
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
              → 브랜드 소개에요, 크게 눈여겨 볼 만한 내용은 없어 보여요
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
              국내 타이어 시장은{" "}
              <BlueSpan>Big 3사(넥센/한국/금호)가 90% 이상의 점유율 </BlueSpan>
              차지
              <br />
              고인치 및 고사양 타이어의 수요 증가로 국내 타이어 3사 모두 매출
              성장세
              <br />
              <BlueSpan>
                {" "}
                넥센타이어는 [젊은, 스타일리시한, 트렌디한, 혁신적인] 브랜드
                이미지
              </BlueSpan>{" "}
              보유
              <br />
              2024년 브랜드 가치 성장률 18%, 세계에서 2번째로 빠르게 성장하는
              타이어 브랜드로 선정 
            </DashList>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 국내 타이어 브랜드 3사의 치열한 경쟁구도
              <br />- 넥센타이어의 브랜드 이미지 [젋은, 스타일리시한, 트렌디한,
              혁신적인]
              <br /> <br />→ 치열한 경쟁구도를 가진 타이어 산업은 ‘경쟁사와의
              차별화된 가치’가 매우 중요해요 <br />→ 넥센타이어는 그 중 젋은
              세대를 겨냥하기 좋은 환경에 있어요
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
              2025년 <BlueSpan>[타이어, 본질에 대하여]</BlueSpan>라는 New.
              캠페인을 통해 <BlueSpan>브랜드의 차별화된 가치 제시</BlueSpan>
              <br />
              경쟁사들이 차량의 성능에만 집중하는 반면, 어떤 차와 도로
              환경에서도 조용하고 편안한 주행을 제공함으로써{" "}
              <BlueSpan>
                운전자의 만족에 집중하는 넥센타이어의 진정성과 가치 전달
              </BlueSpan>
              <br />
              캠페인 메인타겟은 4050대(주구매층)이나, 성장을 위해
              <BlueSpan> 엔트리타겟 20대와 소통 강화 필요</BlueSpan>
              <br />
              타이어 브랜드들은 전통적으로 스포츠/게임/패션 등과 협업하여 20대의
              인지도 및 친숙도를 강화
              <br />
              넥센타이어 또한{" "}
              <BlueSpan>다양한 문화 콘텐츠를 통해 20대와 접점</BlueSpan>을
              넓혀왔으며, 이제는 단순히 경험을 넘어 브랜드 충성도까지 강화할 수
              있는 <BlueSpan>차별화된 컬쳐마케팅 방안</BlueSpan>을 찾고자 함
              <br />
              <br />
              [참고: 넥센타이어의 컬쳐마케팅 주요 활동]
              <br />① 스포츠: 맨시티 후원 / 윈가드 스노보드팀 운영
              <br />② 브랜드 오리지널 컨텐츠: ‘웹드라마 타이코메트리’, ‘웹 예능
              컨텐츠 티어메이커’
              <br />③ 패션 협업: 르꼬끄 협업 고성능 테니스화 출시, 아이더 협업
              트레킹화 출시
              <br />④ 기타: 댄스팀 Hook과 진행한 넥스트레벨 콘서트 등
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>

            <div className="font-B01-R text-gray-900">
              - 2025 [타이어, 본질에 대하여]로 차별화된 브랜드 가치 제시 <br />-
              넥센타이어는 차량의 성능을 넘어, 운전자의 만족까지 확장하는
              차별화된 진정성과 가치 <br />- 성장을 위한 엔트리 타깃 20대와의
              소통강화 필요 <br />- 타이어 브랜드의 20대 접점 확대를 위한
              문화/콘텐츠 협업 → 넥센타이어는 단순 경험을 넘어 충성도로 이어지는
              차별화된 컬처마케팅 목표 <br />
              <br /> → 2025 [타이어, 본질에 대하여] 캠페인은 반드시 봐야겠죠?
              <br /> → 넥센타이어가 말하는 진정성은, 타이어가 제시할 수 있는
              기능적 가치를 넘어, 운전자의 만족감까지 고려한 커뮤니케이션을
              의미해요
              <br /> → 타이어를 쓸 일이 적은 20대 타깃에게, 타이어 브랜드가
              다가갈 수 있는 접점을 고민해 봐야해요
              <br /> → 충성도로 이어지는 성공적인 컬처 마케팅을 위해서는,
              브랜드가 하고 싶은 메시지를 먼저 생각하고 이를 잘 보여줄 수 있는
              컬처를 연결짓는 순서를 추천해요
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
              <BlueSpan>20대의 문화 트렌드를 반영</BlueSpan>해, 넥센타이어만의
              <BlueSpan> 진정성 있는 브랜드 가치와 기술력</BlueSpan>을
              효과적으로 전달하고, 인지도 제고는 물론 <BlueSpan>팬덤</BlueSpan>{" "}
              까지 이끌어낼 수 있는 <BlueSpan>컬처 마케팅</BlueSpan> 및
              커뮤니케이션 방안
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 20대의 문화 트렌드를 반영해, 넥센타이어만의 진정성있는 브랜드
              가치와 기술력 전달, 인지도와 팬덤을 이끄는 컬처마케팅/커뮤니케이션
              <br />
              <br />
              → 20대의 문화 트렌드임을 기획안에 잘 보여줘야 해요
              <br />
              → 넥센타이어만의 진정성있는 브랜드 가치가 핵심! 아이디어에서
              브랜드가 느껴지도록 메시지에 집중해주세요
              <br />→ 인지도를 넘어 팬덤으로 이어질 수 있는 기대효과를 명확히
              보여주세요
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
              넥센타이어 CI 활용 시  We got you  슬로건 병행 표기 필수 
            </DashList>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              → 로고 활용 조건입니다! 큰 의미는 없어요
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NexenTire;
