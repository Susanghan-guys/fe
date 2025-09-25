"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/queries/useAuth";
import { LoginModal } from "./LoginModal";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string; // 로그인 후 리다이렉트할 URL
}

export function AuthGuard({ children, fallback, redirectTo }: AuthGuardProps) {
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    }
  }, [isLoggedIn]);

  const handleCloseModal = () => {
    setShowLoginModal(false);
    // redirectTo가 있으면 해당 URL로, 없으면 홈으로
    const targetUrl = redirectTo || "/";
    router.push(targetUrl);
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
        <LoginModal isOpen={showLoginModal} onClose={handleCloseModal} redirectTo={redirectTo} />
      </>
    );
  }

  // 로그인된 경우 children 렌더링
  return <>{children}</>;
}
