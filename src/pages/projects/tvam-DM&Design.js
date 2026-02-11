import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const tvamdm = () => {
  return (
    <>
      <Head>
        <title>Tvam | Digital Marketing & Design for Health and Wellness</title>
        <meta
          name="description"
          content="Yuvabe Studios revamped Tvam’s digital and physical presence, creating cohesive branding, modern website design, social media campaigns, and marketing collateral to strengthen trust, visibility, and engagement in the health and wellness sector."
        />
        <meta
          name="keywords"
          content="health insurance India, wellness solutions, digital marketing for healthcare, health product campaigns, AI in health marketing, healthcare branding, insurance marketing strategy, wellness brand"
        />
        <meta name="author" content="Yuvabe Studio" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900  overflow-x-hidden ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 px-6 md:px-12 lg:px-32 py-4 border-b border-gray-200  overflow-x-hidden">
          <div className="flex flex-wrap items-center space-x-2">
            <Link href="/work">
              <button className="hover:underline text-gray-500 whitespace-nowrap">
                Work
              </button>
            </Link>
            <span className=" sm:inline">{">"}</span>
            <Link href="/portfolio/digital-marketing">
              <button className="hover:underline text-gray-500 whitespace-nowrap">
                Digital Marketing
              </button>
            </Link>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Tvam(DM & Design)
            </span>
          </div>
        </nav>

        <header className="px-6 md:px-16 lg:px-32 py-10 border-b border-gray-200 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Tvam
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Building a Unified Health & Wellness Brand Through Digital
              Strategy and Design.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with Tvam to design and execute an
              integrated digital marketing and design strategy that unified
              brand identity, strengthened outreach, and positioned the company
              as a credible health, insurance, and wellness provider in India.
            </p>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/tvam/tvam3d.gif"
              alt="bmh"
              width={400}
              height={400}
              className="object-contain rounded-3xl sm:w-[400px] sm:h-[500px]"
            />
          </motion.div>
        </header>

        <section className="px-6 md:px-12 py-6 border-b border-gray-200 items-center justify-items-center w-full overflow-hidden">
          {/* Row with Title and Services */}
          <motion.div
            className="flex flex-wrap items-start md:items-center justify-center md:justify-start space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Marketing Strategy & Campaigns
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Revamp & Information Architecture
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Branding & Visual Identity
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">Graphic Design</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">Video Production</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#F26524] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Communication Materials
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[508px] border-b-8 border-[#F26524]">
          <motion.div
            className="max-w-xl md:max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Context
            </h2>
            <p className="text-lg text-gray-700">
              Tvam is an India-based health and wellness company offering
              insurance products, health solutions, and wellness services. As
              the brand expanded, it needed a{" "}
              <strong>cohesive identity and marketing strategy </strong>
              that worked across digital platforms, agent communication, and
              offline materials.
            </p>
          </motion.div>
        </section>

        {/* Approach */}
        <section className="relative w-full bg-white py-12 px-6 md:px-12 lg:px-24 font-primary">
          {/* Section Title */}
          <div className="max-w-5xl mx-auto text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4"
            >
              Our Approach
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed font-secondary mb-8"
            >
              Yuvabe Studios brought together{" "}
              <strong>
                design, digital marketing, and communication strategy{" "}
              </strong>{" "}
              to create a consistent brand presence across all touchpoints. From
              revamping the website to building social media channels and
              agent-focused campaigns, our work ensured that Tvam&apos;s
              messaging remained clear, trustworthy, and culturally grounded.
            </motion.p>
          </div>
        </section>

        <section className="bg-[#EDF2ED] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-black mb-8 text-start">
              <span className="text-[#05155E]">●</span> Check out some of these
              amazing designs for tvam Post
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 s md:grid-cols-3  gap-4">
              {/* Merch Items */}
              {[
                "picture.png",
                "picture2.png",
                "picture5.png",
                "picture6.png",
                "picture3.png",
                "picture4.jpg",
              ].map((poster, index) => (
                <motion.div
                  key={index}
                  className="bg-[#EDF2ED] rounded-lg overflow-hidden"
                  style={{ width: "100%", aspectRatio: "1/1" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={`/images/work/tvam/${poster}`}
                    alt={`Merch Item ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-18 h-auto md:h-[634px]">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Marketing Strategy & Campaigns:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Designed integrated campaigns for product launches, franchise
                  outreach, and agent engagement, including WhatsApp-based
                  communication strategies, ad planning, and internal decks for
                  partners.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media Setup & Campaigns:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Created Instagram and Facebook accounts from scratch,
                  developed branded templates, planned campaigns, conducted
                  audits, and performed competitor analysis to ensure consistent
                  and effective messaging.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Revamp & Information Architecture:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Redesigned the website with improved structure, custom
                  illustrations, and a clean, modern aesthetic that reinforced
                  trust and positioned Tvam as a leading health and insurance
                  brand.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Design & Visual Assets:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Produced flyers, posters, standby creatives, presentations,
                  and video content for product awareness, supporting both
                  traditional marketing and digital campaigns.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-32 py-12 bg-white flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Challenges & Wins:
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Challenge:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Understanding a complex market and aligning multiple
                  marketing, design, and communication channels under a single
                  brand strategy.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Successfully established a unified and credible brand
                  presence, expanded reach across digital platforms, and aligned
                  all marketing and design efforts with Tvam&apos;s core values,
                  laying a strong foundation for growth in the health and
                  wellness sector.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/tvam/logo.png"
              alt="Runner Illustration"
              width={200}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        <section className="bg-[#F26524]/80 text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold">
              Partnering with Yuvabe Studios for over a year, we&apos;ve seen
              exceptional results. Their deep understanding of our vision and
              customer segments, combined with prompt responsiveness, has
              strengthened our brand through website development, messaging,
              collaterals, and presentations. The agent engagement strategy
              kickstarted our go-to-market plans effectively.
            </p>
            <p className="mt-4 text-sm font-medium">
              {" "}
              — Aruna Sampige, Tvam Technologies Pvt. Ltd.
            </p>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default tvamdm;
