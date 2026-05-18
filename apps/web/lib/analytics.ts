/**
 * Type-safe, production-ready lightweight analytics utility.
 * Supports standard page tracking, custom user interactions, and performance benchmarks.
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface CustomWindow extends Window {
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, unknown>
  ) => void;
}

const IS_PROD = process.env.NODE_ENV === "production";

const getGtag = () => {
  if (typeof window !== "undefined") {
    return (window as unknown as CustomWindow).gtag;
  }
  return undefined;
};

export const Analytics = {
  /**
   * Tracks a pageview URL in production systems.
   */
  pageview(url: string) {
    if (!IS_PROD) {
      console.log(`[Telemetry] Pageview tracked: ${url}`);
      return;
    }

    const gtag = getGtag();
    if (gtag) {
      gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_path: url,
      });
    }
  },

  /**
   * Tracks a custom user micro-interaction (e.g. spec button clicks, code copies).
   */
  event({ action, category, label, value }: AnalyticsEvent) {
    if (!IS_PROD) {
      console.log(`[Telemetry] Micro-interaction tracked:`, { action, category, label, value });
      return;
    }

    const gtag = getGtag();
    if (gtag) {
      gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },
};
