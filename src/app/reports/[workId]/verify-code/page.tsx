"use client";
import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/app/home/components/Footer";
import TextInput from "@/components/common/TextInput";
import GrayButton from "@/components/common/GrayButton";
import ButtonBase from "@/components/common/ButtonBase";
import { useRouter, useParams } from "next/navigation";
import { useVerifyReportCode } from "@/hooks/queries";
import { AuthGuard } from "@/components/common/AuthGuard";

function VerifyCodePage() {
  const router = useRouter();
  const params = useParams() as { workId?: string };
  const workId = Number(params?.workId);
  const [code, setCode] = useState("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const verifyMutation = useVerifyReportCode();

  const handleCancel = () => {
    router.back();
  };

  const handleVerify = () => {
    if (!Number.isFinite(workId) || !code.trim()) return;
    setErrorMsg("");
    verifyMutation.mutate(
      { workId, code: code.trim() },
      {
        onSuccess: (res) => {
          if (res?.isSuccess) {
            router.push(`/reports/${workId}?verified=1`);
          } else {
            setErrorMsg(res?.message || "코드가 일치하지 않습니다.");
          }
        },
        onError: (err: unknown) => {
          const message =
            typeof err === "object" && err !== null &&
            // @ts-expect-error - runtime safe optional access
            (err.response?.data?.message as string | undefined);
          setErrorMsg(message || "코드가 일치하지 않습니다.");
        },
      }
    );
  };

  return (
    <AuthGuard redirectTo={`/reports/${workId}/verify-code`}>
      <div className="min-h-screen ">
        <Header />
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-gray-100">
          <div className="w-[424px] rounded-[20px] bg-white p-[42px] pt-[52px]">
            <div className="text-gray-900 font-T01-B mb-6">리포트 코드 인증</div>

            <div className="mb-6">
              <TextInput
                placeholder="코드를 입력하세요"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full"
                error={!!errorMsg}
              />
              {errorMsg && (
                <div className="mt-2 text-[12px] font-B02-R text-orange-point">
                  {errorMsg}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3">
              <GrayButton
                label="취소"
                className="w-[88px]"
                onClick={handleCancel}
              />
              <ButtonBase label={verifyMutation.isPending ? "인증중" : "인증하기"} size="M" onClick={handleVerify} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </AuthGuard>
  );
}

export default VerifyCodePage;
