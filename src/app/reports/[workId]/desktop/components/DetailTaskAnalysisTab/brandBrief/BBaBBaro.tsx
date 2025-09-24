import Tip from "../../Tip";
import { BlueSpan } from "./BlueSpan";
import { useIsMobile } from "@/hooks/useIsMobile";

function BBaBBaro() {
  const isMobile = useIsMobile();
  return (
    <div>
      <div
        className={`text-gray-900 font-T02-B ${
          isMobile ? "mt-[50px] mb-[52px]" : "mt-[108px] mb-[52px]"
        }`}
      >
        브리프 분석
      </div>
      {/* 브랜드 소개 */}
      <div>
        <div
          className={`${
            isMobile ? "px-[20px] py-[30px]" : "p-[30px]"
          } border border-gray-200 rounded-[20px]`}
        >
          <div
            className={`${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            } text-gray-900 mb-[32px]`}
          >
            브랜드 소개
          </div>

          <div className="space-y-[20px]">
            <div className="flex gap-[16px]">
              <div
                className={`${
                  isMobile ? "font-B02-M" : "font-B01-M"
                } text-gray-500 min-w-[80px]`}
              >
                1983년
              </div>
              <div className="flex-1">
                <div
                  className={`${
                    isMobile ? "font-B02-M" : "font-B01-M"
                  } text-gray-800 mb-[12px]`}
                >
                  롯데웰푸드의 스테디 셀러 초코스틱 과자 &lt;빼빼로&gt; 출시
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div
                className={`${
                  isMobile ? "font-B02-M" : "font-B01-M"
                } text-gray-500 min-w-[80px]`}
              >
                1995년
              </div>
              <div className="flex-1">
                <div
                  className={`${
                    isMobile ? "font-B02-M" : "font-B01-M"
                  } text-gray-800 mb-[12px]`}
                >
                  1995년 시작되어{" "}
                  <span className="text-blue-main">
                    국내 대표 나눔 데이 문화
                  </span>
                  로 굳건히 자리잡고 있는 11월 11일 &lt;빼빼로 데이&gt;
                  <br />
                  빼빼로데이 인지율 99%, 참여율 98% 육박 (2022년 소비자 조사
                  결과)
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="space-y-[4px]">
          <div className="font-T04-R text-gray-500">- asd</div>
        </div> */}
        <div
          className={`flex flex-col ${isMobile ? "gap-[40px]" : "gap-[70px]"}`}
        >
          <div
            className={`${
              isMobile ? "px-[20px] py-[30px]" : "px-[30px] py-[34px]"
            } bg-blue-50 rounded-[20px] mt-[14px]`}
          >
            <div
              className={`flex gap-[16px] ${
                isMobile ? "font-B01-SB" : "font-T03-SB"
              } text-blue-main mb-[32px]`}
            >
              <Tip /> 수상한 Tip
            </div>
            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-gray-900`}
            >
              → ‘데이 마케팅의 대표’라는 말은 빼빼로의 가장 큰 장점이기도
              하지만, ‘데이 마케팅에 속박’되었다는 의미로도 해석 될 수 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 시장 상황 */}
      <div className={`${isMobile ? "mt-[40px]" : "mt-[70px]"}`}>
        <div
          className={`${
            isMobile ? "p-[20px]" : "p-[30px]"
          } border border-gray-200 rounded-[20px]`}
        >
          <div
            className={`${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            } text-gray-900 mb-[32px]`}
          >
            시장 상황
          </div>

          <div
            className={`space-y-[20px] ${
              isMobile ? "font-B02-M" : "font-B01-M"
            }`}
          >
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로는 국내 과자 시장에서 독보적인 브랜드 파워를 보유하고 있음
                <br />
                <span className="text-blue-main">
                  빼빼로데이 시즌(10~11월)에 매출이 집중되는 시즌성 강점&nbsp;
                </span>
                보유하였으나,&nbsp;
                <span className="text-blue-main">
                  최근 비시즌 (1~9월)에도 빼빼로 소비가 증가
                </span>
                하고 있어 연중 수요 기반 확대 중 빼빼로데이 인지율 99%, 참여율
                98% 육박 (2022년 소비자 조사 결과)
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                다양한 맛 출시, 한정판 패키지, 콜라보레이션 굿즈, SNS 이벤트
                등으로 소비자 경험을 다각화하며 &nbsp;
                <span className="text-blue-main">
                  브랜드와 소비자 간의 상호작용 강화 &nbsp;
                </span>
                중
              </div>
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                최근 타겟 선호도가 높은 K-pop 아이돌 스트레이 키즈(Stray Kids)
                앰버서더로 신규 캠페인 런칭 
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col ${isMobile ? "gap-[40px]" : "gap-[70px]"}`}
        >
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div className={`${isMobile ? "font-B02-M" : "font-B01-R"}`}>
                시즌을 활용한 주력 마케팅과 비시즌으로 확장하는 서브 마케팅 추구
              </div>
            </div>
            <br />
            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-gray-900`}
            >
              → 강점인 데이마케팅을 강화하여 이슈의 재점화, 또는 일상적 접점을
              늘리는 비시즌 전략을 희망한다고 볼 수 있어요
            </div>
          </div>
        </div>
      </div>

      {/* 브랜드 상황 및 커뮤니케이션 타깃 */}
      <div className={`${isMobile ? "mt-[40px]" : "mt-[70px]"}`}>
        <div className={`${isMobile ? 'p-[20px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div
            className={`${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            } text-gray-900 mb-[32px]`}
          >
            브랜드 상황 및 커뮤니케이션 타깃
          </div>

          <div
            className={`space-y-[20px] ${
              isMobile ? "font-B02-M" : "font-B01-M"
            }`}
          >
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로(데이)는 남녀노소 누구나 인지하고 참여하는 문화였으나,
                <BlueSpan>데이마케팅에 대한 일부 소비자들의 피로도</BlueSpan>를
                확인
                <br /> → 이에 따라 데이 참여율이 정체되는 상황
                <br />
                <br />
                특히, <BlueSpan>영타겟(10~20대)</BlueSpan> 사이에서 브랜드의{" "}
                <BlueSpan>감성적 연결 및 선호도 제고</BlueSpan>, 그리고
                빼빼로데이에 대한 <BlueSpan>자발적 참여 유도</BlueSpan>가 핵심
                과제로 부상하고 있음
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col ${isMobile ? "gap-[40px]" : "gap-[70px]"}`}
        >
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div className={`${isMobile ? "font-B02-M" : "font-B01-R"}`}>
                높은 인지도와 비례하여 피로도 역시 증가, 부족한 영타겟 감성 연결
                → 빼뺴로 데이의 참여율 저하
              </div>
            </div>
            <br />
            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-gray-900`}
            >
              → 영 타깃이 빼빼로데이에 느끼는 감정, 심리를 분석하여 빼뺴로
              데이가 매력적이게 느껴지게 할 포인트를 찾아보세요
              <br />→ 익숙해진 빼빼로데이를 영 타깃이 신선하게 느낄 수 있는
              새로움이 필요하다는 말이기도 해요
            </div>
          </div>
        </div>
      </div>

      {/* 해결 과제 */}
      <div className={`${isMobile ? "mt-[40px]" : "mt-[70px]"}`}>
        <div className={`${isMobile ? 'p-[20px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div
            className={`${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            } text-gray-900 mb-[32px]`}
          >
            해결 과제
          </div>

          <div className={`space-y-[8px] ${isMobile ? 'font-B02-M' : 'font-B01-M'}`}>
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로데이 시즌(10~11월) 타겟들의 빼빼로데이 참여를 증대시킬 수
                있는 아이디어
              </div>
            </div>{" "}
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로 비시즌(1~9월)에도 브랜드에 활력을 부여하고 이슈업 시킬 수
                있는 아이디어
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col ${isMobile ? "gap-[40px]" : "gap-[70px]"}`}
        >
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              <div>1.&nbsp;</div>
              <div className="">빼빼로데이 참여 증대 아이디어</div>
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              <div>2.</div>
              <div className="">비시즌 브랜드 접점 확대/ 이슈화</div>
            </div>
            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-blue-main mt-[12px]`}
            >
              *1~2 연계 가능
            </div>
            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-gray-900 mt-[32px]`}
            >
              → 강점을 강화하려면 ‘데이’에 집중하거나, 감정을 전하는 타깃 심리에
              주목해볼 필요가 있어요
              <br /> → 약점을 보완하려면 ‘빼빼로’만이 가진 매력을 일상 속에
              자연스럽게 녹여내는 접점을 찾아 보세요
              <br /> <BlueSpan>• 둘 다 가능하면 더 좋겠죠?</BlueSpan>
            </div>
          </div>
        </div>
      </div>

      {/* 유의 및 참고사항 */}
      <div className={`${isMobile ? "mt-[40px]" : "mt-[70px]"}`}>
        <div className={`${isMobile ? 'p-[20px]' : 'p-[30px]'} border border-gray-200 rounded-[20px]`}>
          <div
            className={`${
              isMobile ? "font-B01-SB" : "font-T03-SB"
            } text-gray-900 mb-[32px]`}
          >
            유의 및 참고사항
          </div>

          <div
            className={`space-y-[8px] ${
              isMobile ? "font-B02-M" : "font-B01-M"
            }`}
          >
            <div className="flex gap-[3.5px]">
              <div>-</div>
              <div>
                빼빼로(데이)가 가진{" "}
                <BlueSpan>본질적 가치인 “나눔/연결의 가치”</BlueSpan>는 유지
                필요
                <br />
                현재 빼빼로 브랜드 앰버서더인 스트레이 키즈(Stray Kids) 활용
                가능하나 <BlueSpan>모델 활용이 필수는 아님</BlueSpan>
                <br />
                국내 중심이나, 해외 글로벌 마케팅 확장 포인트가 있다면 추가
                아이디어도 제시 가능
              </div>
            </div>{" "}
          </div>
        </div>

        <div
          className={`flex flex-col ${isMobile ? "gap-[40px]" : "gap-[70px]"}`}
        >
          <div className={`${isMobile ? 'px-[20px] py-[24px]' : 'px-[30px] py-[34px]'} bg-blue-50 rounded-[20px] mt-[14px]`}>
            <div className={`flex gap-[16px] ${isMobile ? 'font-B01-SB' : 'font-T03-SB'} text-blue-main mb-[32px]`}>
              <Tip /> 수상한 Tip
            </div>
            <div className={`flex gap-[3.5px] ${isMobile ? 'font-B02-M' : 'font-B01-R'}`}>
              <div>-</div>
              <div>
                나눔/연결의 가치 유지 필요, 모델 활용 가능하나 필수 x, 국내
                중심이지만 글로벌 확장 포인트 제시 가능
              </div>
            </div>

            <div
              className={`${
                isMobile ? "font-B02-M" : "font-B01-R"
              } text-gray-700 mt-[18px]`}
            >
              → 아이디어에 나눔/연결을 나타낼 수 있는 요소가 반영되었는지 체크!
              <br />
              → 모델 활용 가능하나, 필수가 아니라는 말은 모델을 굳이 고려할
              필요가 없다는 말으로 해석할 수 있어요.
              <br />→ 국내가 중심이지만 +@로 글로벌 확장도 가능하면 더 좋겠죠?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BBaBBaro;
