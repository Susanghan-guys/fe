import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DivisionLine from "./DivisionLine";
import { SettingsLinkItem } from "./SettingItem";
import UserProfileContainer from "./UserProfileContainer";
import LogoutIcon from "../../../../public/icons/LogoutIcon";
import GrayIconChevronRight from "../../../../public/icons/GrayIconChevronRight";
import CornerIcon from "../../../../public/icons/CornerIcon";
import { useLogout } from "@/hooks/queries/useAuth";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackGAEvent, GA_EVENT } from "@/libs/ga";

function UserProfilePanel() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const logoutMutation = useLogout();

  const labelFontClass = isMobile ? "font-B02-M" : "font-B01-M";

  const handleInquiry = () => {
    trackGAEvent(GA_EVENT.ClickInquiry, {
      screen: "PF"
    });
    window.open("https://forms.gle/cSKrGxDtF3aYAnv56", "_blank");
  };

  const handlePrivacyPolicy = () => {
    trackGAEvent(GA_EVENT.ViewPrivacyPolicy, {
      screen: "PF"
    });
    window.open("https://soosanghanprivacy.notion.site/?pvs=143", "_blank");
  };

  const handleTermsOfService = () => {
    trackGAEvent(GA_EVENT.ViewTermsPolicy, {
      screen: "PF"
    });
    window.open(
      "https://soosanghantermsofuse.notion.site/?source=copy_link",
      "_blank"
    );
  };

  const handleLogout = async () => {
    try {
      trackGAEvent(GA_EVENT.ClickLogout, {
        prev_page_url: pathname,
        screen: "PF"
      });
      await logoutMutation.mutateAsync();
      // 로그아웃 성공 시 홈으로 이동
      window.location.href = "/home";
    } catch (error) {
      console.error("로그아웃 처리 중 오류 발생:", error);
      // 에러 발생 시에도 홈으로 이동 (이미 localStorage는 정리됨)
      window.location.href = "/home";
    }
  };

  return (
    <div
      className={`bg-white rounded-[20px] ${
        isMobile
          ? "w-full px-[20px] py-[50px]"
          : " w-[571px] px-[42px] py-[54px]"
      }`}
    >
      <UserProfileContainer />
      <DivisionLine marginTop={28} marginBottom={24} />
      <SettingsLinkItem
        label={
          <div className={`${labelFontClass} text-gray-950 pl-1`}>문의사항</div>
        }
        rightContent={<CornerIcon />}
        onClick={handleInquiry}
      />
      <SettingsLinkItem
        label={
          <div className={`${labelFontClass} text-gray-950 pl-1`}>
            개인정보 처리방침
          </div>
        }
        rightContent={<CornerIcon />}
        onClick={handlePrivacyPolicy}
      />
      <SettingsLinkItem
        label={
          <div className={`${labelFontClass} text-gray-950 pl-1`}>
            서비스 이용약관
          </div>
        }
        rightContent={<CornerIcon />}
        onClick={handleTermsOfService}
      />
      <SettingsLinkItem
        label={
          <div className={`${labelFontClass} text-gray-950 pl-1`}>
            버전 정보
          </div>
        }
        rightContent={<div className={`font-B02-R text-gray-300`}>v 0.0.1</div>}
        clickable={false}
      />
      <DivisionLine marginTop={20} marginBottom={20} />
      <SettingsLinkItem
        label={
          <div className={`${labelFontClass} text-gray-950 pl-1`}>로그아웃</div>
        }
        rightContent={<LogoutIcon />}
        onClick={handleLogout}
      />
      <Link 
        href="/mypage/withdraw" 
        className="cursor-pointer"
        onClick={() => {
          trackGAEvent(GA_EVENT.ClickWithdraw, {
            screen: "PF"
          });
        }}
      >
        <SettingsLinkItem
          label={
            <div className={`${labelFontClass} text-gray-500 pl-1`}>
              서비스 탈퇴하기
            </div>
          }
          rightContent={<GrayIconChevronRight />}
        />
      </Link>
    </div>
  );
}

export default UserProfilePanel;
