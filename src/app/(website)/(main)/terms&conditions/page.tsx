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

      {/* terms and conditions section */}
      <div className="py-8 md:py-12 container mx-auto">
        <title>Terms and Conditions - Grants</title>
        <meta
          name="description"
          content="Terms and Conditions for Grants Platform"
        />

        <div className="mt-8 md:mt-12 px-4">
          <header className="text mb-8">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              What Are Grants Terms & Conditions? Grants is a platform that
              connects professionals, businesses, and innovators with expert
              guidance, insights, and practical solutions across industries.
              From AI and healthcare to product design and business strategy,
              Grants helps users overcome challenges, make informed decisions,
              and achieve meaningful results. Our mission is to provide
              actionable knowledge and support, empowering individuals and
              organizations to unlock their full potential. Whether you’re
              exploring new ideas, solving complex problems, or looking for
              industry-specific advice, Talent Badger is your trusted partner
              for growth and success.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="pt-6">
              <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4">
                What is Grants?
              </h2>

              <p className="text-gray-700 mb-4">
                Grants is a platform that connects professionals, businesses,
                and innovators with expert guidance, insights, and practical
                solutions across industries. From AI and healthcare to product
                design and business strategy, Grants helps users overcome
                challenges, make informed decisions, and achieve meaningful
                results.
              </p>

              <p className="text-gray-700 mb-4">
                Our mission is to provide actionable knowledge and support,
                empowering individuals and organizations to unlock their full
                potential. Whether you’re exploring new ideas, solving complex
                problems, or looking for industry-specific advice, Talent Badger
                is your trusted partner for growth and success.
              </p>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Industry Expertise
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  Access guidance from professionals across multiple sectors.
                </li>
                <li>
                  Gain insights into emerging trends, best practices, and
                  innovative solutions.
                </li>
              </ul>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Practical Tools and Resources
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  Leverage templates, frameworks, and guides designed to make
                  complex tasks manageable.
                </li>
                <li>
                  Apply actionable strategies that drive measurable results.
                </li>
              </ul>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Personalized Guidance
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  Receive advice tailored to your unique goals, challenges, and
                  context.
                </li>
                <li>
                  Benefit from one-on-one consultations, workshops, and advisory
                  sessions.
                </li>
              </ul>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Community and Collaboration
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  Connect with a network of like-minded professionals and
                  innovators.
                </li>
                <li>
                  Share experiences, exchange ideas, and learn from success
                  stories.
                </li>
              </ul>

              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Continuous Learning
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  Stay informed with industry updates, thought leadership
                  content, and practical insights.
                </li>
                <li>
                  Build capabilities to adapt to evolving markets and
                  technologies.
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                At its core, Grants is more than a platform—it is a trusted
                partner for growth. We help individuals and organizations
                navigate uncertainty, unlock opportunities, and turn ideas into
                results. By combining expert knowledge with practical
                application, Grants empowers users to make confident decisions,
                overcome obstacles, and achieve meaningful, lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
