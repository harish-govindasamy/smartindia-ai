import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Smart India AI - Data Protection & Security",
  description:
    "Learn about Smart India AI's privacy policy, data protection measures, and how we handle your search data. Transparent policies for India's AI-powered search engine.",
  keywords:
    "Smart India AI privacy policy, data protection, search privacy, AI search security, India data protection",
  alternates: {
    canonical: "https://smartindia.ai/policy",
  },
  openGraph: {
    title: "Privacy Policy | Smart India AI",
    description:
      "Learn about Smart India AI's privacy policy and data protection measures.",
    url: "https://smartindia.ai/policy",
    type: "website",
  },
  robots: "index, follow",
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-transparent via-transparent to-background">
      <Header />
      <main className="flex-1 px-4 py-8 pt-24 sm:pt-28 md:pt-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="luxury-card p-8 space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Commitment to Privacy
              </h2>
              <p>
                Smart India AI is committed to protecting your privacy. We
                collect minimal personal information and use it solely to
                improve your search experience. Your search queries are
                processed through our selected search engines (Google, Bing,
                DuckDuckGo, Brave, Yandex, Ecosia) based on your choice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Usage
              </h2>
              <p>
                We do not store, sell, or share your personal data with third
                parties. All searches are conducted through the selected search
                engine's infrastructure. Please refer to the respective search
                engine's privacy policy for their data handling practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p>
                Smart India AI may use cookies to remember your preferred search
                engine. You can disable cookies in your browser settings at any
                time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Security
              </h2>
              <p>
                We implement standard security measures to protect your data
                during transmission. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Third-Party Links
              </h2>
              <p>
                Smart India AI is not responsible for the privacy practices of
                external websites linked through search results. We encourage
                you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p>
                For privacy concerns or inquiries, please contact us via
                WhatsApp using the "Contact us" link in the header.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
