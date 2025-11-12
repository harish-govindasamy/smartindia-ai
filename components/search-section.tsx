"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

const SEARCH_ENGINES = [
  { name: "Google", url: "https://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
  { name: "Brave", url: "https://search.brave.com/search?q=" },
  { name: "Yandex", url: "https://www.yandex.com/search?text=" },
  { name: "Ecosia", url: "https://www.ecosia.org/search?q=" },
]

export default function SearchSection() {
  const [engine, setEngine] = useState("Google")
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const selectedEngine = SEARCH_ENGINES.find((e) => e.name === engine)
    if (selectedEngine) {
      const searchUrl = selectedEngine.url + encodeURIComponent(query)
      window.open(searchUrl, "_blank")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e as any)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-12 mt-8 sm:mt-12">
        <div className="indian-flag-title mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl drop-shadow-2xl leading-tight">SmartIndia.Ai</h1>
        </div>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-mono font-light tracking-wide px-2">
          Brings AI and People together — Explore the world with AI
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex-1 relative min-w-0">
            <input
              type="text"
              placeholder="Search the web..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="luxury-input w-full px-3 sm:px-4 text-sm sm:text-base font-body h-12 sm:h-14 flex items-center"
            />
          </div>

          <div className="relative min-w-[120px] sm:min-w-[150px]">
            <select
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
              className="luxury-input w-full px-3 sm:px-4 appearance-none cursor-pointer pr-8 sm:pr-10 font-body text-sm sm:text-base h-12 sm:h-14"
            >
              {SEARCH_ENGINES.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none flex-shrink-0" />
          </div>

          <button
            type="submit"
            className="luxury-button flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base px-4 sm:px-6 py-3 h-12 sm:h-14"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="hidden sm:inline">Search</span>
            <span className="sm:hidden">Go</span>
          </button>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground font-mono px-2">
          Tip: Press Enter to search. Choose from 6 search engines including Google, Bing, DuckDuckGo, Brave, Yandex,
          and Ecosia.
        </p>
      </form>
    </div>
  )
}
