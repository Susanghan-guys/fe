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

type Datum = { subject: string; value: number };
type ContestName = "DCA" | "YCC";
type Props = { workId: number; contestName: ContestName };

const MAX_SCORE = 10;
const RING_GAP_PX = 43;
const RING_COUNT = 4;
const OUTER_RADIUS = RING_GAP_PX * RING_COUNT;
const POLAR_RADII = Array.from(
  { length: RING_COUNT },
  (_, i) => RING_GAP_PX * (i + 1)
);
const LABEL_OFFSET_PX = 24;
const VALUE_OFFSET_PX = 8;

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

const makeTickRenderer = (data: Datum[]) => {
  const RadarTickLabel = (props: {
    x?: number | string;
    y?: number | string;
    cx?: number | string;
    cy?: number | string;
    payload?: { value: string };
  }): React.ReactElement<SVGElement> => {
    const { x, y, cx, cy, payload } = props;
    if (x == null || y == null || cx == null || cy == null) return <g />;

    const nx = Number(x),
      ny = Number(y),
      ncx = Number(cx),
      ncy = Number(cy);
    const dx = nx - ncx,
      dy = ny - ncy,
      len = Math.hypot(dx, dy) || 1;
    const ux = dx / len,
      uy = dy / len;

    const labelX = nx + ux * LABEL_OFFSET_PX;
    const labelY = ny + uy * LABEL_OFFSET_PX;

    const subject = payload?.value ?? "";
    const datum = data.find((d) => d.subject === subject);
    const v = datum?.value ?? 0;

    const ratio = Math.max(0, Math.min(1, v / MAX_SCORE));
    const vertexX = ncx + dx * ratio;
    const vertexY = ncy + dy * ratio;
    const scoreX = vertexX + ux * VALUE_OFFSET_PX;
    const scoreY = vertexY + uy * VALUE_OFFSET_PX;

    const parts = subject.split(" ");
    const lineHeight = 16,
      extraGap = 8;

    return (
      <g>
        {parts.length > 1 ? (
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            fontSize={18}
            fill="#434448"
          >
            <tspan x={labelX} dy={0}>
              {parts[0]}
            </tspan>
            <tspan x={labelX} dy={lineHeight + extraGap}>
              {parts.slice(1).join(" ")}
            </tspan>
          </text>
        ) : (
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            fontSize={18}
            fill="#434448"
          >
            {subject}
          </text>
        )}
        <text
          x={scoreX}
          y={scoreY + 5}
          textAnchor="middle"
          fontSize={14}
          fontWeight={600}
          fill="#256AFF"
        >
          {Number(v).toFixed(1)}
        </text>
      </g>
    );
  };
  RadarTickLabel.displayName = "RadarTickLabel";
  return RadarTickLabel;
};

const RadarChartComponent = ({ workId, contestName }: Props) => {
  const isDCA = contestName === "DCA";

  const dca = useWorkAllEvaluation(workId, { enabled: isDCA });
  const ycc = useWorkYccEvaluation(workId, { enabled: !isDCA });

  const dcaRes: WorkAllEvaluationResponse["result"] | undefined = isDCA
    ? dca.data?.result
    : undefined;
  const yccRes: WorkYCCEvaluationResponse["result"] | undefined = !isDCA
    ? ycc.data?.result
    : undefined;

  const chartData: Datum[] = isDCA
    ? dcaRes
      ? SUBJECT_MAP.DCA(dcaRes)
      : []
    : yccRes
    ? SUBJECT_MAP.YCC(yccRes)
    : [];

  const tickRenderer = makeTickRenderer(chartData);

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
    return <div className="mt-[108px] text-gray-600">데이터가 없습니다.</div>;
  }

  const totalScore = isDCA ? dcaRes!.totalScore : yccRes!.totalScore;

  return (
    <div className="flex flex-col items-start mt-[108px]">
      <div className="text-gray-900 font-T02-B mb-20">작품 총평</div>

      <div className="w-full text-center">
        <div className="text-gray-800 font-T04-SB">총점</div>
        <div className="text-blue-main text-[56px] font-semibold mt-[6px]">
          {totalScore}점
        </div>

        <div className="mt-[52px]">
          <ResponsiveContainer width="100%" height={480}>
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
  );
};

export default RadarChartComponent;
