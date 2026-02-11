import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const buglerock = () => {
  return (
    <>
      <Head>
        <title>
          BugleRock Capital | Wealth & Asset Management Website Redesign
        </title>
        <meta
          name="description"
          content="Yuvabe Studios modernized BugleRock Asia and Singapore websites with responsive design, UX/UI enhancements, SEO optimization, and visual branding to strengthen credibility and client engagement."
        />
        <meta
          name="keywords"
          content="Wealth management, Asset management, Equity broking, Global advisory, High-net-worth clients, Financial solutions, Legacy planning, Responsive website, SEO-friendly website, UX/UI design, Performance-optimized website, Professional website redesign, Digital presence for finance"
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
            <span> Design </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Buglerock
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
              Buglerock
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Modernising Digital Presence for a Premier Wealth and Asset
              Management Firm
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios redesigned the BugleRock Asia and BugleRock
              Singapore websites to create a consistent, professional, and
              high-trust digital experience for wealth management clients across
              regions.
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
              src="/images/work/buglerock/logo.svg"
              alt="bmh"
              width={500}
              height={500}
              className="object-contain rounded-3xl sm:w-[500px] sm:h-[500px]"
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
                <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Redesign</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>
                <span className="text-sm text-gray-700">UX/UI Enhancement</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>
                <span className="text-sm text-gray-700">SEO Optimization</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Performance Optimization
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>
                <span className="text-sm text-gray-700">Visual Branding</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#912F63]">
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
              BugleRock Capital is a leading wealth and asset management firm
              offering bespoke financial solutions across wealth management,
              asset management, equity broking, investment advisory, and global
              advisory services. BugleRock required two region-specific websites
              for Asia and Singapore that reflected the same brand credibility
              while addressing different audiences, regulatory environments, and
              user expectations.
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
              We focused on building trust through design. The goal was to
              create a refined digital presence that communicated expertise,
              stability, and clarity, while ensuring both websites remained
              consistent in brand identity and easy to navigate for
              high-net-worth clients and prospects{" "}
            </motion.p>
          </div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://www.buglerock.asia/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#912F6333] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-[#545454] font-semibold text-lg">
              <span className="w-2 h-2 bg-[#912F63] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Bugerock Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
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
                  Website Redesign:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Designed modern, professional layouts for both Asia and
                  Singapore websites, ensuring visual consistency while adapting
                  content structure for regional audiences.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  UX/UI Enhancement:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Improved navigation, content hierarchy, and page flow to help
                  users easily understand BugleRock&apos;s services and value
                  proposition.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Responsive Design:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Optimised layouts for desktop, tablet, and mobile devices to
                  deliver a seamless experience across all screen sizes.
                </span>
              </li>
              {/* Key Point 4 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  SEO & Performance Optimization:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Implemented on-page SEO best practices, improved site speed,
                  and optimised performance to enhance visibility and usability
                  across both platforms.
                </span>
              </li>
              {/* Key Point 5 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Visual Branding Alignment:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Refined typography, spacing, and visual elements to reinforce
                  BugleRock&apos;s professional identity and long-term
                  credibility.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Mockups Section */}
        <section className="relative bg-[#912F63]/50 px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-black text-2xl md:text-3xl font-semibold">
              <span className="text-[#912F63]">●</span> Take a look at the
              Buglerock website
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-8 max-w-[1400px] mx-auto justify-items-center">
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
                src="/images/work/buglerock/homepage.png"
                alt="Snapshot 1"
                width={252}
                height={962.25}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[400px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/buglerock/about-us.png"
                alt="Snapshot 2"
                width={252}
                height={811}
                className="object-contain w-full h-full"
              />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[800px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/images/work/buglerock/wealth-management.png"
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
                src="/images/work/buglerock/assest-management.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-contain w-full h-full"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden w-[252px] h-[400px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/buglerock/contact-us.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>
        </section>

        {/* Challenges and Wins Section */}
        <section className="px-6 md:px-16 lg:px-32 py-12 bg-white flex items-start justify-around h-auto">
          <motion.div
            className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Challenges Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Challenges
              </h3>
              <p className="text-base font-secondary  text-gray-700 mb-4">
                Creating two region-specific websites that address different
                market needs while maintaining a single, cohesive brand identity
                for a wealth and asset management firm.
              </p>
            </div>

            {/* Wins Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wins</h3>
              <p className="text-base text-gray-700 mb-4 font-secondary ">
                Delivered two polished, responsive, and SEO-optimised websites
                that strengthen BugleRock&apos;s digital credibility, improve
                user engagement, and support their positioning as a trusted
                partner in wealth creation and legacy building.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="relative h-[600px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Image Container */}
          <div className="relative w-full flex justify-center mb-8">
            <div className="relative w-full  md:w-[900px] h-[300px] sm:h-[450px] rounded-xl overflow-hidden">
              <Link href="https://www.youtube.com/watch?v=4KL8YMZ-spU" passHref>
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src="/images/work/buglerock/testimonial-banner.png"
                    alt="buglerock testimonial"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Watch Video Section */}
          <div className="text-lg md:text-xl text-black text-center font-semibold flex items-center justify-center">
            <p>
              <span className="text-[#912F63]">●</span> Watch this testimonial
              video by Subiksha Muthukrishnan, Client & Business
              Strategist at BugleRock.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default buglerock;
