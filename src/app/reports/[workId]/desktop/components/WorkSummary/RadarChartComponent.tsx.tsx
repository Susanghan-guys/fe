"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  WorkAllEvaluationResponse,
  WorkYCCEvaluationResponse,
} from "@/app/_apis/schemas/reportResponse";
import { useWorkAllEvaluation, useWorkYccEvaluation } from "@/hooks/queries";
import Loading from "@/components/common/Loading";
import { useIsMobile } from "@/hooks/useIsMobile";

type Datum = { subject: string; value: number };
type ContestName = "DCA" | "YCC";
type Props = { workId: number; contestName: ContestName };

const MAX_SCORE = 10;
const RING_COUNT = 4;

const SUBJECT_MAP = {
  DCA: (r: WorkAllEvaluationResponse["result"]): Datum[] => [
    { subject: "타겟 적합성", value: r.targetScore },
    { subject: "브랜드 이해도", value: r.brandScore },
    { subject: "매체 선정", value: r.mediaScore },
    { subject: "문제정의", value: r.problemScore },
    { subject: "실현 가능성", value: r.feasibilityScore },
  ],
  YCC: (r: WorkYCCEvaluationResponse["result"]): Datum[] => [
    { subject: "실현 가능성", value: r.feasibilityScore },
    { subject: "매체 선정", value: r.mediaScore },
    { subject: "아젠다 선정", value: r.agendaScore },
    { subject: "영향력", value: r.influenceScore },
    { subject: "전달력", value: r.deliveryScore },
  ],
} as const;

const makeTickRenderer = (data: Datum[], isMobile: boolean) => {
  const RadarTickLabel = (props: {
    x?: string | number | undefined;
    y?: string | number | undefined;
    cx?: string | number | undefined;
    cy?: string | number | undefined;
    payload?: { value: string };
  }) => {
    const { x, y, cx, cy, payload } = props;
    if (x == null || y == null || cx == null || cy == null) return <g />;

    const nx = Number(x),
      ny = Number(y),
      ncx = Number(cx),
      ncy = Number(cy);
    const dx = nx - ncx,
      dy = ny - ncy;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len,
      uy = dy / len;

    const LABEL_OFFSET = isMobile ? 16 : 24;
    const VALUE_OFFSET = isMobile ? 6 : 8;

    const labelX = nx + ux * LABEL_OFFSET;
    const labelY = ny + uy * LABEL_OFFSET;

    const subject = payload?.value ?? "";
    const datum = data.find((d) => d.subject === subject);
    const v = datum?.value ?? 0;

    const ratio = Math.max(0, Math.min(1, v / MAX_SCORE));
    const vertexX = ncx + dx * ratio;
    const vertexY = ncy + dy * ratio;
    const scoreX = vertexX + ux * VALUE_OFFSET;
    const scoreY = vertexY + uy * VALUE_OFFSET;

    return (
      <g>
        <text
          x={labelX}
          y={labelY}
          textAnchor="middle"
          fontSize={isMobile ? 12 : 18}
          fill="#434448"
        >
          {subject}
        </text>
        <text
          x={scoreX}
          y={scoreY + 4}
          textAnchor="middle"
          fontSize={isMobile ? 11 : 14}
          fontWeight={600}
          fill="#256AFF"
        >
          {Number(v).toFixed(1)}
        </text>
      </g>
    );
  };
  return RadarTickLabel;
};

const RadarChartComponent = ({ workId, contestName }: Props) => {
  const isMobile = useIsMobile();
  const isDCA = contestName === "DCA";

  const dca = useWorkAllEvaluation(workId, { enabled: isDCA });
  const ycc = useWorkYccEvaluation(workId, { enabled: !isDCA });

  const dcaRes = isDCA ? dca.data?.result : undefined;
  const yccRes = !isDCA ? ycc.data?.result : undefined;

  const chartData: Datum[] = isDCA
    ? dcaRes
      ? SUBJECT_MAP.DCA(dcaRes)
      : []
    : yccRes
    ? SUBJECT_MAP.YCC(yccRes)
    : [];

  const tickRenderer = makeTickRenderer(chartData, isMobile);

  const active = isDCA ? dca : ycc;
  if (active.isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (active.isError) {
    return <div className="text-center text-red-500">에러가 발생했습니다.</div>;
  }
  if (chartData.length === 0) {
    return (
      <div className="mt-[60px] sm:mt-[108px] text-gray-600">
        데이터가 없습니다.
      </div>
    );
  }

  const totalScore = isDCA ? dcaRes!.totalScore : yccRes!.totalScore;

  const RING_GAP = isMobile ? 28 : 43;
  const OUTER_RADIUS = RING_GAP * RING_COUNT;
  const POLAR_RADII = Array.from(
    { length: RING_COUNT },
    (_, i) => RING_GAP * (i + 1)
  );
  const chartHeight = isMobile ? 300 : 480;

  return (
    <div
      className={`flex flex-col items-start ${
        isMobile ? "mt-9" : "mt-[108px]"
      }`}
    >
      <div
        className={`text-gray-900 ${
          isMobile ? "font-B01-B mb-9" : "font-T02-B mb-10 sm:mb-20"
        }`}
      >
        작품 총평
      </div>

      <div className="w-full text-center">
        <div
          className={`text-gray-800 ${
            isMobile ? "text-sm font-B02-SB" : "font-T04-SB"
          }`}
        >
          총점
        </div>
        <div
          className={`text-blue-main ${
            isMobile ? "text-[36px]" : "text-[56px]"
          } font-semibold mt-[6px]`}
        >
          {totalScore}점
        </div>

        <div className={isMobile ? "mt-[32px]" : "mt-[52px]"}>
          <div className="flex items-center justify-center w-full">
            <ResponsiveContainer
              width="100%"
              height={chartHeight}
              className="max-w-[400px] sm:max-w-[600px]"
            >
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius={OUTER_RADIUS}
                data={chartData}
              >
                <PolarGrid
                  gridType="polygon"
                  stroke="#E5E7EB"
                  strokeWidth={1.2}
                  radialLines={false}
                  polarRadius={POLAR_RADII}
                />
                <PolarRadiusAxis
                  domain={[0, MAX_SCORE]}
                  tick={false}
                  axisLine={false}
                  tickLine={false}
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tickLine={false}
                  axisLine={false}
                  tick={tickRenderer}
                />
                <Radar
                  name="평가"
                  dataKey="value"
                  stroke="#BBD1FF"
                  strokeWidth={2}
                  fill="rgba(37,106,255,0.10)"
                  fillOpacity={1}
                  dot={false}
                  activeDot={false}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarChartComponent;
