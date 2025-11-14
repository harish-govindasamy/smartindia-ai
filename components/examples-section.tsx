"use client"

export default function ExamplesSection() {
  const handleExampleSearch = (query: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-6 px-2 sm:px-4 md:px-6">
      <p className="text-center text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Example searches:{" "}
        <button
          onClick={() => handleExampleSearch("AI in agriculture in India")}
          className="example-link"
        >
          AI in agriculture in India
        </button>
        {", "}
        <button
          onClick={() => handleExampleSearch("best learning resources for ML")}
          className="example-link"
        >
          best learning resources for ML
        </button>
      </p>
    </div>
  )
}
