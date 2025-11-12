import { Sparkles, Zap } from "lucide-react"

export default function InfoSection() {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12 lg:my-20 px-4 sm:px-6">
      {/* Why SmartIndia.Ai? */}
      <div className="luxury-card card-1 group">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl text-premium-heading text-foreground">Why SmartIndia.Ai?</h2>
        </div>
        <p className="text-premium-body">
          A refined search experience that seamlessly blends elegant design with AI-informed suggestions. Crafted for
          discoverability, clarity, and a premium user experience.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="luxury-card card-2 group">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
            <Zap className="w-6 h-6 text-secondary" />
          </div>
          <h2 className="text-2xl text-premium-heading text-foreground">Quick Actions</h2>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
            <span className="text-premium-body">
              Search with 6 premium engines: Google, Bing, DuckDuckGo, Brave, Yandex, Ecosia
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
            <span className="text-premium-body">
              Contact us via WhatsApp and view privacy policy instantly
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
            <span className="text-premium-body">
              Lightweight, responsive, accessible, and luxurious
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
