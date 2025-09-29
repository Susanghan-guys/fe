import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

interface ProfileDropdownProps {
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  dropdownRef,
  onLogout,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleProfileClick = () => {
    trackGAEvent(GA_EVENT.ViewProfileInfo, {
      prev_page_url: pathname,
      screen: "PF"
    });
    router.push("/mypage");
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-[39px] w-[172px] h-[98px] bg-white rounded-[16px] z-50"
    >
      <button
        className="h-[49px] w-full text-left px-4 font-C01-R rounded-t-[16px] hover:font-B03-M hover:bg-gray-100 cursor-pointer"
        onClick={handleProfileClick}
      >
        프로필 정보
      </button>
      <button
        className="h-[49px] w-full text-left px-4 font-C01-R rounded-b-[16px] hover:font-B03-M hover:bg-gray-100 cursor-pointer"
        onClick={onLogout}
      >
        로그아웃
      </button>
    </div>
  );
};

export default ProfileDropdown;
