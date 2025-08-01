"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";
import { useAuthQuery } from "@/hooks/queries/useAuth";
import ProfileDropdown from "./ProfileDropdown";
import { logout } from "@/app/_apis/auth";
import { useSubmitStore } from "@/store/useSubmitStore";
import ConfirmModal from "@/components/common/ConfirmModal";

interface HeaderProps {
  theme?: "dark" | "light";
}

const NAV_ITEMS = [
  { id: "home", label: "홈", href: "/home" },
  { id: "application", label: "신청하기", href: "/application" },
  { id: "report", label: "내 리포트", href: "/report" },
];

function Header({ theme }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const { data: authData, isLoading } = useAuthQuery();
  const isLoggedIn = authData?.isLoggedIn || false;
  const profile = authData?.profile || null;

  const { isWriting, setIsWriting } = useSubmitStore();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const isHome = pathname === "/home";
  const appliedTheme = theme ?? (isHome ? "dark" : "light");
  const bgClass = appliedTheme === "dark" ? "bg-transparent" : "bg-white";

  const getItemClassName = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href);
    return cn(
      "px-[15px] py-[10px] font-B02-M cursor-pointer",
      appliedTheme === "dark"
        ? "text-gray-200 hover:text-white"
        : "text-gray-500 hover:text-gray-900",
      isActive && "font-B02-SB text-blue-main"
    );
  };

  const handleProtectedNavigation = (href: string) => {
    const isInApplicationDetailPage =
      pathname.startsWith("/application/DCA") ||
      pathname.startsWith("/application/YCC");

    const isMovingToAnotherPage = pathname !== href;

    if (isInApplicationDetailPage && isWriting && isMovingToAnotherPage) {
      setShowConfirm(true);
    } else {
      setMenuOpen(false);
      router.push(href);
    }
  };

  const handleConfirmLeave = () => {
    setIsWriting(false);
    setShowConfirm(false);
  };

  const handleCancelLeave = () => {
    setShowConfirm(false);
    window.location.reload();
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
    localStorage.clear();
    router.push("/home");
  };

  return (
    <>
      <ConfirmModal
        isOpen={showConfirm}
        onClose={handleCancelLeave}
        onConfirm={handleConfirmLeave}
        title="신청을 취소하시겠습니까?"
        description="현재 입력한 정보는 삭제됩니다."
        cancelText="취소"
        confirmText="계속 작성하기"
      />

      <header
        className={cn(
          "w-full flex justify-between items-center px-4 py-3 sm:px-[106px] sm:py-5",
          bgClass
        )}
      >
        <div className="flex items-center">
          <div
            className="py-[6px] sm:py-[11px] cursor-pointer"
            onClick={() => handleProtectedNavigation("/")}
          >
            <Logo theme={appliedTheme} />
          </div>

          <nav
            className="hidden sm:flex gap-3 sm:gap-5 sm:ml-[61px] ml-3"
            role="navigation"
            aria-label="메인 네비게이션"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProtectedNavigation(item.href)}
                className={getItemClassName(item.href)}
              >
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {!isLoading && (
          <>
            {isLoggedIn ? (
              <div className="relative hidden sm:inline-block mr-[14px]">
                <img
                  src={profile?.profileImage || "/default-profile.png"}
                  alt="프로필"
                  className="w-[38px] h-[38px] rounded-full object-cover cursor-pointer"
                  onClick={() => setDropdownOpen((v) => !v)}
                />
                {dropdownOpen && (
                  <ProfileDropdown
                    dropdownRef={dropdownRef}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            ) : (
              <div
                className={cn(
                  "px-[15px] py-[10px] font-B02-SB hidden sm:inline-block cursor-pointer",
                  appliedTheme === "dark"
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                )}
                onClick={() => handleProtectedNavigation("/login")}
              >
                로그인
              </div>
            )}
          </>
        )}

        <button
          className="sm:hidden flex flex-col justify-center items-center w-9 h-9"
          aria-label="모바일 메뉴 열기"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-800 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-800" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <Logo theme="light" />
            <button
              className="w-8 h-8 flex items-center justify-center"
              aria-label="메뉴 닫기"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-3 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProtectedNavigation(item.href)}
                className={cn(
                  "text-lg font-B02-M cursor-pointer py-2",
                  pathname === item.href && "font-B02-SB text-blue-main"
                )}
              >
                {item.label}
              </div>
            ))}

            {!isLoading && (
              <>
                {isLoggedIn ? (
                  <>
                    <div 
                      className="flex items-center gap-3 mt-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      onClick={() => {
                        handleProtectedNavigation("/mypage");
                        setMenuOpen(false);
                      }}
                    >
                      <img
                        src={profile?.profileImage || "/default-profile.png"}
                        alt="프로필"
                        className="w-9 h-9 rounded-full object-cover border"
                      />
                      <span className="text-gray-800 font-B02-M">
                        {profile?.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="mt-4 text-left text-gray-500 hover:text-red-500 font-B02-M"
                    >
                      로그아웃
                    </button>
                  </>
                ) : (
                  <div
                    className="text-gray-800 font-B02-M mt-4 cursor-pointer"
                    onClick={() => {
                      handleProtectedNavigation("/login");
                      setMenuOpen(false);
                    }}
                  >
                    로그인
                  </div>
                )}
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
