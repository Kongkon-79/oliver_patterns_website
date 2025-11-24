// import { HeroBanner } from '@/components/shared/subBanner'

import { Hero } from '@/components/common/Hero'

const page = () => {
  return (
    <div>
      <div className="">
        <Hero
          title="Your Privacy Matters to Us"
          subtitle="Discover how we collect, protect, and manage your information. At Grants.com.au, safeguarding your data is at the core of everything we do."
          videoSrc="/secondHero.mp4"
        />
      </div>

      {/* Privacy Policy section */}
      <div className="py-8 md:py-12 container mx-auto">
        <title>Privacy Policy - Grants</title>
        <meta
          name="description"
          content="Learn how Grants collects, protects, and manages your information. Your data privacy and security are our top priorities."
        />

        <div className="mt-8 md:mt-12 px-4">
          <header className="text mb-8">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Welcome to Grants. Your privacy, trust, and peace of mind are
              deeply important to us. This Privacy Policy explains how we
              collect, use, and safeguard your personal information when you
              interact with our website, coaching services, workshops, or
              digital resources. By accessing or using our services, you agree
              to the practices described in this policy.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* ======================= 1. INFORMATION WE COLLECT ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                At Grants, we collect information to provide a more
                personalized, secure, and meaningful experience for our users.
                The types of information we may collect include:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, payment information, and any details you provide
                  during inquiries, bookings, or registration.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website — including pages visited, time
                  spent, and navigation patterns.
                </li>
                <li>
                  <strong>Technical Data:</strong> Your IP address, browser
                  type, device information, and operating system — used to
                  ensure site functionality and security.
                </li>
              </ul>
            </div>

            {/* ======================= 2. HOW WE USE YOUR INFORMATION ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                2. How We Use Your Information
              </h2>

              <p className="text-gray-700 mb-4">
                If you create an account or subscribe to any of our services,
                you are responsible for maintaining the confidentiality of your
                login credentials and all activities that occur under your
                account.
              </p>

              <p className="text-gray-700 mb-4">You agree to:</p>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  Provide, maintain, and improve our website and offerings.
                </li>
                <li>
                  Personalize your experience and tailor content to your
                  interests.
                </li>
                <li>
                  Process payments, bookings, and account-related actions
                  securely.
                </li>
                <li>
                  Communicate updates, insights, or relevant content with your
                  consent.
                </li>
                <li>
                  Prevent fraud, ensure security, and maintain the integrity of
                  our platform.
                </li>
              </ul>

              <p className="text-gray-700">
                Your information is handled mindfully, with respect and
                transparency at every step.
              </p>
            </div>

            {/* ======================= 3. USE OF SERVICES ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                3. Use of Services
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell or rent your personal information. Your data may
                only be shared under limited, necessary circumstances, such as:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  With trusted third-party partners who help us operate and
                  deliver our services (e.g., payment processors or hosting
                  providers), under strict confidentiality agreements.
                </li>
                <li>
                  To comply with legal requirements, regulations, or valid
                  government requests.
                </li>
                <li>
                  During a business transition (e.g., merger or restructuring),
                  where user data may be securely transferred in accordance with
                  this policy.
                </li>
              </ul>
            </div>

            {/* ======================= 4. PAYMENTS & FEES ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                4. Payments and Fees
              </h2>
              <p className="text-gray-700 mb-4">
                We take reasonable and modern security measures to protect your
                personal data from unauthorized access, alteration, or misuse.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Sensitive information is encrypted and stored securely.</li>
                <li>
                  Access to data is restricted to authorized personnel only.
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                However, please note that no method of internet transmission or
                electronic storage is completely secure. While we do our best to
                protect your data, you acknowledge the inherent risks associated
                with online communication.
              </p>
            </div>

            {/* ======================= 5. YOUR RIGHTS ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                At Grants, you maintain full control over your personal
                information. You have the right to:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Request access to, correction of, or deletion of your personal
                  data.
                </li>
                <li>
                  Opt out of newsletters or marketing communications at any
                  time.
                </li>
                <li>Withdraw consent for data processing where applicable.</li>
              </ul>

              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us at the email
                provided below. We will respond to all valid requests in a
                timely and respectful manner.
              </p>
            </div>

            {/* ======================= 6. COOKIES ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar technologies to enhance
                your browsing experience. These help us:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Remember user preferences.</li>
                <li>Understand how visitors engage with our site.</li>
                <li>Deliver relevant and seamless experiences.</li>
              </ul>

              <p className="text-gray-700 mt-4">
                You may manage or disable cookies through your browser settings,
                though some website features may not function optimally without
                them.
              </p>
            </div>

            {/* ======================= 7. THIRD PARTY LINKS ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                7. Third-Party Links
              </h2>

              <p className="text-gray-700">
                Our website may contain links to third-party websites or
                platforms. Please note that Grants is not responsible for the
                privacy practices, content, or security of external websites. We
                encourage you to review their privacy policies before engaging
                with any third-party content.
              </p>
            </div>

            {/* ======================= 8. UPDATES ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                8. Updates to This Policy
              </h2>

              <p className="text-gray-700">
                We may revise or update this Privacy Policy periodically to
                reflect improvements in our services, legal requirements, or
                security practices. Any changes will be posted on this page with
                an updated effective date. Continued use of our website or
                services after changes are posted constitutes your acceptance of
                the updated policy.
              </p>
            </div>

            {/* ======================= 9. CONTACT ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                9. Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding your
                personal data or this Privacy Policy, please contact us at:
              </p>

              <p className="text-gray-700">
                <strong>Email:</strong> support@grants.com <br />
                <strong>Phone:</strong> 1800 GRANTS (472 687) <br />
                <strong>Address:</strong> Grants, Portland, Oregon, USA
              </p>
            </div>

            {/* ======================= CONCLUSION ======================= */}
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700">
                By using Grants&apos; website or services, you acknowledge that
                you have read, understood, and agreed to this Privacy Policy.
                Your trust and privacy are at the heart of what we do — and we
                remain committed to protecting both with care and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
