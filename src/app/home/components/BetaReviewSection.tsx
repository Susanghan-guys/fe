import { useState } from "react";
import { LeftArrow, RightArrow, Star } from "../../../../public";
import StarNoFIll from "../../../../public/icons/StarNoFIll";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

const reviewData = [
  {
    title: "KoSAC 서울지역 출품자",
    content:
      "이전까지는 다른 팀들의 작품을 통해 배울 수 없었지만, 수상 리포트를 통해 확실히 비교하며 성장할 수 있었습니다. 공모전은 결과만이 아니라, 배움의 과정이라고 느꼈습니다.",
    university: "동덕여자대학교",
    name: "김하진",
    rating: 4,
  },
  {
    title: "KoSAC 파이널리스트 수상",
    content:
      "출품 이후 회고하는 과정이 공모전의 완성이라는 점을 깨달았습니다. 수상도 기뻤지만, 무엇보다 어떤 점이 부족했는지를 구체적으로 알 수 있어 다음 도전에 큰 도움이 되었습니다.",
    university: "명지대학교",
    name: "이연주",
    rating: 5,
  },
  {
    title: "KoSAC 경기지역 출품자",
    content:
      "현업자의 시선과 데이터를 기반으로 한 AI 피드백의 조화가 인상 깊었습니다. 막연한 평가가 아니라, 객관적인 근거와 전문가의 코멘트가 함께 있어 더 신뢰가 갔고, 개선 방향도 명확했습니다.",
    university: "아주대학교",
    name: "정유석",
    rating: 4,
  },
];

function BetaReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    trackGAEvent(GA_EVENT.ViewReviews, {
      screen: "HM",
    });
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    trackGAEvent(GA_EVENT.ViewReviews, {
      screen: "HM",
    });
    setCurrentIndex((prev) => Math.min(prev + 1, reviewData.length - 1));
  };

  return (
    <div className="py-12 sm:py-[120px] px-4 sm:pl-[122px] sm:pr-[118px] flex flex-col w-full items-center sm:items-start justify-center gap-8 sm:gap-[36px]">
      <div className="w-full bg-blue-50 rounded-[20px] sm:rounded-[30px] pt-10 sm:pt-[65px] pb-8 sm:pb-[40px] overflow-hidden flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-end justify-between px-0 sm:px-[58px] gap-4 sm:gap-0">
          <div className="text-black text-[22px] sm:text-[36px] font-default font-semibold text-center sm:text-left w-full">
            KoSAC 공모전 <br />
            출품자를 대상으로 <br />
            베타 테스트를 진행했습니다
          </div>
          <div className="flex flex-row gap-4 sm:gap-[21px] cursor-pointer justify-center sm:justify-end mt-4 sm:mt-0">
            <div onClick={handlePrev}>
              <LeftArrow />
            </div>
            <div onClick={handleNext}>
              <RightArrow />
            </div>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-[45px] w-full flex flex-col items-center">
          <div className="hidden sm:block">
            <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-[#E9F0FF] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-[#E9F0FF] to-transparent z-10 pointer-events-none" />
            <div
              className="flex px-[58px] gap-10 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${
                  currentIndex * 530
                }px + 50% - 245px))`,
              }}
            >
              {reviewData.map((review, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={idx}
                    className={`shrink-0 rounded-2xl px-[30px] py-[26px] flex flex-col transition-all duration-300
                      ${
                        isActive
                          ? "w-[490px] h-[280px] bg-blue-main text-white font-T02-B"
                          : "w-[442px] h-[252px] bg-gray-200 text-gray-500 font-T03-B"
                      }`}
                  >
                    <div className="flex flex-col flex-1">
                      <div className="flex gap-[4px] mb-[8px]">
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < review.rating ? (
                            <Star
                              key={i}
                              fill={isActive ? "#BBD1FF" : "#FAFAFA"}
                            />
                          ) : (
                            <StarNoFIll
                              key={i}
                              fill={isActive ? "#6D9BFF" : "#ECECEE"}
                            />
                          )
                        )}
                      </div>
                      <div
                        className={`${isActive ? "font-T02-B" : "font-T03-B"}`}
                      >
                        {review.title}
                      </div>
                      <div
                        className={`${
                          isActive
                            ? "mt-auto font-B02-M"
                            : "mt-[60px] font-B03-M"
                        }`}
                      >
                        {review.content}
                      </div>
                    </div>
                    <div
                      className={`${
                        isActive
                          ? "font-B02-M text-blue-100 text-end"
                          : "font-B03-M text-gray-300 text-end"
                      }`}
                    >
                      {review.university} | {review.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:hidden w-full flex items-center justify-center">
            {(() => {
              const review = reviewData[currentIndex];
              return (
                <div className="shrink-0 rounded-2xl px-4 py-6 flex flex-col w-[90%] max-w-[400px] h-auto bg-blue-main text-white font-T02-B transition-all duration-300 mx-auto">
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-[4px] mb-[8px]">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < review.rating ? (
                          <Star key={i} fill="#BBD1FF" />
                        ) : (
                          <StarNoFIll key={i} fill="#6D9BFF" />
                        )
                      )}
                    </div>
                    <div className="font-T02-B text-center">{review.title}</div>
                    <div className="mt-auto font-B02-M text-center">
                      {review.content}
                    </div>
                  </div>
                  <div className="font-B02-M text-blue-100 text-end mt-2">
                    {review.university} | {review.name}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetaReviewSection;
