"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Google Analytics tracking events for Smart India AI
export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track search queries
export const trackSearch = (query: string, engine: string) => {
  trackEvent("search", {
    search_term: query,
    search_engine: engine,
    event_category: "search",
    event_label: `${engine}: ${query}`,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  trackEvent("page_view", {
    page_location: url,
    page_title: document.title,
  });
};

// Track engagement
export const trackEngagement = (action: string, element?: string) => {
  trackEvent("engagement", {
    engagement_action: action,
    element_id: element,
  });
};

// Analytics component for automatic page view tracking
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = window.location.href;
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

// Type for gtag function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
