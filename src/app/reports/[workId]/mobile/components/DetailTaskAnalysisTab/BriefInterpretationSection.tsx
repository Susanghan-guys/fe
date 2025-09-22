import React from "react";
import { useDcaBriefEvaluation } from "@/hooks/queries";

interface BriefInterpretationSectionProps {
  workId: number;
}

function BriefInterpretationSection({ workId }: BriefInterpretationSectionProps) {
  const { data, isLoading } = useDcaBriefEvaluation(workId);

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center gap-[10px]">
          <div className="text-gray-900 font-T02-B">브리프 해석</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="10.5" cy="10.5" r="6.5" fill="#F5F5F5" />
            <path
              d="M10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.1631 18.5199 13.7131 17.6943 15.0234C17.7155 15.042 17.7366 15.0609 17.7568 15.0811L21.9189 19.2432C22.4263 19.7509 22.4265 20.5735 21.9189 21.0811C21.4113 21.5883 20.5887 21.5883 20.0811 21.0811L15.9883 16.9883C14.5073 18.2423 12.5926 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2ZM10.5 4.59961C7.24152 4.59961 4.59961 7.24152 4.59961 10.5C4.59961 13.7585 7.24152 16.4004 10.5 16.4004C13.7585 16.4004 16.4004 13.7585 16.4004 10.5C16.4004 7.24152 13.7585 4.59961 10.5 4.59961Z"
              fill="#29292C"
            />
          </svg>
        </div>
        <div className="font-B01-M text-gray-800 mt-[36px]">
          <div className="h-[20px] bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
          <div className="h-[20px] bg-gray-200 rounded w-5/6 mb-2 animate-pulse" />
          <div className="h-[20px] bg-gray-200 rounded w-2/3 animate-pulse" />
        </div>
      </div>
    );
  }

  const interpretation = data?.result?.interpretation;

  return (
    <div>
      <div className="flex items-center gap-[10px]">
        <div className="text-gray-900 font-T02-B">브리프 해석</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="10.5" cy="10.5" r="6.5" fill="#F5F5F5" />
          <path
            d="M10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.1631 18.5199 13.7131 17.6943 15.0234C17.7155 15.042 17.7366 15.0609 17.7568 15.0811L21.9189 19.2432C22.4263 19.7509 22.4265 20.5735 21.9189 21.0811C21.4113 21.5883 20.5887 21.5883 20.0811 21.0811L15.9883 16.9883C14.5073 18.2423 12.5926 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2ZM10.5 4.59961C7.24152 4.59961 4.59961 7.24152 4.59961 10.5C4.59961 13.7585 7.24152 16.4004 10.5 16.4004C13.7585 16.4004 16.4004 13.7585 16.4004 10.5C16.4004 7.24152 13.7585 4.59961 10.5 4.59961Z"
            fill="#29292C"
          />
        </svg>
      </div>

      <div className="font-B01-M text-gray-800 mt-[36px]">
        {interpretation ?? (
          <>
            브리프의 핵심인 &apos;부드러움&apos; 자산을 유지하며 1524 여성 타겟에게 새로운
            매력을 부여하는 방향을 정확히 반영했다. <br />
            버스 창문이라는 매체 특성을 활용해 &apos;채워진다&apos;는 감각적 메시지를 전달한
            점이 브랜드 상황과 해결 과제에 부합한다
          </>
        )}
      </div>
    </div>
  );
}

export default BriefInterpretationSection;
