import Header from "@/components/header"
import SearchSection from "@/components/search-section"
import InfoSection from "@/components/info-section"
import ExamplesSection from "@/components/examples-section"
import Footer from "@/components/footer"

export const metadata = {
  title: "SmartIndia.Ai - Brings AI and People together",
  description: "Search engine tag - Explore the world with AI",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 sm:py-12 pt-32 sm:pt-36">
        <SearchSection />
        <ExamplesSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}
