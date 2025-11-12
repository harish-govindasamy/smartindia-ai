export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-300 to-slate-400 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm font-serif">
            SmartIndia.Ai
          </div>
        </div>
      </header>

      {/* Policy Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 bg-white my-8 rounded-lg shadow-lg">
        <div className="prose prose-sm max-w-none font-body text-slate-700">
          <h1 className="font-serif text-3xl font-bold text-slate-800 mb-8">POLICY</h1>

          <p className="mb-6">
            This Privacy Policy describes how Coimbatore AI ("we," "our," or "us") gathers, uses, shares, and safeguards
            your personal data when you access or use our services (the "Services").
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">a. Information You Provide</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Account Details:</strong> When you register for an account, we may collect details such as your
              name, email address, phone number, and password.
            </li>
            <li>
              <strong>Location Data:</strong> We may gather your device's location information (e.g., GPS coordinates)
              to deliver location-based results and personalized suggestions. You can manage these permissions in your
              device settings.
            </li>
            <li>
              <strong>Search Activity:</strong> We may record information related to your searches, including keywords,
              places, and preferences.
            </li>
            <li>
              <strong>Contact Information:</strong> If you reach out for customer support, we may collect your name,
              contact details, and the contents of your messages.
            </li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">
            b. Information Collected Automatically
          </h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>
              <strong>Device Data:</strong> We may automatically obtain data about your device, such as the type,
              operating system, and unique identifiers.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect details about how you use our Services, including pages
              visited, time spent, and features accessed.
            </li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">
            To Operate and Enhance the Services:
          </h3>
          <p className="mb-4">We use your data to run and improve our Services by:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Processing search queries and showing relevant results.</li>
            <li>Personalizing your experience through location-based content.</li>
            <li>Enhancing our algorithms and overall performance.</li>
            <li>Detecting and resolving technical problems.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">To Communicate with You:</h3>
          <p className="mb-4">We may contact you to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Send updates, notifications, and promotional information.</li>
            <li>Respond to your inquiries or support requests.</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">For Marketing and Advertising:</h3>
          <p className="mb-4">Your information may be used to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Display customized advertisements within our Services.</li>
            <li>Share limited data with third-party marketing partners (with your consent).</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">For Legal and Safety Purposes:</h3>
          <p className="mb-4">We may process your data to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Comply with legal obligations and regulatory requirements.</li>
            <li>Ensure the safety and security of users and our platform.</li>
            <li>Prevent or investigate fraudulent activities.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">3. Sharing of Information</h2>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Service Providers:</h3>
          <p className="mb-6">
            We may share information with trusted vendors who help us operate the Services, such as:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Cloud hosting providers</li>
            <li>Analytics and data processing tools</li>
            <li>Marketing and advertising platforms</li>
          </ul>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Business Partners:</h3>
          <p className="mb-6">
            With your consent, we may share data with selected partners for promotional or joint marketing efforts.
          </p>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Legal Requirements:</h3>
          <p className="mb-6">
            We may disclose information when required by law or to comply with valid government or legal requests.
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">4. Data Protection</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your data from unauthorized
            access, misuse, or disclosure. However, no system of online storage or transmission is entirely secure.
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">5. Your Choices</h2>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Location Access:</h3>
          <p className="mb-6">You can enable or disable location sharing through your device settings.</p>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Marketing Preferences:</h3>
          <p className="mb-6">
            You may opt out of receiving marketing emails by following the unsubscribe link in our communications.
          </p>

          <h3 className="font-serif text-xl font-bold text-slate-800 mt-6 mb-3">Account Management:</h3>
          <p className="mb-6">
            You can review, modify, or delete your account information anytime by logging in or submitting a deletion
            request.
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">6. Children's Privacy</h2>
          <p className="mb-6">
            Our Services are not directed to children under 13 years of age, and we do not knowingly collect personal
            information from them.
          </p>

          <h2 className="font-serif text-2xl font-bold text-slate-800 mt-8 mb-4">7. Policy Updates</h2>
          <p className="mb-6">
            We may revise this Privacy Policy periodically. Any major changes will be announced by updating this page,
            along with the date of revision.
          </p>

          <p className="mt-8 pt-8 border-t border-slate-300">
            By using our Services, you acknowledge that you have read and agree to this Privacy Policy and all its
            terms.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-300 to-slate-400 px-6 py-6 flex items-center justify-center">
        <p className="text-slate-800 font-medium font-body">© 2025 SmartIndia.Ai</p>
      </footer>
    </div>
  )
}
