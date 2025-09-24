import React, { useState } from "react";
import { ReportDelete } from "../../../../public";
import { useIsMobile } from "@/hooks/useIsMobile";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useRouter } from "next/navigation";
import { useDeleteReportVisibility } from "@/hooks/queries";

export interface ReportCardProps {
  type: string;
  title: string;
  org: string;
  participants: string;
  status: "완료" | "제작중";
  onDelete?: () => void;
  workId: number;
  isDeletable?: boolean;
}

const ReportCard = ({
  type,
  title,
  org,
  participants,
  status,
  onDelete,
  workId,
  isDeletable,
}: ReportCardProps) => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"simple" | "title-confirm">(
    "simple"
  );

  const deleteMutation = useDeleteReportVisibility();

  const isCompleted = status === "완료";

  const handleDeleteClick = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalType("simple");
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (onDelete) {
      onDelete();
      return;
    }
    deleteMutation.mutate({ workId, title });
    setIsDeleteModalOpen(false);
  };

  const navigateToReport = () => {
    if (!isCompleted) return;
    router.push(`/reports/${workId}`);
  };

  if (isMobile) {
    return (
      <>
        <div className="rounded-[12px] bg-white p-5 w-full mb-6">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between w-full">
              <div className="py-1 px-2 rounded-[4px] font-C01-M flex justify-center items-center bg-blue-50 text-blue-main">
                {type}
              </div>

              <div className="ml-auto" onClick={handleDeleteClick}>
                <ReportDelete />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-5">
              <div className="text-gray-900 font-B02-SB">{title}</div>
              <div
                className={`font-C01-M ${
                  isCompleted ? "text-blue-main" : "text-gray-500"
                }`}
              >
                {status}
              </div>
            </div>
            <div className="text-gray-500 font-C01-R mt-[4px]">{org}</div>
            <div className="flex flex-row mt-[32px]">
              <div className="text-gray-900 font-C01-M">참여자</div>
              <div className="w-[1px] h-4 bg-gray-200 mx-2 mt-[2px]"></div>
              <div className="text-gray-700 font-C01-R">{participants}</div>
            </div>
            {isCompleted && (
              <button
                onClick={navigateToReport}
                className="flex mt-[22px] items-center justify-center px-[22px] py-3 rounded-[10px] bg-blue-main cursor-pointer"
              >
                <div className="text-white font-B03-M">리포트 보기</div>
              </button>
            )}
          </div>
        </div>
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
          title={title}
          type={modalType}
        />
      </>
    );
  }

  return (
    <>
      <div
        onClick={navigateToReport}
        className={`w-full flex flex-row items-start rounded-[6px] bg-gray-50 h-[72px] px-11 py-[23px] mb-[14px] ${
          isCompleted ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        <div className="text-gray-700 font-B02-M w-[76px]">{type}</div>
        <div className="w-[347px] text-black font-B01-R">{title}</div>
        <div className="w-[163px] text-gray-700 font-B02-R"> {org}</div>
        <div className="w-[234px] text-gray-700 font-B02-R">
          {" "}
          {participants}
        </div>
        <div
          className={`font-B02-M w-[203px] ${
            isCompleted ? "text-blue-main" : "text-gray-500"
          }`}
        >
          {status}
        </div>
        {isDeletable && (
          <div className="ml-auto" onClick={handleDeleteClick}>
            <ReportDelete />
          </div>
        )}
      </div>

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        title={title}
        type={modalType}
      />
    </>
  );
};

export default ReportCard;
