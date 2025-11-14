"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()
  const [engine, setEngine] = useState("Google")
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Navigate to search results page with query params
    router.push(`/search-results?q=${encodeURIComponent(query)}&engine=${engine}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e as any)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
      {/* Hero Section */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6">
        <div className="relative flex justify-center">
            {/* Ashoka Chakra Background - Thick Blue with Rotation */}
            <svg
              className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-30 pointer-events-none -z-10 animate-spin"
              style={{ animationDuration: '20s', animationDirection: 'normal' }}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Outer Circle - Thick Blue */}
              <circle cx="100" cy="100" r="95" stroke="#002395" strokeWidth="3.5" />
              
              {/* Inner Circle Center - Blue */}
              <circle cx="100" cy="100" r="10" fill="#002395" />
              
              {/* 24 Spokes - Thick Blue */}
              {[...Array(24)].map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x1 = 100 + 10 * Math.cos(rad);
                const y1 = 100 + 10 * Math.sin(rad);
                const x2 = 100 + 85 * Math.cos(rad);
                const y2 = 100 + 85 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#002395"
                    strokeWidth="2.5"
                  />
                );
              })}
            </svg>

            {/* Title */}
            <h1 className="hero-title mb-4 sm:mb-6 relative z-10">smartindia.ai</h1>
          </div>
          <p className="hero-tagline mx-auto">
            Brings AI and People together — Explore the world with AI
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-4 sm:mb-6 md:mb-8">
          <div className="luxury-search-container">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex-1 relative min-w-0">
                <input
                  type="text"
                  placeholder="Search the web..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="luxury-input w-full text-sm sm:text-base h-12 sm:h-14"
                  aria-label="Search query"
                />
              </div>

              <div className="relative min-w-[120px] sm:min-w-[150px]">
                <select
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  className="luxury-input w-full appearance-none cursor-pointer pr-8 sm:pr-10 text-sm sm:text-base h-12 sm:h-14"
                  aria-label="Search engine"
                >
                  {SEARCH_ENGINES.map((e) => (
                    <option key={e.name} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none shrink-0" />
              </div>

              <button
                type="submit"
                className="luxury-button text-sm sm:text-base px-4 sm:px-6 py-3 h-12 sm:h-14 whitespace-nowrap"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span className="hidden sm:inline">Search</span>
                <span className="sm:hidden">Go</span>
              </button>
            </div>
          </div>

          <p className="tip-text text-center px-2">
            Tip: Press Enter to search. Choose from 6 search engines including Google, Bing, DuckDuckGo, Brave, Yandex,
            and Ecosia.
          </p>
        </form>
      </div>
    )
  }
