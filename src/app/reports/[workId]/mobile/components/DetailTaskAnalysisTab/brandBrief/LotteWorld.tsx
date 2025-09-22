import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function LotteWorld() {
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
                1989년
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[10px]">
                  롯데월드 개원
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500">
                  <div>-</div>
                  <div>
                    올해 개원 36주년을 맞은 국내 최초·최대 실내 테마파크로,
                    <br />
                    다양한 즐길거리와 체험을 제공하는 대한민국 대표 테마파크
                    롯데월드 어드벤처
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M ">
                오랜 운영 노하우를 바탕으로 연령과 취향을 아우르는 어트랙션과
                시즌 축제, 풍성한 온·오프라인 콘텐츠를 통해 손님들에게 특별한
                경험과 즐거운 추억을 선사
                <br />
                <br />{" "}
                <BlueSpan>
                  국내외 인기 웹툰, 게임, 애니메이션, 캐릭터 IP 등을 활용해
                  콘텐츠 영역을 지속적으로 확장{" "}
                </BlueSpan>
                중 <br />
                <br />
                테마파크{" "}
                <BlueSpan>
                  내부에서는 세계관을 확장한 몰입형 경험 제공, 외부에서는
                  팝업스토어 등 다양한 방식으로 고객과 소통
                </BlueSpan>
                하며 자체 <BlueSpan>IP 경쟁력</BlueSpan>을 강화
                <br />- 글로벌 인기 IP  포켓몬 ,  명탐정 코난 ,  스누피  등과
                협업한 시즌 축제 진행
                <br />- 자체 캐릭터  모리스&보리스  활용 오프라인 팝업스토어
                운영
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
              - 대한민국 대표 테마파크, 다양한 어트렉션과 시즌 축제, 온/오프라인
              콘텐츠로 특별한 추억 선사
              <br />- 국내외 인기 IP등을 활용해 콘텐츠 영역을 확장, 세계관과
              몰입형 경험 및 팝업 등 IP 경쟁력 강화
              <br />
              <br />→ 테마파크가 가지는 ‘특별한 공간에 있는 경험’을 게임,
              애니메이션 등과 연결해 ‘몰입의 경험’을 극대화하는 전략으로
              서비스를 확장하는 것을 확인할 수 있어요
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
              <BlueSpan>
                유명 IP나 오리지널 콘텐츠 이용한 몰입형 체험공간 또는 전시가
                트렌드로 급부상
              </BlueSpan>
              , 테마파크가 제공하는 비일상적 경험이라는 점에서 경쟁적 구도로
              떠오르고 있음
            </DashList>{" "}
            <DashList>
              신규 놀이공원/뮤지엄/체험존/동물원 등 다양한 체험형 공간들이
              융복합적으로 나타나면서 테마파크와 카테고리 별 경계가 허물어져
              경쟁사의 대상이 넓어짐
            </DashList>{" "}
            <DashList>
              <BlueSpan>
                {" "}
                한 가지 공간에서 다양한 경험을 할 수 있는 ‘동시공간’ 형태
              </BlueSpan>
              를 갖춘 장소들이 증가하며 정해진 시간에 여러 체험을 하고자 하는
              소비 경향 확산
            </DashList>{" "}
            <DashList>
              어느 공간을 방문했는지가 자신의 정체성의 나타내는 요소로 작용,
              이에{" "}
              <BlueSpan>
                {" "}
                자발적으로 방문을 인증하여 온라인 상에서 바이럴하는
              </BlueSpan>{" "}
              트렌드 지속
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 유명 IP나 오리지널 콘텐츠를 이용한 몰입형 체험공간/전시가 트렌드{" "}
              → 테마파크의 비일상적 경험이 높은 시너지로 작용 <br />
              - 뮤지엄, 체험존 등 다양한 체험공간이 융복합적으로 나타나면서
              테마파크의 경쟁사 경계가 허물어짐 <br />
              - 한 공간에서 다양한 경험을 할 수 있는 ‘동시공간’ 형태의 장소들이
              증가, 소비 경향 확산 <br />
              - 공간에 대한 방문이 정체성을 나타내는 요소로 작용 → 자발적 인증과
              바이럴 트렌드 <br /> <br />
              → 테마파크를 어떻게 활용해야 하는지를 알려주고 있어요! 테마파크는
              ‘공간’으로, 세계관과 몰입의 경험을 효과적으로 보여줄 수 있는
              곳이에요 <br />
              → 다양한 매력적인 공간들이 생겨나면서, 경쟁사가 단순히 다른
              테마파크가 아니게 되었어요. 다양한 몰입과 체험의 공간을 떠올려
              보면 좋아요! <br />→ ‘동시공간’이라는 새로운 단어가 보여요! 어쩌면
              강조하는 키워드일 수 있으니 꼼꼼한 자료조사는 필수! <br />→
              아이디어의 핵심이에요! 바로 자발적인 인증과 확산! ‘나라면 찍고
              싶을까?’를 고민해 보면 좋아요
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
               25년 연말 유명 영화 IP인{" "}
              <BlueSpan> 고질라&콩 의 몬스터버스 세계관</BlueSpan>을 도입한 신규
              다크라이드 어트랙션 오픈 예정
              <br />
              <br />
              <BlueSpan>
                1020 영타깃에게는 스토리가 있는 몰입형 다크라이드 보다는 스릴
                어트랙션에 선호도가 높음
              </BlueSpan>
              <br />
              <br />매 시즌 새로운 축제 운영에도 불구, 연 1~2회로 비교적 낮은
              방문 주기
              <br />
              일부 인기 어트랙션 주목도 집중 및  매직캐슬  대표 포토존 고착화로
              <BlueSpan> 신선한 브랜드 이미지 부재</BlueSpan>
            </DashList>
            <DashList>
              커뮤니케이션 타깃 
              <br />- 온·오프라인 활동에 적극적인 2039
              <br />- 테마파크, 엔터테인먼트, 전시, 체험 등 경험 위주 소비
              관심사 타겟
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>

            <div className="font-B01-R text-gray-900">
              - 25년 신규 어트랙션오픈 예정 (고질라&콩)
              <br />- 1020 영타깃에겐 스토리/몰입형 다크라이드보다 스릴
              어트랙션에 대한 높은 선호도
              <br />- 일부 어트랙션에 주목도 집중 및 대표 포토존 고착화로 신선함
              감소
              <br />- 온오프라인 활동에 적극적인 2039 / 테마파크, 전시 등
              경험위주 소비 관심 타깃
              <br />
              <br />
              → 몰입형 다크라이드보다 스릴 어트랙션을 선호하는 1020 타깃에게
              괴수 기반 고질라&콩 다크라이드는 두 니즈를 모두 충족시킬 가능성이
              있어 보여요
              <br />
              → 일부 어트랙션에 집중 및 포토존 고착화 문제를 통해, ‘새로운
              상징적인 경험’에 대한 니즈를 확인할 수 있어요
              <br />→ 메인 타깃이 2039인 것을 보아, 결국 몰입형 다크라이드에
              집중하는 것을 선택했다고 분석할 수 있어요
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
              2005년  파라오의 분노  이후 20년 만에 도입하는 초대형 다크라이드에
              대한{" "}
              <BlueSpan>
                기대감을 참신하게 각인시킬 수 있는 온·오프라인 아이디어
              </BlueSpan>
            </DashList>
            <DashList>
              <BlueSpan>콩과 고질라</BlueSpan> 모두 글로벌 인기 IP이나, 국내
              인지도 및 인기가 비교적 낮아 
              <BlueSpan>
                1020 영타깃 중심으로 오픈 이슈화될 수 있는 바이럴 소구 포인트
                필요
              </BlueSpan>
            </DashList>
            <DashList>
              기대감 제고를 넘어 신규 어트랙션 오픈 이후{" "}
              <BlueSpan>실질적으로 오프라인 사업장에 방문하도록 유도</BlueSpan>
              하는 캠페인 전략 제안
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 초대형 다크라이드에 대한 기대감을 참신하게 각인시킬 수 있는
              온/오프라인 아이디어
              <br />- 국내 인지도 및 인기가 낮은 콩/고질라 IP를 고려, 1020
              영타깃 중심으로 오픈 이슈화될 수 있는 바이럴 소구 포인트 필요
              <br />- 기대감 제고를 넘어, 실질적 방문으로 이어지는 캠페인 제안{" "}
              <br />
              <br />→ 기대감을 통한 각인이라는 브리프는, 캠페인 진행 시점이 오픈
              이전인 홍보단계로 볼 수 있을 것 같아요!
              <br />→ 서브 타깃인 1020에게도 콩/고질라 IP가 매력적으로 느껴지게
              할 요소도 놓치지 말아주세요! <br />→ 높은 기대감은 자연스럽게 방문
              유도로 이어져요! 너무 실질적 방문에 매몰되지 말 것!
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
              오픈 예정 신규 어트랙션 콩X고질라: 더 라이드 소개
            </DashList>{" "}
            <DashList>
              올해 12월 오픈 예정인 전세계 최초로 몬스터버스 세계관을 접목한
              어트랙션, 레전더리 엔터테인먼트 및 도호
              <br />
              (Toho Co., Ltd)와의 협업으로 선보이는 멀티미디어 다크라이드
            </DashList>{" "}
            <DashList>
              몬스터버스(Monsterverse)란 괴수(Monster)와 세계(Universe)의
              합성어로, 전설과 신화 속 괴수들이 실존하는 혼돈의 세계 속 인간들의
              투쟁을 배경으로 하는 영화적 세계관
              <br />
              지구상 가장 강력한 두 괴수 콩 과 고질라 가 맞대결을 펼치는 고질라
              VS. 콩 , 세계를 초토화시키는 빌런들에 맞서 두 괴수가 팀을 이루는
              고질라X콩: 뉴 엠파이어 등 시리즈로 제작되며 전세계적 인기를 끌고
              있는 글로벌 영화 IP
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              → 참고사항이에요! IP 홍보니, IP와 세계관에 대한 충분한 이해도는
              필수겠죠?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotteWorld;
