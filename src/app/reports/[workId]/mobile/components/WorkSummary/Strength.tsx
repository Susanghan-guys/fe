"use client";
import Loading from "@/components/common/Loading";
import { usePersonalStrengths, usePersonalWeakness } from "@/hooks/queries";
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
    <div className="flex flex-col mt-[108px] items-start w-full mb-[219px]">
      <div className="text-gray-900 font-T02-B">강점 및 보완점</div>

      <div className="mb-[29px] flex flex-row items-start gap-3 mt-[55px]">
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
              className={`relative rounded-[30px] px-[22px] py-[10px] items-center font-B01-M cursor-pointer ${
                isActive ? activeClass : inactiveClass
              }`}
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
            className={`flex flex-col rounded-[10px] border bg-white pl-8 h-[325px] pr-[30px] pt-9 pb-[35px]  ${
              isWeak ? "border-orange-point" : "border-blue-main"
            }`}
          >
            <div
              className={`mb-2 ${
                isWeak ? "text-orange-point" : "text-blue-main"
              }`}
            >
              <span className="font-B01-B">{String(card.score).trim()}</span>
              <span className="font-B01-R"> / 10점</span>
            </div>

            <div className="mb-[23px] text-gray-900 font-T04-SB">
              {card.label}
            </div>
            <p className="text-gray-500 font-B02-M text-justify text-ellipsis">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strength;
