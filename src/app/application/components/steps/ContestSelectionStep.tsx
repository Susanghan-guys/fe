"use client";

import React, { useState } from "react";
import { ContestCard } from "../common/ContestCard";
import ReportIcon from "../../../../../public/icons/ReportIcon";
import { useAuth } from "@/hooks/queries/useAuth";
import { LoginModal } from "@/components/common/LoginModal";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

type ContestSelectionStepProps = {
  selectedContest?: "daehong" | "hsad";
  onNext: (contest: "daehong" | "hsad") => void;
};

export function ContestSelectionStep({
  selectedContest,
  onNext,
}: ContestSelectionStepProps) {
  const isMobile = useIsMobile();
  const [, setSelected] = useState<"daehong" | "hsad" | undefined>(
    selectedContest
  );
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleContestSelect = (contest: "daehong" | "hsad") => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    // GA 이벤트 전송
    if (contest === "daehong") {
      trackGAEvent(GA_EVENT.ApplySelectDca, {
        screen: "AP"
      });
    } else if (contest === "hsad") {
      trackGAEvent(GA_EVENT.ApplySelectYcc, {
        screen: "AP"
      });
    }

    setSelected(contest);

    onNext(contest);
  };

  return (
    <>
      <div className="flex flex-col gap-[38px]">
        <div className="sm:px-0 px-5 flex flex-col justify-center gap-[10px]">
          <div
            className={`flex gap-[10px] sm:mt-0 mt-[34px] ${
              isMobile ? "font-B01-SB" : "font-T01-SB"
            }`}
          >
            <ReportIcon
              width={isMobile ? 21 : 31}
              height={isMobile ? 24 : 35}
            />
            수상리포트 신청
          </div>
          <div
            className={`text-gray-600 ${
              isMobile ? "font-B03-R" : "font-B01-M"
            }`}
          >
            출품하신 공모전을 선택해주세요
          </div>
        </div>

        <div className="overflow-hidden sm:overflow-visible w-screen sm:w-full sm:h-full h-[calc(100vh-170px)] bg-gray-100">
          <div
            className={`flex gap-[30px] ${
              isMobile ? "overflow-x-auto scrollbar-hide h-full px-[20px] pt-[54px]" : ""
            }`}
          >
            <ContestCard
              type="daehong"
              onClick={() => handleContestSelect("daehong")}
            />
            <ContestCard
              type="hsad"
              onClick={() => handleContestSelect("hsad")}
            />
          </div>
        </div>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
