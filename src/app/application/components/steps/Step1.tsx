import React from "react";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import AP02 from "../../lotties/AP02";
import { AuthGuard } from "@/components/common/AuthGuard";

type Step1Props = {
  onNext: () => void;
  onPrev: () => void;
  stepNumber?: number;
  totalSteps?: number;
  contest: "daehong" | "hsad";
};

export function Step1({
  onNext,
  onPrev,
  stepNumber = 1,
  totalSteps = 3,
}: Step1Props) {
  return (
    <div>
      <AuthGuard>
        <StepLayout
          stepNumber={stepNumber}
          totalSteps={totalSteps}
          title="출품작 업로드"
          subtitle={
            <>
              분석받을 출품작을 업로드해주세요
              <br />
              업로드한 자료를 바탕으로 개인 맞춤형 리포트를 제작합니다
            </>
          }
        >
          <div className="rounded-[20px] overflow-hidden">
            <AP02 />
          </div>
        </StepLayout>
        <StepNavigation onNext={onNext} onPrev={onPrev} stepNumber={stepNumber} />
      </AuthGuard>
    </div>
  );
}
