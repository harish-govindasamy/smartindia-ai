import { Sparkles, Zap, Shield, Lightbulb } from "lucide-react"

export default function InfoSection() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 my-2 sm:my-3 px-2 sm:px-3 md:px-4">
      {/* Why SmartIndia.Ai? */}
      <div className="luxury-card card-1 group relative overflow-hidden p-3 sm:p-4 md:p-5">
        {/* Gradient Background Accent */}
        <div className="absolute -top-40 -right-40 w-60 h-60 bg-linear-to-br from-primary/5 to-accent/5 rounded-full blur-3xl pointer-events-none group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300 flex-shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-premium-heading bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Why SmartIndia.Ai?</h2>
            </div>
          </div>
          <p className="text-premium-body text-xs sm:text-sm leading-snug">
            A refined search experience with elegant design and AI-informed suggestions.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="luxury-card card-2 group relative overflow-hidden p-3 sm:p-4 md:p-5">
        {/* Gradient Background Accent */}
        <div className="absolute -top-40 -left-40 w-60 h-60 bg-linear-to-br from-accent/5 to-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:from-accent/10 group-hover:to-secondary/10 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-secondary/20 to-secondary/10 backdrop-blur-sm border border-secondary/20 group-hover:border-secondary/40 transition-all duration-300 flex-shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-premium-heading bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">Features</h2>
            </div>
          </div>
          <ul className="space-y-1 sm:space-y-2">
            <li className="flex gap-2 group/item">
              <span className="text-primary font-bold shrink-0 text-xs group-hover/item:scale-125 transition-transform duration-300">•</span>
              <span className="text-premium-body text-xs sm:text-sm group-hover/item:text-foreground transition-colors duration-300">
                6 search engines
              </span>
            </li>
            <li className="flex gap-2 group/item">
              <span className="text-primary font-bold shrink-0 text-xs group-hover/item:scale-125 transition-transform duration-300">•</span>
              <span className="text-premium-body text-xs sm:text-sm group-hover/item:text-foreground transition-colors duration-300">
                Instant contact
              </span>
            </li>
            <li className="flex gap-2 group/item">
              <span className="text-primary font-bold shrink-0 text-xs group-hover/item:scale-125 transition-transform duration-300">•</span>
              <span className="text-premium-body text-xs sm:text-sm group-hover/item:text-foreground transition-colors duration-300">
                Luxurious design
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Privacy & Security */}
      <div className="luxury-card card-1 group relative overflow-hidden p-3 sm:p-4 md:p-5">
        {/* Gradient Background Accent */}
        <div className="absolute -bottom-40 -right-40 w-60 h-60 bg-linear-to-br from-blue-500/5 to-primary/5 rounded-full blur-3xl pointer-events-none group-hover:from-blue-500/10 group-hover:to-primary/10 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-500/10 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-premium-heading bg-linear-to-r from-blue-600 to-primary bg-clip-text text-transparent">Privacy First</h2>
            </div>
          </div>
          <p className="text-premium-body text-xs sm:text-sm leading-snug">
            Minimal data collection, no tracking, secure search queries.
          </p>
        </div>
      </div>

      {/* Innovation */}
      <div className="luxury-card card-2 group relative overflow-hidden p-3 sm:p-4 md:p-5">
        {/* Gradient Background Accent */}
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-linear-to-br from-green-500/5 to-accent/5 rounded-full blur-3xl pointer-events-none group-hover:from-green-500/10 group-hover:to-accent/10 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="p-2 sm:p-3 rounded-lg bg-linear-to-br from-green-500/20 to-green-500/10 backdrop-blur-sm border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300 flex-shrink-0">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-premium-heading bg-linear-to-r from-green-600 to-accent bg-clip-text text-transparent">AI-Powered</h2>
            </div>
          </div>
          <p className="text-premium-body text-xs sm:text-sm leading-snug">
            Intelligent search with AI suggestions for better discovery.
          </p>
        </div>
      </div>
    </div>
  )
}
