"use client";
import React, { useState } from "react";
import ButtonBase from "@/components/common/ButtonBase";
import { useSubmitStore } from "@/store/useSubmitStore";
import ConfirmModal from "@/components/common/ConfirmModal";
import ApplyComfirmModal from "@/components/common/ApplyCompleteModal";
import { DCAapply, YCCApply } from "@/app/_apis/apply";
import { DCAapplyRequest } from "@/app/_apis/schemas";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

interface SubmitButtonProps {
  mode: "dca" | "ycc";
}

const SubmitButton = ({ mode }: SubmitButtonProps) => {
  const {
    workInfoFilled,
    teamInfoFilled,
    briefUploaded,
    briefBoardFile,
    yccWorkInfoFilled,
    yccTeamInfoFilled,
    yccBriefUploaded,
    yccBriefFile,

    title,
    number,
    category,
    brand,
    teamMembers,
    additionalFile,
    youtubeUrl,
    members,
  } = useSubmitStore();

  const isDcaValid =
    mode === "dca" && workInfoFilled && teamInfoFilled && briefUploaded;

  const isYccValid =
    mode === "ycc" &&
    yccWorkInfoFilled &&
    yccTeamInfoFilled &&
    yccBriefUploaded;

  const isDisabled = !(isDcaValid || isYccValid);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitClick = () => {
    if (!isDisabled) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // DCA/YCC 제출하기 버튼 클릭 이벤트
    if (mode === "dca") {
      trackGAEvent(GA_EVENT.ClickSubmitDca, {
        screen: "AP"
      });
    } else if (mode === "ycc") {
      trackGAEvent(GA_EVENT.ClickSubmitYcc, {
        screen: "AP"
      });
    }

    if (mode === "dca") {
      if (!briefBoardFile) {
        alert("브리프보드 파일이 없습니다.");
        setIsSubmitting(false);
        return;
      }

      try {
        const formData = new FormData();
        const userData: Partial<DCAapplyRequest> = {
          title,
          number,
          category,
          brand,
          teamMembers,
        };

        if (category === "Film" && youtubeUrl) {
          userData.youtubeUrl = youtubeUrl;
        }

        formData.append(
          "request",
          new Blob([JSON.stringify(userData)], {
            type: "application/json",
          })
        );

        if (additionalFile) {
          formData.append("additionalFile", additionalFile);
        }

        formData.append("briefBoardFile", briefBoardFile);

        await DCAapply(formData);
        setIsModalOpen(false);
        setIsCompleteModalOpen(true);
      } catch (err) {
        console.error("제출 실패", err);
        alert("제출 중 오류가 발생했습니다.");
      } finally {
        setIsSubmitting(false);
      }
    }

    if (mode === "ycc") {
      if (!yccBriefFile) {
        alert("기획서 파일이 없습니다.");
        setIsSubmitting(false);
        return;
      }

      try {
        const formData = new FormData();
        const yccPayload = {
          title,
          members,
        };

        formData.append(
          "request",
          new Blob([JSON.stringify(yccPayload)], {
            type: "application/json",
          })
        );

        formData.append("planFile", yccBriefFile);

        await YCCApply(formData);
        setIsModalOpen(false);
        setIsCompleteModalOpen(true);
        console.log("제출 성공");
      } catch (err) {
        console.error("YCC 제출 실패", err);
        alert("YCC 제출 중 오류가 발생했습니다.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsCancelModalOpen(true);
  };

  return (
    <>
      <div className="mt-[130px] flex justify-center mb-[148px] w-full">
        <ButtonBase
          label="제출하기"
          size="M"
          disabled={isDisabled}
          onClick={handleSubmitClick}
        />
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="리포트를 신청하시겠습니까?"
        description="신청 후에는 작품을 변경할 수 없습니다."
        cancelText="취소"
        confirmText={isSubmitting ? "신청 중.." : "신청하기"}
      />

      <ApplyComfirmModal isOpen={isCompleteModalOpen} />

      <ConfirmModal
        isOpen={isCancelModalOpen}
        onClose={() => {
          setIsCancelModalOpen(false);
          window.location.reload();
        }}
        onConfirm={() => setIsCancelModalOpen(false)}
        title="신청을 취소하시겠습니까?"
        description="현재 입력한 정보는 삭제됩니다."
        cancelText="취소"
        confirmText="계속 작성하기"
      />
    </>
  );
};

export default SubmitButton;
