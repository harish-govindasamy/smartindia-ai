"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect } from "react"

const SEARCH_ENGINES = [
  { name: "Google", url: "https://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
  { name: "Brave", url: "https://search.brave.com/search?q=" },
  { name: "Yandex", url: "https://www.yandex.com/search?text=" },
  { name: "Ecosia", url: "https://www.ecosia.org/search?q=" },
]

export default function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = searchParams.get("q") || ""
  const engine = searchParams.get("engine") || "Google"

  const selectedEngine = SEARCH_ENGINES.find((e) => e.name === engine)
  const searchUrl = selectedEngine ? selectedEngine.url + encodeURIComponent(query) : ""

  const handleEngineChange = (newEngine: string) => {
    router.push(`/search-results?q=${encodeURIComponent(query)}&engine=${newEngine}`)
  }

  // Auto-redirect to new tab for all engines
  useEffect(() => {
    if (searchUrl) {
      // Show page for 1.5 seconds then redirect to new tab
      const timer = setTimeout(() => {
        window.open(searchUrl, "_blank")
        router.push("/")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [searchUrl, router])

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-2 sm:px-3 md:px-4 py-4 sm:py-6 pt-24 sm:pt-28 md:pt-32">
        {/* Back to Home & Title */}
        <div className="w-full max-w-6xl mx-auto mb-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary hover:scale-105 transition-all duration-300 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>

          {/* Search Info */}
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
              Results from <span className="font-semibold text-primary">{engine}</span>
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {query || "Search Results"}
            </h1>

            {/* Engine Selector */}
            <div className="flex flex-wrap gap-2">
              {SEARCH_ENGINES.map((e) => (
                <button
                  key={e.name}
                  onClick={() => handleEngineChange(e.name)}
                  className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg font-medium transition-all duration-300 ${
                    e.name === engine
                      ? "bg-primary text-[#0f0f0f] shadow-lg"
                      : "bg-[#1a1a1a] border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {e.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Container */}
        <div className="w-full max-w-6xl mx-auto flex-1">
          {/* Redirect message for all engines */}
          <div className="luxury-card p-6 sm:p-8 text-center bg-linear-to-br from-[#1a1a1a] to-[#252525]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Opening {engine} Results
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Redirecting to {engine} search results in a new tab.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Opening in a new tab... (closing this page in 1.5 seconds)
                </p>
              </div>
              <a
                href={searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-[#0f0f0f] bg-primary hover:bg-secondary hover:shadow-lg rounded-lg transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Results Now</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
