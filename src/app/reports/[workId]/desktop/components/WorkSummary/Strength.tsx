"use client";
import Loading from "@/components/common/Loading";
import { usePersonalStrengths, usePersonalWeakness } from "@/hooks/queries";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useState } from "react";

type StrengthItem = {
  code: string;
  score: number;
  label: string;
  description: string;
};

type StrengthProps = { workId: number };

const Strength = ({ workId }: StrengthProps) => {
  const [tab, setTab] = useState<"강점" | "보완점">("강점");
  const isWeak = tab === "보완점";
  const isMobile = useIsMobile();

  const {
    data: strengthData,
    isLoading: sLoading,
    isError: sError,
  } = usePersonalStrengths(workId);

  const {
    data: weaknessData,
    isLoading: wLoading,
    isError: wError,
  } = usePersonalWeakness(workId);

  const isLoading = tab === "강점" ? sLoading : wLoading;
  const isError = tab === "강점" ? sError : wError;

  const items: StrengthItem[] =
    tab === "강점"
      ? Array.isArray(strengthData?.result)
        ? strengthData.result
        : strengthData?.result
        ? [strengthData.result]
        : []
      : Array.isArray(weaknessData?.result)
      ? weaknessData.result
      : weaknessData?.result
      ? [weaknessData.result]
      : [];

  return (
    <div
      className={`flex flex-col items-start w-full ${
        isMobile ? "mt-9" : "mt-[108px]  mb-[219px]"
      }`}
    >
      <div
        className={`text-gray-900 ${isMobile ? "font-B01-B" : "font-T02-B"}`}
      >
        강점 및 보완점
      </div>

      <div
        className={`flex flex-row items-start ${
          isMobile ? "mt-6 mb-6 gap-2" : "gap-3 mt-[55px] mb-[29px]"
        }`}
      >
        {(["강점", "보완점"] as const).map((t) => {
          const isActive = tab === t;
          const isWeak = t === "보완점";

          const activeClass = isWeak
            ? "bg-orange-point text-white"
            : "bg-blue-main text-white";

          const inactiveClass =
            "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50";

          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-[30px]  items-center cursor-pointer ${
                isMobile
                  ? "font-B03-M px-[18px] py-2 "
                  : "font-B01-M px-[22px] py-[10px] "
              } ${isActive ? activeClass : inactiveClass}`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {isLoading && (
        <div className="flex items-center justify-center mt-[29px]">
          <Loading />
        </div>
      )}
      {isError && (
        <div className="text-center text-red-500">에러가 발생했습니다.</div>
      )}
      {!isLoading && !isError && items.length === 0 && (
        <div className="text-gray-600 mt-[29px] text-center">
          데이터가 없습니다.
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {items.map((card) => (
          <div
            key={card.code}
            className={`flex flex-col rounded-[10px] border bg-white  ${
              isMobile
                ? "h-[252px] p-[30px]"
                : "h-[325px] pl-8 pr-[30px] pt-9 pb-[35px]"
            } ${isWeak ? "border-orange-point" : "border-blue-main"}`}
          >
            <div
              className={`mb-2 ${
                isWeak ? "text-orange-point" : "text-blue-main"
              }`}
            >
              <span className={`${isMobile ? "font-B02-B" : "font-B01-B"}`}>
                {String(card.score).trim()}
              </span>
              <span className={`${isMobile ? "font-B02-R" : "font-B01-R"}`}>
                {" "}
                / 10점
              </span>
            </div>

            <div
              className={`text-gray-900 ${
                isMobile ? "font-B01-B mb-3" : " font-T04-SB mb-[23px]"
              }`}
            >
              {card.label}
            </div>

            <p
              className={`text-gray-500 text-justify text-ellipsis ${
                isMobile ? "font-B03-M" : "font-B02-M"
              }`}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
