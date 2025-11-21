import type React from "react";
import type { Metadata } from "next";
import {
  Playfair_Display,
  IBM_Plex_Mono,
  Allura,
  Great_Vibes,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});
const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title:
    "Smart India AI - India's Premier AI-Powered Search Engine | smartindia.ai",
  description:
    "Smart India AI brings artificial intelligence and people together. Search the web with AI-powered tools across Google, Bing, DuckDuckGo and more. India's leading AI search platform for intelligent web exploration.",
  keywords:
    "Smart India AI, AI search engine India, artificial intelligence India, search engine, AI tools India, smart search, India AI, smartindia.ai, AI powered search, intelligent search India, machine learning search",
  authors: [{ name: "Smart India AI Team" }],
  creator: "Smart India AI",
  publisher: "Smart India AI",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://smartindia.ai",
  },
  verification: {
    google: "verification-code-here", // Add Google Search Console verification
  },
  openGraph: {
    title: "Smart India AI - India's Premier AI-Powered Search Engine",
    description:
      "Experience the future of search with Smart India AI. Advanced AI-powered search across multiple engines including Google, Bing, DuckDuckGo, Brave, Yandex, and Ecosia.",
    url: "https://smartindia.ai",
    siteName: "Smart India AI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://smartindia.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart India AI - AI-Powered Search Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart India AI - India's Premier AI-Powered Search Engine",
    description:
      "Experience the future of search with Smart India AI. Advanced AI-powered search across multiple engines.",
    creator: "@smartindiaai",
    images: ["https://smartindia.ai/twitter-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${playfairDisplay.variable} ${ibmPlexMono.variable} ${allura.variable} ${greatVibes.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://smartindia.ai/#organization",
                  name: "Smart India AI",
                  url: "https://smartindia.ai",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://smartindia.ai/smartindia-logo.svg",
                  },
                  sameAs: [
                    "https://twitter.com/smartindiaai",
                    "https://linkedin.com/company/smartindiaai",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smartindia.ai/#website",
                  url: "https://smartindia.ai",
                  name: "Smart India AI",
                  description: "India's Premier AI-Powered Search Engine",
                  publisher: {
                    "@id": "https://smartindia.ai/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target:
                        "https://smartindia.ai/search-results?q={search_term_string}&engine=Google",
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-IN",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://smartindia.ai/#webpage",
                  url: "https://smartindia.ai",
                  name: "Smart India AI - India's Premier AI-Powered Search Engine",
                  isPartOf: {
                    "@id": "https://smartindia.ai/#website",
                  },
                  about: {
                    "@id": "https://smartindia.ai/#organization",
                  },
                  description:
                    "Search the web with AI-powered tools across Google, Bing, DuckDuckGo, Brave, Yandex, and Ecosia. India's leading AI search platform.",
                  inLanguage: "en-IN",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
