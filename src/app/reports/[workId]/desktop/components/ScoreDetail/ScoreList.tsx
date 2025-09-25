"use client";
import { EvaluationType } from "@/app/_apis/schemas/reportResponse";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

export type Variant = "default" | "success" | "warning";

const getStyles = (isMobile: boolean) => ({
  default: {
    badge: `bg-gray-100 text-gray-800 ${
      isMobile ? "text-[12px] font-semibold" : "font-B03-SB"
    }`,
    title: `text-gray-800 ${isMobile ? "font-B02-SB" : "font-T04-SB"}`,
    body: `text-gray-500 ${isMobile ? "font-B03-M" : "font-B01-M"}`,
  },
  success: {
    badge: `bg-blue-50 text-blue-main ${
      isMobile ? "text-[12px] font-semibold" : "font-B03-M"
    }`,
    title: `text-blue-main ${isMobile ? "font-B02-SB" : "font-T04-SB"}`,
    body: `text-gray-500 ${isMobile ? "font-B03-M" : "font-B01-M"}`,
  },
  warning: {
    badge: `bg-orange-50 text-orange-point ${
      isMobile ? "text-[12px] font-semibold" : "font-B03-M"
    }`,
    title: `text-orange-point ${isMobile ? "font-B02-SB" : "font-T04-SB"}`,
    body: `text-gray-500 ${isMobile ? "font-B03-M" : "font-B01-M"}`,
  },
});

export interface ScoreItem {
  order: string;
  title: string;
  body: string;
}

export interface ScoreListProps {
  heading?: string;
  items: ScoreItem[];
  variants?: Variant[];
}

export const DCA_TYPES: EvaluationType[] = [
  "TARGET_FITNESS",
  "BRAND_UNDERSTANDING",
  "DCA_MEDIA_SELECTION",
  "PROBLEM_DEFINITION",
  "DCA_FEASIBILITY",
];

export const YCC_TYPES: EvaluationType[] = [
  "YCC_FEASIBILITY",
  "YCC_MEDIA_SELECTION",
  "AGENDA_SELECTION",
  "INFLUENCE",
  "DELIVERY",
];

export const DCA_HEADINGS = [
  "타겟 적합성",
  "브랜드 이해도",
  "매체 선정",
  "문제 정의",
  "실현 가능성",
];

export const YCC_HEADINGS = [
  "실현 가능성",
  "매체 선정",
  "아젠다 선정",
  "영향력",
  "전달력",
];

const ScoreList = ({ heading, items, variants }: ScoreListProps) => {
  const total = items.length;
  const isMobile = useIsMobile();
  const STYLES = getStyles(isMobile);

  return (
    <section className={`w-full ${isMobile ? "mt-9" : "mt-[108px]"}`}>
      {heading && (
        <div
          className={`text-gray-900 ${isMobile ? "font-B01-B" : "font-T02-B"}`}
        >
          {heading}
        </div>
      )}

      <div
        className={`w-full ${
          isMobile ? "mt-6 space-y-6" : "mt-[52px] space-y-8"
        }`}
      >
        {items.map((item, i) => {
          const variant: Variant =
            variants?.[i] ??
            (i < 3
              ? "success"
              : i >= Math.max(0, total - 3)
              ? "warning"
              : "default");

          const v = STYLES[variant];

          return (
            <div key={i}>
              {isMobile ? (
                <div className="flex flex-col items-start">
                  <div className="flex flex-row gap-[10px]">
                    <span
                      className={`inline-flex px-2 py-1 rounded-[4px] ${v.badge}`}
                    >
                      {item.order}
                    </span>
                    <div
                      className={`items-center inline-flex justify-center ${v.title}`}
                    >
                      {item.title}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`${v.body} block`}>{item.body}</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-[18px]">
                  <span
                    className={`inline-flex px-3 py-[6px] shrink-0  items-center justify-center rounded-[8px] ${v.badge}`}
                  >
                    {item.order}
                  </span>
                  <div className="space-y-3">
                    <div className={v.title}>{item.title}</div>
                    <span className={v.body}>{item.body}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScoreList;
