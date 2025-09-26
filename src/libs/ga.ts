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
  ApplySelectDca: "apply_select_dca",
  ApplySelectYcc: "apply_select_ycc",
  ReportStep1Next: "report_step1_next",
  ReportStep1Back: "report_step1_back",
  ReportStep2Next: "report_step2_next",
  ReportStep2Back: "report_step2_back",
  ReportStep3Next: "report_step3_next",
  ReportStep3Back: "report_step3_back",
  InputTitleDca: "input_title_dca",
  SelectCategoryDca: "select_category_dca",
  SelectBrandDca: "select_brand_dca",
  InputApplycodeDca: "input_applycode_dca",
  EditApplicantnameDca: "edit_applicantname_dca",
  EditApplicantemailDca: "edit_applicantemail_dca",
  AddTeammateDca: "add_teammate_dca",
  InputTeammatenameDca: "input_teammatename_dca",
  InputTeammateemailDca: "input_teammateemail_dca",
  SubmitBriefboardDca: "submit_briefboard_dca",
  InputDocDca: "input_doc_dca",
  InputVideolinkDca: "input_videolink_dca",
  ClickSubmitDca: "click_submit_dca",
  InputTitleYcc: "input_title_ycc",
  EditApplicantnameYcc: "edit_applicantname_ycc",
  EditApplicantemailYcc: "edit_applicantemail_ycc",
  AddTeammateYcc: "add_teammate_ycc",
  InputTeammatenameYcc: "input_teammatename_ycc",
  InputTeammateemailYcc: "input_teammateemail_ycc",
  InputDocYcc: "input_doc_ycc",
  ClickSubmitYcc: "click_submit_ycc",
  ChangeTab: "change_tab",
  DeleteReport: "delete_report",
  ClickFeedback: "click_feedback",
  SelectRating: "select_rating",
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
