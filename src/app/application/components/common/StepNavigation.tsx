import React from "react";
import GrayButton from "@/components/common/GrayButton";
import { NextButton } from "@/components/common/ButtonBase";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

type StepNavigationProps = {
  onNext: () => void;
  onPrev?: () => void;
  stepNumber?: number;
};

export function StepNavigation({ onNext, onPrev, stepNumber }: StepNavigationProps) {
  const isMobile = useIsMobile();

  const handleNext = () => {
    // GA 이벤트 전송
    if (stepNumber === 1) {
      trackGAEvent(GA_EVENT.ReportStep1Next, {
        screen: "AP"
      });
    } else if (stepNumber === 2) {
      trackGAEvent(GA_EVENT.ReportStep2Next, {
        screen: "AP"
      });
    } else if (stepNumber === 3) {
      trackGAEvent(GA_EVENT.ReportStep3Next, {
        screen: "AP"
      });
    }
    onNext();
  };

  const handlePrev = () => {
    // GA 이벤트 전송
    if (stepNumber === 1) {
      trackGAEvent(GA_EVENT.ReportStep1Back, {
        screen: "AP"
      });
    } else if (stepNumber === 2) {
      trackGAEvent(GA_EVENT.ReportStep2Back, {
        screen: "AP"
      });
    } else if (stepNumber === 3) {
      trackGAEvent(GA_EVENT.ReportStep3Back, {
        screen: "AP"
      });
    }
    onPrev?.();
  };

  return (
    <div
      className={`flex w-full justify-center items-center mt-8 ${
        isMobile ? "justify-end items-end pr-[20px] pb-[44px] min-h-[124px] h-[calc(100vh-599px)]" : ""
      }`}
    >
      {onPrev && (
        <GrayButton
          label="이전"
          className="w-[88px] mr-[20px]"
          onClick={handlePrev}
        />
      )}
      <NextButton className="w-[100px]" size="S" onClick={handleNext} />
    </div>
  );
}
