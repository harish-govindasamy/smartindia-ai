import { Sparkles, Zap } from "lucide-react"

export default function InfoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 my-8 sm:my-12 lg:my-16 px-4 sm:px-6">
      {/* Why SmartIndia.Ai? */}
      <div className="luxury-card group hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">Why SmartIndia.Ai?</h2>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
          A refined search experience that seamlessly blends elegant design with AI-informed suggestions. Crafted for
          discoverability, clarity, and a premium user experience.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="luxury-card group hover:shadow-2xl transition-all duration-300">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary">Quick Actions</h2>
        </div>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground font-body">
          <li className="flex gap-2 sm:gap-3">
            <span className="text-accent flex-shrink-0">•</span>
            <span>Search with 6 premium engines: Google, Bing, DuckDuckGo, Brave, Yandex, Ecosia</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-accent flex-shrink-0">•</span>
            <span>Contact us via WhatsApp and view privacy policy instantly</span>
          </li>
          <li className="flex gap-2 sm:gap-3">
            <span className="text-accent flex-shrink-0">•</span>
            <span>Lightweight, responsive, accessible, and luxurious</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
