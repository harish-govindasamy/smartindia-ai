import Header from "@/components/header";
import SearchSection from "@/components/search-section";
import Footer from "@/components/footer";

export const metadata = {
  title:
    "Smart India AI - India's Premier AI-Powered Search Engine | smartindia.ai",
  description:
    "Smart India AI brings artificial intelligence and people together. Search the web with AI-powered tools across Google, Bing, DuckDuckGo, Brave, Yandex, and Ecosia. Experience intelligent search for India.",
  keywords:
    "Smart India AI, AI search engine India, artificial intelligence search, smartindia.ai, multi-engine search, intelligent web search India",
  alternates: {
    canonical: "https://smartindia.ai",
  },
  openGraph: {
    title: "Smart India AI - India's Premier AI-Powered Search Engine",
    description:
      "Experience the future of search with Smart India AI. Advanced AI-powered search across multiple engines.",
    url: "https://smartindia.ai",
    type: "website",
    images: [
      {
        url: "https://smartindia.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Smart India AI Homepage",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="mobile-full-height prevent-overscroll flex flex-col bg-linear-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-2 sm:px-3 md:px-4 py-4 sm:py-6 pt-24 sm:pt-28 md:pt-32">
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}
