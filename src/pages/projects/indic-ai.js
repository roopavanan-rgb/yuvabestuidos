import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const indicai = () => {
  return (
    <>
      <Head>
        <title>
          Indic-AI Foundation | Nonprofit Website Redesign & Brochure Design
        </title>
        <meta
          name="description"
          content="Yuvabe Studios redesigned Indic-AI’s website and brochure to highlight impact in education, employment, healthcare, and AI-driven inclusion for persons with disabilities, ensuring accessibility and clear engagement paths."
        />
        <meta
          name="keywords"
          content="brochure design, disability inclusion, PWDs, person with disabilities,  ai for social good, Indic AI, accessibility in India"
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
            <span className=" sm:inline">{">"} </span>
            <span> Design</span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Indic - Ai
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
              Indic-Ai
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Designing Clarity, Trust, and Action for a Mission-Driven
              Nonprofit
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with Indic-AI to redesign their website
              and brochure, creating a clear, accessible digital and print
              presence that communicates impact, builds trust, and helps
              supporters understand how to get involvedYuvabe Studios partnered
              with Indic-AI to redesign their website and brochure, creating a
              clear, accessible digital and print presence that communicates
              impact, builds trust, and helps supporters understand how to get
              involved.
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
              src="/images/work/indic-ai/indic.svg"
              alt="Indic-AI Logo"
              width={400}
              height={400}
              className="object-contain rounded-3xl sm:w-[350px] sm:h-[500px]"
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
                <span className="w-2 h-2 bg-[#2B79BE] rounded-full"></span>
                <span className="text-sm text-gray-700">Content strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2B79BE] rounded-full"></span>
                <span className="text-sm text-gray-700">Brochure design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2B79BE] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Redesign</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-16 h-auto md:h-[480px] border-b-8 border-[#2B79BE]">
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
              Indic‑AI Foundation is a nonprofit working to empower Persons with
              Disabilities through education, employment, healthcare, and
              AI-driven inclusion. The organisation is recognised nationally as
              one of India&apos;s Top 10 Social Ventures by IIM Bangalore&apos;s
              NSRCEL.
              <br />
              <br />
              Indic-AI needed help translating a complex, multi-pillar mission
              into communication that felt human, dignified, and easy to
              understand for partners, donors, volunteers, and learners.
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
              We focused on clarity first. The goal was to help Indic-AI explain
              what they do, why it matters, and how people can support the work
              without sounding overly technical or emotionally overstated. This
              was achieved through narrative structuring, accessible design, and
              thoughtful content curation across both web and print.
            </motion.p>
          </div>
        </section>

        {/* Snapshot Section */}
        <section className="relative bg-[#2E3B5E] px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              <span className="text-[#2B79BE]">●</span> Take a look at the
              Indic-AI website
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-8 max-w-6xl mx-auto">
            {/* First Image */}
            <motion.div
              className="overflow-hidden w-[280px] h-[800px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/work/indic-ai/homepage.png"
                alt="Snapshot 1"
                width={252}
                height={962.25}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[800px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/indic-ai/about-us.png"
                alt="Snapshot 2"
                width={252}
                height={811}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[600px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/images/work/indic-ai/employment-page.png"
                alt="Snapshot 3"
                width={252}
                height={608}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Fourth Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[800px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/indic-ai/education.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-contain w-full h-full"
              />
            </motion.div>

            <motion.div
              className="overflow-hidden w-[302px] h-[400px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/indic-ai/contact-us.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto ">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Narrative-First Content Strategy:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Reframed Indic-AI&apos;s story around four clear pillars:
                  Education, Employment, Healthcare, and AI and Technology.
                  Supported each pillar with proof points such as impact data,
                  testimonials, and partner recognition to build trust.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Information Architecture:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Structured website content into clear sections with a focused
                  top navigation and a prominent Get Involved call to action,
                  guiding users toward meaningful engagement.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Content Curation and Editing:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Condensed long-form content into scannable sections using
                  clear headlines and microcopy that explains impact in simple,
                  respectful language without jargon.
                </span>
              </li>
              {/* Key Point 4 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Accessibility-Led Design:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Implemented high-contrast colours, clear typography hierarchy,
                  semantic headings, and screen-reader-friendly layouts to
                  ensure inclusive access for all users.
                </span>
              </li>

              {/* Key Point 5 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Redesign and Build:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a responsive WordPress website using a lightweight
                  theme and modular blocks for Programs, Impact, and
                  Testimonials. Optimised performance with caching and
                  minification, while keeping the CMS easy for the internal team
                  to manage.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Brochure Design:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Created a print-ready and digital brochure aligned with the
                  website&apos;s visual language, covering mission, programs,
                  impact highlights, testimonials, and partner recognition.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>
        <section className="w-full bg-[#0E2654] px-6 py-12 flex items-center justify-center">
          <motion.div
            className="w-full max-w-screen-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-start justify-start">
              <span className="text-[#2B79BE] mr-2">●</span> A few snapshots of
              the Brochure Design:
            </h2>

            {/* Posters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Poster 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/indic-ai/brochure_1.png"
                  alt=" Poster 1"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/indic-ai/brochure_2.png"
                  alt=" Poster 2"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/indic-ai/brochure_3.png"
                  alt=" Poster 3"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="relative bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Challenges & Wins */}
          <motion.div
            className="max-w-2xl mb-12 items-center justify-center self-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Challenges & Wins:
            </h2>
            <p className="text-lg text-gray-700">
              <strong>Challenge: </strong>Communicating a complex, multi-pillar
              impact story that balances AI for social good with human-centred
              storytelling, while maintaining accessibility and an
              NGO-appropriate tone.
              <br />
              <br />
              <strong>Win: </strong> Delivered a cohesive website and brochure
              that clearly communicate Indic-AI&apos;s value proposition,
              strengthen credibility, and make it easier for partners and
              supporters to understand how to engage and contribute.
            </p>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#0E2654] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-2xl font-medium ">
              &quot;Yuvabe Studios helped Indic-AI communicate its mission with
              clarity and dignity across education, employment, healthcare, and
              AI. Through accessible design, structured navigation, and
              collaborative iteration, they delivered a website and brochure
              that feel authentic, impactful, and easy to manage, helping
              partners clearly understand and support the organisation&apos;s
              work.&quot;
            </p>

            <p className="mt-4 text-xl font-regular font-secondary">
              — Sarita Chand, Co-Founder, Indic-AI
            </p>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default indicai;
