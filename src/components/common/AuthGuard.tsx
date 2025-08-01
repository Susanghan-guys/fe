"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/queries/useAuth";
import { LoginModal } from "./LoginModal";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AuthGuard({ children, fallback }: AuthGuardProps) {
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  }, [isLoggedIn]);

  const handleCloseModal = () => {
    setShowLoginModal(false);
    router.push("/");
  };

  // 로그인되지 않은 경우 fallback 또는 로딩 표시
  if (!isLoggedIn) {
    return (
      <>
        {fallback || (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-gray-600">로그인이 필요합니다...</p>
            </div>
          </div>
        )}
        <LoginModal isOpen={showLoginModal} onClose={handleCloseModal} />
      </>
    );
  }

  // 로그인된 경우 children 렌더링
  return <>{children}</>;
}
