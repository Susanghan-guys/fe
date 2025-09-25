"use client";
import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal";
import ShareModal from "./ShareModal";
import { useSubmitFeedback, useShareReport } from "@/hooks/queries";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ReportHeaderProps {
  workName: string;
  contestName: string;
  brand: string;
  workMembers: string[];
  workId: number;
  hasFeedback?: boolean;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({
  workName,
  contestName,
  brand,
  workMembers,
  workId,
  hasFeedback,
}) => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareLink, setShareLink] = useState<string>("");
  const [shareCode, setShareCode] = useState<string>("");

  const isMobile = useIsMobile();

  const submitFeedbackMutation = useSubmitFeedback();
  const shareReportMutation = useShareReport();

  const handleOpenFeedbackModal = () => setIsFeedbackModalOpen(true);
  const handleCloseFeedbackModal = () => setIsFeedbackModalOpen(false);

  const handleSubmitFeedback = (rating: number, review: string) => {
    submitFeedbackMutation.mutate({ workId, score: rating, content: review });
  };

  const handleOpenShareModal = () => {
    shareReportMutation.mutate(workId, {
      onSuccess: (res) => {
        const link =
          res.result?.link ?? `https://www.pickspot.co.kr/report/${workId}`;
        const code = res.result?.code ?? "";
        setShareLink(link);
        setShareCode(code);
        setIsShareModalOpen(true);
      },
      onError: () => {
        setShareLink(`https://www.pickspot.co.kr/report/${workId}`);
        setShareCode("");
        setIsShareModalOpen(true);
      },
    });
  };

  const handleCloseShareModal = () => setIsShareModalOpen(false);

  return (
    <div className="w-full">
      {!isMobile ? (
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-[36px] font-semibold text-gray-900 mb-4">
              {workName}
            </h1>

            <div className="font-B01-M">
              <div className="flex items-center text-gray-900 flex-wrap">
                <span>공모전</span>
                <span className="mx-3 text-gray-300">|</span>
                <span className="font-B01-R text-gray-700">{contestName}</span>

                {contestName !== "YCC" && (
                  <>
                    <span className="ml-[34px]">브랜드</span>
                    <span className="mx-3 text-gray-300">|</span>
                    <span className="font-B01-R text-gray-700">{brand}</span>
                  </>
                )}

                <span className="ml-[34px]">참여자</span>
                <span className="mx-3 text-gray-300">|</span>
                <span className="font-B01-R text-gray-700">
                  {workMembers?.join(", ") || ""}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 ml-8 relative h-full justify-end pt-[56px]">
            <button
              onClick={handleOpenFeedbackModal}
              disabled={hasFeedback}
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-[10px] transition-colors font-B02-SB text-gray-700"
            >
              {hasFeedback ? "피드백 작성완료" : "피드백 남기기"}
            </button>
            <button
              onClick={handleOpenShareModal}
              className="px-[14px] py-[10px] bg-gray-100 hover:bg-gray-200 rounded-[10px] transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.752 12.3497C19.249 12.3497 19.6523 12.753 19.6523 13.2501V16.2501C19.6522 17.8516 18.3535 19.1505 16.752 19.1505H3.25195C1.65042 19.1505 0.351712 17.8516 0.351562 16.2501V13.2501C0.351562 12.753 0.754897 12.3497 1.25195 12.3497C1.74901 12.3497 2.15234 12.753 2.15234 13.2501V16.2501C2.15249 16.8575 2.64453 17.3497 3.25195 17.3497H16.752C17.3594 17.3497 17.8514 16.8575 17.8516 16.2501V13.2501C17.8516 12.753 18.2549 12.3497 18.752 12.3497ZM9.43359 1.05183C9.78709 0.763382 10.3091 0.783803 10.6387 1.11336L15.1387 5.61336C15.49 5.96484 15.4901 6.53537 15.1387 6.8868C14.7872 7.23808 14.2167 7.23808 13.8652 6.8868L10.9023 3.9239V13.2501C10.9022 13.747 10.4989 14.1505 10.002 14.1505C9.50499 14.1505 9.10171 13.747 9.10156 13.2501V3.9239L6.13867 6.8868C5.78723 7.23808 5.21667 7.23808 4.86523 6.8868C4.51381 6.53537 4.5139 5.96484 4.86523 5.61336L9.36523 1.11336L9.43359 1.05183Z"
                  fill="#57585C"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-[18px]">
          <h1 className="font-T04-SB text-gray-900">{workName}</h1>

          <div className="flex flex-col gap-2 font-B03-M text-gray-900">
            <div>
              공모전
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-700 font-B03-R">{contestName}</span>
            </div>
            {contestName !== "YCC" && (
              <div>
                브랜드
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-700 font-B03-R">{brand}</span>
              </div>
            )}
            <div>
              참여자
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-gray-700 font-B03-R">
                {workMembers?.join(", ") || ""}
              </span>
            </div>
          </div>

          <div className="flex gap-2 self-end">
            <button
              onClick={handleOpenFeedbackModal}
              disabled={hasFeedback}
              className="flex px-[22px] py-3 bg-gray-100 hover:bg-gray-200 rounded-[10px] transition-colors font-B03-SB text-gray-700"
            >
              {hasFeedback ? "작성완료" : "피드백 남기기"}
            </button>
            <button
              onClick={handleOpenShareModal}
              className="p-[10px] bg-gray-100 hover:bg-gray-200 rounded-[10px] transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.752 12.3497C19.249 12.3497 19.6523 12.753 19.6523 13.2501V16.2501C19.6522 17.8516 18.3535 19.1505 16.752 19.1505H3.25195C1.65042 19.1505 0.351712 17.8516 0.351562 16.2501V13.2501C0.351562 12.753 0.754897 12.3497 1.25195 12.3497C1.74901 12.3497 2.15234 12.753 2.15234 13.2501V16.2501C2.15249 16.8575 2.64453 17.3497 3.25195 17.3497H16.752C17.3594 17.3497 17.8514 16.8575 17.8516 16.2501V13.2501C17.8516 12.753 18.2549 12.3497 18.752 12.3497ZM9.43359 1.05183C9.78709 0.763382 10.3091 0.783803 10.6387 1.11336L15.1387 5.61336C15.49 5.96484 15.4901 6.53537 15.1387 6.8868C14.7872 7.23808 14.2167 7.23808 13.8652 6.8868L10.9023 3.9239V13.2501C10.9022 13.747 10.4989 14.1505 10.002 14.1505C9.50499 14.1505 9.10171 13.747 9.10156 13.2501V3.9239L6.13867 6.8868C5.78723 7.23808 5.21667 7.23808 4.86523 6.8868C4.51381 6.53537 4.5139 5.96484 4.86523 5.61336L9.36523 1.11336L9.43359 1.05183Z"
                  fill="#57585C"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={handleCloseFeedbackModal}
        onSubmit={handleSubmitFeedback}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={handleCloseShareModal}
        reportUrl={shareLink || `https://www.pickspot.co.kr/report/${workId}`}
        reportCode={shareCode || ""}
      />
    </div>
  );
};

export default ReportHeader;
