import { EvaluationType } from "@/app/_apis/schemas/reportResponse";
import React from "react";

export type Variant = "default" | "success" | "warning";

const STYLES: Record<Variant, { badge: string; title: string; body: string }> =
  {
    default: {
      badge: "bg-gray-100 text-gray-800 font-B03-SB",
      title: "text-gray-800 font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
    success: {
      badge: "bg-blue-50 text-blue-main font-B03-M",
      title: "text-blue-main font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
    warning: {
      badge: "bg-orange-50 text-orange-point font-B03-M",
      title: "text-orange-point font-T04-SB",
      body: "text-gray-500 font-B01-M",
    },
  };

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

  return (
    <section className="mt-[108px] w-full">
      {heading && <div className="text-gray-900 font-T02-B">{heading}</div>}

      <div className="mt-[52px] space-y-8">
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
              <div className="flex items-start gap-[18px]">
                <span
                  className={`inline-flex px-3 py-[6px] shrink-0 items-center justify-center rounded-[8px] ${v.badge}`}
                >
                  {item.order}
                </span>
                <div className="space-y-3">
                  <div className={v.title}>{item.title}</div>
                  <span className={v.body}>{item.body}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ScoreList;
