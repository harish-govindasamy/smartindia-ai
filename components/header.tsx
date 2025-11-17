"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappNumber = "919994900470";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPolicy(false);
    }
  };

  return (
    <>
      <header
        className={`floating-header ${
          isScrolled ? "scrolled" : ""
        } flex items-center justify-between`}
      >
        {/* Empty space where logo was */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Logo removed as requested */}
        </div>

        <nav className="hidden sm:flex items-center gap-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Contact us
          </a>
          <button onClick={() => setShowPolicy(true)} className="nav-link">
            Policy
          </button>
        </nav>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="sm:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {showMobileMenu && (
        <nav className="fixed top-20 left-4 right-4 sm:hidden bg-linear-to-br from-[#1a1a1a] to-[#252525] border border-border rounded-xl px-6 py-4 flex flex-col gap-4 z-40 shadow-lg animate-fadeInUp">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link block"
            onClick={() => setShowMobileMenu(false)}
          >
            Contact us
          </a>
          <button
            onClick={() => {
              setShowPolicy(true);
              setShowMobileMenu(false);
            }}
            className="nav-link text-left"
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
          <div className="policy-modal max-w-2xl max-h-[80vh] overflow-y-auto w-full hide-scrollbar">
            <div className="sticky top-0 bg-gradient-to-r from-[#1a1a1a] to-[#252525] border-b border-border px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl text-premium-heading text-primary">
                Privacy Policy
              </h2>
              <button
                onClick={() => setShowPolicy(false)}
                className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                aria-label="Close policy"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="px-6 py-6 text-muted-foreground leading-relaxed space-y-4">
              <p className="text-foreground font-semibold text-lg">
                Privacy Policy
              </p>
              <p className="text-premium-body">
                SmartIndia.Ai is committed to protecting your privacy. We
                collect minimal personal information and use it solely to
                improve your search experience. Your search queries are
                processed through our selected search engines (Google, Bing,
                DuckDuckGo, Brave, Yandex, Ecosia) based on your choice.
              </p>
              <p className="text-foreground font-semibold text-lg">
                Data Usage
              </p>
              <p className="text-premium-body">
                We do not store, sell, or share your personal data with third
                parties. All searches are conducted through the selected search
                engine's infrastructure. Please refer to the respective search
                engine's privacy policy for their data handling practices.
              </p>
              <p className="text-foreground font-semibold text-lg">Cookies</p>
              <p className="text-premium-body">
                SmartIndia.Ai may use cookies to remember your preferred search
                engine. You can disable cookies in your browser settings at any
                time.
              </p>
              <p className="text-foreground font-semibold text-lg">Security</p>
              <p className="text-premium-body">
                We implement standard security measures to protect your data
                during transmission. However, no method of transmission over the
                internet is 100% secure.
              </p>
              <p className="text-foreground font-semibold text-lg">
                Third-Party Links
              </p>
              <p className="text-premium-body">
                SmartIndia.Ai is not responsible for the privacy practices of
                external websites linked through search results. We encourage
                you to review their privacy policies.
              </p>
              <p className="text-foreground font-semibold text-lg">
                Contact Us
              </p>
              <p className="text-premium-body">
                For privacy concerns or inquiries, please contact us via
                WhatsApp using the "Contact us" link in the header.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
