"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect } from "react"

const SEARCH_ENGINES = [
  { name: "Google", url: "https://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=", iframeSupport: true },
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
  const supportsIframe = selectedEngine?.iframeSupport

  const handleEngineChange = (newEngine: string) => {
    router.push(`/search-results?q=${encodeURIComponent(query)}&engine=${newEngine}`)
  }

  // Auto-redirect for engines that don't support iframe
  useEffect(() => {
    if (!supportsIframe && searchUrl) {
      // Show page for 1.5 seconds then redirect
      const timer = setTimeout(() => {
        window.open(searchUrl, "_blank")
        router.push("/")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [supportsIframe, searchUrl, router])

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-2 sm:px-3 md:px-4 py-4 sm:py-6 pt-24 sm:pt-28 md:pt-32">
        {/* Back to Home & Title */}
        <div className="w-full max-w-6xl mx-auto mb-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-300 mb-4"
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
          {supportsIframe ? (
            // Iframe view for Bing
            <div className="luxury-card p-0 sm:p-0 h-[calc(100vh-300px)] sm:h-[calc(100vh-280px)] md:h-[calc(100vh-320px)] overflow-hidden rounded-2xl">
              <div className="h-full flex flex-col">
                {/* Header with Open Link */}
                <div className="sticky top-0 flex items-center justify-between p-4 sm:p-6 border-b border-border bg-gradient-to-r from-[#1a1a1a] to-[#252525] z-10">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground font-medium">
                      Searching in {engine}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {searchUrl}
                    </p>
                  </div>
                  <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-primary hover:bg-accent rounded-lg transition-all duration-300 whitespace-nowrap ml-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open</span>
                  </a>
                </div>

                {/* Iframe - Full height */}
                <div className="flex-1 overflow-hidden">
                  <iframe
                    src={searchUrl}
                    title={`${engine} Search Results for ${query}`}
                    className="w-full h-full border-none"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation-by-user-activation"
                  />
                </div>
              </div>
            </div>
          ) : (
            // Redirect message for other engines
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
                    {engine} doesn't allow embedding search results for security reasons.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Opening in a new tab... (closing this page in 1.5 seconds)
                  </p>
                </div>
                <a
                  href={searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-primary hover:bg-accent rounded-lg transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Results Now</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
