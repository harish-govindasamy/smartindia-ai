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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-8 sm:py-12 pt-24 sm:pt-28">
        <SearchSection />
        <ExamplesSection />
        <InfoSection />
        
      </main>
      <Footer />
    </div>
  )
}
