// Lightweight GA4 event helper
// - Hides window existence checks
// - No-ops outside browser or when gtag is not available

export type GAEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export const GA_EVENT = {
  ClickHeader: "click_header",
  ClickApply: "click_apply",
  ClickShare: "click_share",
  SubmitReport: "submit_report",
  Login: "login",
  SignUp: "sign_up",
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
