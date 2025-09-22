import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import DashList from "./DashList";

function Krush() {
  return (
    <div>
      <div className="text-gray-900 font-T02-B mt-[108px] mb-[52px]">
        브리프 분석
      </div>
      {/* 브랜드 소개 */}
      <div>
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">브랜드 소개</div>
          <div className="font-B01-M text-gray-800">
            크러시(KRUSH)는 반하다, 부수다 라는 뜻의 영단어  Crush 에
            롯데칠성음료의 맥주 브랜드 클라우드(Kloud)의 헤리티지를 담은 알파벳
            K를 더한 단어로, 낡은 관습을 부수고, 새로움으로 매혹한다는 뜻을 담은
            브랜드
          </div>
          <div className="space-y-[20px] mt-[20px]">
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                23년 11월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  기존의 맥주 브랜드와 선을 긋는{" "}
                  <BlueSpan>나와 가장 가까운 4세대 맥주</BlueSpan> 라는 차별화된
                  컨셉으로 런칭
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    제품 패키지에서도{" "}
                    <BlueSpan>탄산을 제대로 느낄 수 있는</BlueSpan>
                     숄더리스(shoulder-less) 병 디자인에 투명한 크리스탈 커팅을
                    적용하여 <BlueSpan>시각적 청량감</BlueSpan>을 극대화, 캔
                    표면에는 빙산과 눈의 질감을 감각적으로 느낄 수 있는   아이스
                    타일(Ice Tile) 로 눈 속에서 막 꺼낸 캔처럼 차가운 눈 결정의
                    촉감을 강조
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="font-B01-M text-gray-500 min-w-[80px]">
                25년 5월
              </div>
              <div className="flex-1">
                <div className="font-B01-M text-gray-800 mb-[12px]">
                  새롭게 출시된 <BlueSpan>풀오픈캔</BlueSpan> 은 특히 일반적인
                  캔맥주와 다른 독특한 캡 구조가 적용됨
                  <br />캔 상단 탭 전체가 시원하게 열리는 형태라 마치{" "}
                  <BlueSpan>작은 맥주잔</BlueSpan>처럼 즐길 수 있고, 캔 입구가
                  넓어 얼음이나 소주, 레몬즙 등을
                  <BlueSpan> 섞어 마시기</BlueSpan>에 좋음, 음용 시 맛과 함께
                  <BlueSpan> 시각적인 즐거움</BlueSpan>도 느낄 수 있는 것이 특징
                </div>
                <div className="flex gap-1 font-B02-R text-gray-500 mt-[12px]">
                  <div>-</div>
                  <div>
                    자사 클라우드대비 22% 높아진 강탄산(탄산볼륨 3.3)으로,{" "}
                    <BlueSpan>국내 맥주 중 가장 높은 탄산압</BlueSpan>을
                    보유하고 있어, 강한 탄산과 시원하고 청량한 맛을 느낄 수 있음
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
              - 기존 맥주와 선을 달리하는 ‘4세대 맥주’
              <br />- 청략감과 탄산을 강조하는 패키지 디자인 & 국내 맥주 중 가장
              큰 탄산압
              <br />- 2025년 새롭게 출시된 ‘풀 오픈 캔’
              <br />
              <br /> → 4세대 맥주라는 워딩을 사용하며, 명확한 20대 젊은 세대를
              겨냥한 제품임을 알 수 있어요
              <br /> → 크러시의 가장 큰 제품 USP는 ‘탄산과 청량함’이라는 점을
              지속적으로 이야기해주고 있어요
              <br /> → 새롭게 리뉴얼 된 ‘풀 오픈 캔’ 패키지의 다양한 활용성을
              이야기하며 자랑하듯 이야기하고 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className="mt-[70px]">
        <div className="p-[30px] border border-gray-200 rounded-[20px]">
          <div className="font-T03-SB text-gray-900 mb-[32px]">시장 상황</div>

          <div className="space-y-[20px] font-B01-M">
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                국내 맥주시장은 경쟁사의 시장 점유율이 상위권을 차지하는
                양강체제를 이루고 있음
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                특히 한국의 주류문화의 특성상 주로 술자리를 함께 하는
                사람들&nbsp;
                <BlueSpan>
                  다수의 선호 의견에 따라서 주류 브랜드를 선택
                </BlueSpan>
                하거나,  <BlueSpan>주점에 입점되어있는 제품</BlueSpan> 중에
                고르는 <BlueSpan>관행적인 주문 상황</BlueSpan>이 주가 되어,
                시장에 새롭게 진입하는 제품의 음용 시도가 쉽지 않은 상황
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>최근 젊은 층의 음주가 지속 줄어드는 현상을 보이고 있음</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="font-B01-R gap-[3.5px]">
              - 한국 주류 문화인 ‘다수결 주류 선택’, ‘입점 된 제품 중에 고르는
              관행’으로 인한 신제품의 시장 진입 어려움
              <br />
              - 줄어드는 젊은 세대의 음주
              <br />
              <br />
              → ‘마시던 것만 마시는’ 주류 문화의 관습을 이야기하며, ‘새로운
              제품에 대한 음용 시도’가 직면한 과제임을 유추할 수 있어요
              <br />→ 젊은 세대의 음주가 줄어들며 이러한 어려움을 더욱 키우고
              있다고 볼 수 있어요
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
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                <BlueSpan>
                  새로움을 추구하고, 개인의 취향과 자기표현을 중요시하는 Z세대
                  20대를 핵심 타깃으로 겨냥
                </BlueSpan>
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                런칭 시부터 독보적인 존재감을 드러낸 모델 카리나를 지속 활용
                화려한 아이돌 가수의 모습이 아닌, 20대 또래의 인간 ‘유지민’으로
                모델 포지셔닝
              </div>
            </div>
            <DashList>
              크러시의 <BlueSpan>시원한 탄산감과 짜릿함을 강조</BlueSpan>하는
              ‘크게 터지는 탄산 러시’ 컨셉의 캠페인 진행 중
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px] font-B01-R">
              - 새로움을 추구하고, 개인의 취향과 자기표현을 중요시하는 Z세대와
              모델 카리나
              <br />- 크게 터지는 탄산 러시 캠페인 <br />
              <br />→ Z세대의 특징을 ‘새로움과 자기표현’으로 명확히 정의하며,
              앞서 이야기한 한국 주류 문화의 관습을 깨뜨릴 수 있음을 넌지시
              이야기해주고 있어요 <br />→ 카리나를 모델로 사용했다는 ‘사실’보다
              카리나가 가지는 이미지에서 ‘타깃과의 연관성’을 추측해보면 좋겠죠?
              <br /> → Z세대의 특징을 강조하면서도, 탄산과 관련된 캠페인을
              진행하는 것은 ‘본질은 결국 맥주’라는 점이에요!
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
              신규 출시된 풀오픈캔 제품을 통해 소비자들에게 크러시만의
              <BlueSpan> 차별화된 음용 경험과 브랜드의 뉴니스</BlueSpan> 주고자
              함
            </DashList>
            <DashList>
              크러시 <BlueSpan>풀오픈캔</BlueSpan>을 통해{" "}
              <BlueSpan>강력한 탄산에 대해 인지</BlueSpan>하고,{" "}
              <BlueSpan>짜릿한 맛의 연상을 강화</BlueSpan>하고, 나아가 크러시의{" "}
              <BlueSpan>재음용/신규음용</BlueSpan>을 지속 확대하는 것이 목표
            </DashList>
            <DashList>
              크러시 풀오픈캔을 다양한 방법으로 즐길 수 있는 방안에 대한
              아이디어 필요
            </DashList>
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className=" font-B01-R">
              - 크러시 풀 오픈 캔의 USP를 통해 차별화된 음용경험을 제공하여 신규
              음용/재음용을 유도하는 것이 목표 <br />
              <br />
              → 풀 오픈 캔이라는 특징은, Z세대에게 새로움을 어필하는 강점으로
              반드시 활용해야 해요!
              <br />
              → 전달해야 하는 메시지는 ‘짜릿함과 새로움’!
              <br />→ 풀 오픈 캔’만’이 할 수 있는 아이디어들을 생각해보면
              좋겠죠?
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
              <div>
                브랜드 메시지의 일방적인 Push형 캠페인이나 단발성 행사로 그치는
                1회성의 이벤트 보다는{" "}
                <BlueSpan>
                  타깃이 직접 즐기고, 참여, 지속 확산될 수 있는 형태의 캠페인
                </BlueSpan>{" "}
                선호
                <br />
                <br />
                [참고] 크게 열리는 탄산 러시 최근 캠페인 영상
                <br /> &lt;지금 필요한 건, 크게 터지는 탄산 러시&gt; 광고 영상:
                <a
                  href="https://www.youtube.com/watch?v=wJwQD0GMlaI"
                  target="_blank"
                  className="underline"
                >
                  링크
                </a>{" "}
                <br /> &lt;빠짐 없이, 크게 터지는 탄산 러시&gt; 광고 영상:
                <a
                  href="https://www.youtube.com/watch?v=wM1MIbQbucQ"
                  target="_blank"
                  className="underline"
                >
                  링크
                </a>{" "}
                <br /> &lt;풀오픈캔으로 크게 열리는 탄산 러시&gt; 광고 영상:
                <a
                  href="https://www.youtube.com/watch?v=wJwQD0GMlaI"
                  target="_blank"
                  className="underline"
                >
                  링크
                </a>
              </div>
            </div>{" "}
          </div>
        </div>

        <div className="flex flex-col gap-[70px]">
          <div className="px-[30px] py-[34px] bg-blue-50 rounded-[20px] mt-[14px]">
            <div className="flex gap-[16px] font-T03-SB text-blue-main mb-[32px]">
              <Tip /> 수상한 Tip
            </div>
            <div className=" font-B01-R">
              - PUSH형 메시지 전달, 단발성 행사가 아닌 자발적 참여와 확산이
              가능한 캠페인 제안
              <br />
              <br />
              → ‘우리 새롭고 청량해!’라고 알려주는 방식이 아닌, 타깃 스스로
              즐기는 문화를 만들어 내는캠페인을 해야해요
              <br />
              → PUSH형 아이디어를 피하려면, 아이디어가 직관적이고 자연스러운
              상황에서 활용가능할 수록 좋아요 (추천)
              <br />→ ‘나라면 할까?’에 집중해보면 어떨까요?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Krush;
