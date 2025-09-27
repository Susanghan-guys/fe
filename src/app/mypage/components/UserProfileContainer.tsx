"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserMe } from "@/hooks/queries/useUser";
import UserProfilePresentor from "./UserProfilePresentor";
import UserProfileSkeleton from "@/components/common/UserProfileSkeleton";
import { GA_EVENT, trackGAEvent } from "@/libs/ga";

interface UserProfileContainerProps {
  className?: string;
}

// 에러 타입 정의
interface ApiError {
  code?: string;
  response?: {
    status?: number;
  };
}

// 실제 데이터를 가져오는 컴포넌트
function UserProfileData({ className }: { className: string }) {
  const router = useRouter();
  const { data: userData, error, isLoading } = useUserMe();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // 에러가 발생했을 때 토큰 확인 및 리디렉션
    if (error) {
      console.log("❌ UserProfileData 에러 발생:", error);

      // 네트워크 에러이거나 401 에러인 경우 토큰 확인
      const apiError = error as ApiError;
      if (
        apiError.code === "ERR_NETWORK" ||
        apiError.response?.status === 401
      ) {
        if (typeof window !== "undefined") {
          const accessToken = localStorage.getItem("accessToken");
          const refreshToken = localStorage.getItem("refreshToken");

          if (!accessToken || !refreshToken) {
            console.log("🔐 토큰이 없어서 로그인 페이지로 리디렉션");
            localStorage.clear();
            window.location.replace("/login");
          }
        }
      }
    }
  }, [error]);

  const handleProfileClick = () => {
    trackGAEvent(GA_EVENT.NameChange, {
      screen: "PF",
    });
    router.push("/mypage/edit");
  };

  if (!mounted || isLoading) {
    return <UserProfileSkeleton className={className} />;
  }

  // 데이터가 있을 때
  if (userData?.result) {
    return (
      <UserProfilePresentor
        name={userData.result.name}
        email={userData.result.email}
        imageSrc={userData.result.profileImage}
        onClick={handleProfileClick}
        className={className}
      />
    );
  }

  // 기본값 (데이터가 없을 때)
  return (
    <UserProfilePresentor
      name="사용자"
      email="사용자 정보 없음"
      imageSrc="/profile.png"
      onClick={handleProfileClick}
      className={className}
    />
  );
}

function UserProfileContainer({ className = "" }: UserProfileContainerProps) {
  return (
    <Suspense fallback={<UserProfileSkeleton className={className} />}>
      <UserProfileData className={className} />
    </Suspense>
  );
}

export default UserProfileContainer;
