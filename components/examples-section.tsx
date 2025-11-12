"use client"

export default function ExamplesSection() {
  const handleExampleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 sm:my-12 px-4 sm:px-6">
      <p className="text-center text-xs sm:text-sm text-muted-foreground font-body">
        Example searches:{" "}
        <button
          onClick={() => handleExampleSearch("AI in agriculture in India")}
          className="text-primary hover:text-accent font-serif font-semibold transition-colors duration-200"
        >
          AI in agriculture in India
        </button>
        {", "}
        <button
          onClick={() => handleExampleSearch("best learning resources for ML")}
          className="text-primary hover:text-accent font-serif font-semibold transition-colors duration-200"
        >
          best learning resources for ML
        </button>
      </p>
    </div>
  )
}
