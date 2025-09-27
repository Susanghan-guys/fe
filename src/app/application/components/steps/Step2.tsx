import React from "react";
import { StepLayout } from "../common/StepLayout";
import { StepNavigation } from "../common/StepNavigation";
import AP03 from "../../lotties/AP03";
import { AuthGuard } from "@/components/common/AuthGuard";

type Step2Props = {
  onNext: () => void;
  onPrev: () => void;
  stepNumber?: number;
  totalSteps?: number;
  contest: "daehong" | "hsad";
};

export function Step2({
  onNext,
  onPrev,
  stepNumber = 2,
  totalSteps = 3,
}: Step2Props) {
  return (
    <div>
      <AuthGuard>
        <StepLayout
          stepNumber={stepNumber}
          totalSteps={totalSteps}
          title="리포트 완성 메일"
          subtitle={
            <div className="pb-[27px]">
              리포트를 제작한 후, 완료되었다는 메일을 보내드립니다.
            </div>
          }
        >
          <div className="rounded-[20px] overflow-hidden">
            <AP03 />
          </div>
        </StepLayout>
        <StepNavigation onNext={onNext} onPrev={onPrev} stepNumber={stepNumber} />
      </AuthGuard>
    </div>
  );
}
