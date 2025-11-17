"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  Search,
  Loader2,
  Command,
  Clock,
  TrendingUp,
} from "lucide-react";

const SEARCH_ENGINES = [
  { name: "Google", url: "https://www.google.com/search?q=", color: "#4285F4" },
  { name: "Bing", url: "https://www.bing.com/search?q=", color: "#0078D4" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", color: "#DE5833" },
  {
    name: "Brave",
    url: "https://search.brave.com/search?q=",
    color: "#FF6B35",
  },
  {
    name: "Yandex",
    url: "https://www.yandex.com/search?text=",
    color: "#FF0000",
  },
  { name: "Ecosia", url: "https://www.ecosia.org/search?q=", color: "#4D8C3B" },
];

// Popular search suggestions for India
const SEARCH_SUGGESTIONS = [
  "AI tools India",
  "artificial intelligence news",
  "machine learning courses",
  "India startup ecosystem",
  "digital India initiatives",
  "tech jobs India",
  "Python programming",
  "data science career",
];

export default function SearchSection() {
  const router = useRouter();
  const [engine, setEngine] = useState("Google");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchError, setSearchError] = useState("");

  // Load recent searches from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("smartindia-recent-searches");
      if (saved) {
        setRecentSearches(JSON.parse(saved).slice(0, 5));
      }
    } catch (error) {
      console.log("No recent searches found");
    }
  }, []);

  // Keyboard shortcut for focus (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector(
          'input[aria-label="Search query"]'
        ) as HTMLInputElement;
        searchInput?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 1) {
      const filtered = SEARCH_SUGGESTIONS.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 4));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  }, [query]);

  const saveSearch = useCallback(
    (searchQuery: string) => {
      try {
        const updated = [
          searchQuery,
          ...recentSearches.filter((s) => s !== searchQuery),
        ].slice(0, 5);
        setRecentSearches(updated);
        localStorage.setItem(
          "smartindia-recent-searches",
          JSON.stringify(updated)
        );
      } catch (error) {
        console.log("Could not save search history");
      }
    },
    [recentSearches]
  );

  const handleSearch = async (e: React.FormEvent, searchQuery?: string) => {
    e.preventDefault();
    const finalQuery = searchQuery || query;

    if (!finalQuery.trim()) {
      setSearchError("Please enter a search query");
      return;
    }

    setSearchError("");
    setIsLoading(true);
    setShowSuggestions(false);

    // Save to recent searches
    saveSearch(finalQuery);

    // Simulate network delay for better UX feedback
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      router.push(
        `/search-results?q=${encodeURIComponent(finalQuery)}&engine=${engine}`
      );
    } catch (error) {
      setSearchError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    handleSearch({ preventDefault: () => {} } as React.FormEvent, suggestion);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
      {/* Hero Section */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6">
        <div className="relative flex justify-center">
          {/* Ashoka Chakra Background - Enhanced Visibility */}
          <svg
            className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-60 pointer-events-none -z-10 animate-spin"
            style={{
              animationDuration: "20s",
              animationDirection: "normal",
              filter: "drop-shadow(0 0 20px rgba(0, 85, 255, 0.6))",
            }}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Outer Circle - Bright Blue */}
            <circle cx="100" cy="100" r="95" stroke="#0055ff" strokeWidth="4" />

            {/* Inner Circle Center - Bright Blue */}
            <circle cx="100" cy="100" r="10" fill="#0055ff" />

            {/* 24 Spokes - Bright Blue */}
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
                  stroke="#0055ff"
                  strokeWidth="3"
                />
              );
            })}
          </svg>

          {/* Title */}
          <h1 className="hero-title mb-4 sm:mb-6 relative z-10">
            smartindia.ai
          </h1>
        </div>
        <p className="hero-tagline mx-auto">
          Brings AI and People together — Explore the world with AI
        </p>

        {/* Keyboard shortcut hint */}
        <div className="flex items-center justify-center gap-2 mt-2 text-xs text-muted-foreground">
          <Command className="w-3 h-3" />
          <span>Press Ctrl+K to focus search</span>
        </div>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-4 sm:mb-6 md:mb-8 relative">
        <div className="luxury-search-container">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="flex-1 relative min-w-0">
              <input
                type="text"
                placeholder="Search the web..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length > 1 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                className="luxury-input w-full text-sm sm:text-base h-12 sm:h-14"
                aria-label="Search query"
                disabled={isLoading}
              />

              {/* Search Suggestions Dropdown */}
              {showSuggestions &&
                (filteredSuggestions.length > 0 ||
                  recentSearches.length > 0) && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-[#1a1a1a] border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && query.length <= 1 && (
                      <div className="p-3 border-b border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Clock className="w-3 h-3" />
                          <span>Recent searches</span>
                        </div>
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleSuggestionClick(search)}
                            className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-[#252525] rounded transition-colors"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Suggestions */}
                    {filteredSuggestions.length > 0 && (
                      <div className="p-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <TrendingUp className="w-3 h-3" />
                          <span>Suggestions</span>
                        </div>
                        {filteredSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-[#252525] rounded transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
            </div>

            <div className="relative min-w-[120px] sm:min-w-[150px]">
              <select
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
                className="luxury-input w-full appearance-none cursor-pointer pr-8 sm:pr-10 text-sm sm:text-base h-12 sm:h-14 bg-[#1a1a1a] border border-border text-foreground"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#e8e8e8",
                  borderColor: "rgba(249, 123, 22, 0.15)",
                }}
                aria-label="Search engine"
                disabled={isLoading}
              >
                {SEARCH_ENGINES.map((e) => (
                  <option
                    key={e.name}
                    value={e.name}
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#e8e8e8",
                    }}
                  >
                    {e.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none shrink-0" />
            </div>

            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="luxury-button text-sm sm:text-base px-4 sm:px-6 py-3 h-12 sm:h-14 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label="Search"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Search className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              )}
              <span className="hidden sm:inline">
                {isLoading ? "Searching..." : "Search"}
              </span>
              <span className="sm:hidden">{isLoading ? "..." : "Go"}</span>
            </button>
          </div>
        </div>

        {/* Error message */}
        {searchError && (
          <div className="text-center mb-2">
            <p className="text-red-400 text-sm">{searchError}</p>
          </div>
        )}

        <p className="tip-text text-center px-2">
          Tip: Press Enter to search or Ctrl+K to focus. Choose from 6 search
          engines including Google, Bing, DuckDuckGo, Brave, Yandex, and Ecosia.
        </p>
      </form>
    </div>
  );
}
