import Header from "@/components/header"
import SearchSection from "@/components/search-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "SmartIndia.Ai - Brings AI and People together",
  description: "Search engine tag - Explore the world with AI",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-2 sm:px-3 md:px-4 py-4 sm:py-6 pt-24 sm:pt-28 md:pt-32">
        <SearchSection />
      </main>
      <Footer />
    </div>
  )
}
