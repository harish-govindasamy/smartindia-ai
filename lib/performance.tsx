"use client";

import { useEffect } from "react";

// Performance monitoring for Smart India AI
export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined") {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
            // Track to analytics if needed
          }
        }
      });

      try {
        observer.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch (e) {
        // Browser doesn't support this metric
      }

      // First Input Delay (FID) and Cumulative Layout Shift (CLS)
      // These would be tracked similarly in a production app

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return null;
}

// Image optimization component
export function OptimizedImage({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...props}
      style={{
        ...props.style,
        contentVisibility: "auto",
      }}
    />
  );
}

// Preload critical resources
export function ResourcePreloader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Preload critical fonts
      const fontLinks = [
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap",
      ];

      fontLinks.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = href;
        document.head.appendChild(link);
      });

      // Preconnect to external domains
      const preconnectDomains = [
        "https://www.google.com",
        "https://www.bing.com",
        "https://duckduckgo.com",
        "https://search.brave.com",
        "https://www.yandex.com",
        "https://www.ecosia.org",
      ];

      preconnectDomains.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, []);

  return null;
}
