"use client"

import type React from "react"
import { useState } from "react"
import { X, Menu } from "lucide-react"

export default function Header() {
  const [showPolicy, setShowPolicy] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const whatsappNumber = "919876543210"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPolicy(false)
    }
  }

  return (
    <>
      <header className="floating-header bg-gradient-to-r from-card via-card to-card border-b border-border px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between z-40 backdrop-blur-md bg-opacity-95">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 sm:px-5 py-2 rounded-full font-serif font-bold text-xs sm:text-sm tracking-wide">
            SmartIndia.Ai
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 sm:gap-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-200"
          >
            Contact us
          </a>
          <button
            onClick={() => setShowPolicy(true)}
            className="text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            Policy
          </button>
        </nav>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="sm:hidden text-muted-foreground hover:text-primary transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {showMobileMenu && (
        <nav className="sm:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-3 z-40">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-200"
            onClick={() => setShowMobileMenu(false)}
          >
            Contact us
          </a>
          <button
            onClick={() => {
              setShowPolicy(true)
              setShowMobileMenu(false)
            }}
            className="text-left text-muted-foreground font-body text-sm hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            Policy
          </button>
        </nav>
      )}

      {showPolicy && (
        <div
          className="policy-backdrop fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-card border border-border rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto w-full shadow-2xl hide-scrollbar">
            <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-serif font-bold text-primary">Policy</h2>
              <button
                onClick={() => setShowPolicy(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-6 py-6 font-body text-muted-foreground leading-relaxed space-y-4">
              <p className="text-foreground font-semibold text-lg">Privacy Policy</p>
              <p>
                SmartIndia.Ai is committed to protecting your privacy. We collect minimal personal information and use
                it solely to improve your search experience. Your search queries are processed through our selected
                search engines (Google, Bing, DuckDuckGo, Brave, Yandex, Ecosia) based on your choice.
              </p>
              <p className="text-foreground font-semibold text-lg">Data Usage</p>
              <p>
                We do not store, sell, or share your personal data with third parties. All searches are conducted
                through the selected search engine's infrastructure. Please refer to the respective search engine's
                privacy policy for their data handling practices.
              </p>
              <p className="text-foreground font-semibold text-lg">Cookies</p>
              <p>
                SmartIndia.Ai may use cookies to remember your preferred search engine. You can disable cookies in your
                browser settings at any time.
              </p>
              <p className="text-foreground font-semibold text-lg">Security</p>
              <p>
                We implement standard security measures to protect your data during transmission. However, no method of
                transmission over the internet is 100% secure.
              </p>
              <p className="text-foreground font-semibold text-lg">Third-Party Links</p>
              <p>
                SmartIndia.Ai is not responsible for the privacy practices of external websites linked through search
                results. We encourage you to review their privacy policies.
              </p>
              <p className="text-foreground font-semibold text-lg">Contact Us</p>
              <p>
                For privacy concerns or inquiries, please contact us via WhatsApp using the "Contact us" link in the
                header.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
