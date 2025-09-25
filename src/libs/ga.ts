// Lightweight GA4 event helper
// - Hides window existence checks
// - No-ops outside browser or when gtag is not available

export type GAEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export const GA_EVENT = {
  ClickApply: "click_apply",
  ClickMyReport: "click_my_report",
  ClickDcaApply: "click_dca_apply",
  ClickYccApply: "click_ycc_apply",
  ViewReviews: "view_reviews",
  ClickProfile: "click_profile",
  ClickShare: "click_share",
  SubmitReport: "submit_report",
  Login: "login",
  SignUp: "sign_up",
  LoginKakao: "login_kakao",
  LoginNaver: "login_naver",
  LoginGoogle: "login_google",
  ViewProfileInfo: "view_profile_info",
  NameChange: "name_change",
  ClickInquiry: "click_inquiry",
  ViewPrivacyPolicy: "view_privacy_policy",
  ViewTermsPolicy: "view_terms_policy",
  ClickLogout: "click_logout",
  ClickWithdraw: "click_withdraw",
  SelectWithdrawReason: "select_withdraw_reason",
} as const;

export type GAEventName = (typeof GA_EVENT)[keyof typeof GA_EVENT] | string;

export function trackGAEvent(
  eventName: GAEventName,
  params?: GAEventParams
): void {
  if (typeof window === "undefined") return;
  const { gtag } = window;
  if (!gtag) return;
  gtag("event", eventName, params ?? {});
}
