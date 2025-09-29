declare module "*.json" {
  const value: unknown;
  export default value;
}

// GA4 gtag typings
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }

  type Gtag = {
    (command: "js", config: Date): void;
    (command: "config", measurementId: string, config?: Record<string, unknown>): void;
    (command: "event", eventName: string, params?: Record<string, unknown>): void;
  };
}

export {};
