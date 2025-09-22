import React from "react";

interface ContestCardProps {
  width?: number;
  height?: number;
  className?: string;
  contest: string;
}

export default function ContestCard({
  width = 478,
  height = 554,
  className = "",
  contest,
}: ContestCardProps) {
  return (
    <div className="relative">
      <div className="absolute top-[50px] left-[37px] font-T01-B text-white">
        {contest}는 이런 공모전이에요
      </div>

      <div className="absolute top-[366px] left-[37px] text-blue-100 font-B01-M">
        {contest === "DCA" ? (
          <div>
            DCA는 브랜드 요구사항을 핵심 평가 기준으로 삼아,
            <br /> 이를 정확히 이해하고 반영하는 역량을 평가해요.
            <br />
            <br /> 동시에 자유로운 크리에이티브를 펼치기에 적합해,
            <br /> 클라이언트 니즈에 맞는 창의력을 연습하기에 좋은 <br />
            공모전이에요.
          </div>
        ) : (
          <div>
            YCC는 실제 아이디어 구현 과정을 포함한 유일한
            <br />
            공모전으로, 실현 가능성을 핵심 평가 기준으로 삼아요.
            <br />
            <br />
            동시에 적절한 사회문제를 선정해
            <br />
            소셜 임팩트를 만들어내는 전 과정을 평가합니다.
          </div>
        )}
      </div>

      <svg
        width={width}
        height={height}
        viewBox="0 0 478 554"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_2438_2714)">
          <rect width="478" height="554" rx="16" fill="#256AFF" />
          <g opacity="0.12">
            <path
              d="M237.574 89.8554C229.224 150.498 201.971 206.965 159.689 251.231C117.407 295.497 62.2485 325.309 2.05259 336.43L-12.9577 255.181C30.1545 247.216 69.6594 225.865 99.9415 194.162C130.224 162.458 149.742 122.016 155.723 78.5845L237.574 89.8554Z"
              fill="#9BBAFF"
            />
            <path
              d="M412.689 332.664C412.689 262.005 386.991 193.757 340.387 140.645C293.783 87.5333 229.453 53.1835 159.393 44L142.605 127.751C192.115 134.24 243.263 159.437 276.197 196.97C309.131 234.502 327.291 282.731 327.291 332.664H412.689Z"
              fill="#FAFAFA"
            />
            <path
              d="M327.227 332.792H462.144"
              stroke="#FAFAFA"
              strokeWidth="28.9906"
            />
          </g>
          <rect
            x="8"
            y="11"
            width="491"
            height="158"
            fill="url(#paint0_linear_2438_2714)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2438_2714"
            x1="253.5"
            y1="108.5"
            x2="253.5"
            y2="169"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#256AFF" />
            <stop offset="1" stopColor="#256AFF" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_2438_2714">
            <rect width="478" height="554" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
