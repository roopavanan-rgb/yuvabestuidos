import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const maatram = () => {
  return (
    <>
      <Head>
        <title>
          Maatram | Mental Health Support Website & Brand Identity in
          Auroville{" "}
        </title>
        <meta
          name="description"
          content="Yuvabe Studios designed a user-friendly website and meaningful logo for Maatram, strengthening mental health awareness and community care in Auroville."
        />
        <meta
          name="keywords"
          content="Maatram Auroville, mental health support, website design, brand identity, logo design, User-friendly site, mental health awareness, digital presence"
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
              Maatram
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
              Maatram
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Designing a Digital Presence for Mental Health Support in
              Auroville
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with Maatram to design a clear,
              compassionate digital identity through branding, logo design, and
              a user-friendly website, making mental health support in Auroville
              more visible, accessible, and community-focused.
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
              src="/images/work/maatram/logo.png"
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
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Brand Identity</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Logo Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Optimization
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#33ACA9]">
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
              Maatram is Auroville’s leading mental health support initiative,
              known for its inclusive and systemic approach to well-being. Their
              work looks beyond individual symptoms, addressing the cultural,
              emotional, and spiritual contexts that shape mental health. <br />
              <br />
              The challenge was to translate this deeply human mission into a
              <strong>calm, trustworthy digital presence</strong>, despite
              limited visual assets, while ensuring clarity, accessibility, and
              cultural relevance.
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
              Yuvabe Studios focused on <strong> clarity through care</strong>.
              We created a culturally grounded brand identity and a thoughtfully
              structured website that reflects Maatram&apos;s values, supports
              ease of navigation, and invites individuals to seek help without
              overwhelm or stigma.
            </motion.p>
          </div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://maatram.org.in/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#33ACA933] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-[#545454] font-semibold text-lg">
              <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Maatram Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center h-auto bg-white px-6 md:px-12 lg:px-32 py-12">
          <motion.div
            className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Process & Key Points:
              </h2>
              <h3 className="text-lg  text-gray-700 mb-4">
                <strong className="font-semibold">
                  Logo Design & Visual Identity:
                </strong>{" "}
                Designed a logo inspired by traditional kolam motifs,
                symbolising transformation, continuity, and support—rooted in
                local culture and meaning.
              </h3>
              <ul className="space-y-4 text-gray-700 tracking-wide leading-relaxed">
                <li>
                  <strong className="font-semibold">
                    Colour & Typography System:
                  </strong>{" "}
                  Selected calming, inclusive colours and clean, approachable
                  typography to create a sense of safety, trust, and emotional
                  balance across digital and print formats.
                </li>
                <li>
                  <strong className="font-semibold">
                    Website Design & Structure:
                  </strong>{" "}
                  Organised content into clear sections—What, Why, How, and
                  Who—making it easier for visitors to understand Maatram&apos;s
                  approach and services at a glance.
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-lg  text-gray-700 mb-4 md:mt-[38px]">
                <strong className="font-semibold">Website Design</strong>{" "}
                Structured content into clear sections (What, Why, How, Who) for
                intuitive navigation.
              </h3>
              <ul className="space-y-4 text-gray-700 tracking-wide leading-relaxed">
                <li>
                  <strong className="font-semibold">
                    Core Messaging & Content Editing:
                  </strong>{" "}
                  Refined language to reflect Maatram&apos;s systemic mental
                  health philosophy, ensuring clarity, consistency, and
                  accessibility for a diverse audience.
                </li>
                <li>
                  <strong className="font-semibold">
                    Website Optimisation:
                  </strong>{" "}
                  Optimised layout and content flow to improve usability and
                  performance, even with limited imagery.
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Mockups Section */}
        <section className="h-auto bg-[#33ACA9] px-6 md:px-16 lg:px-32 py-12 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-screen-lg flex flex-col items-center">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-12 text-center">
              <span className="text-white">●</span> Some Mockups Exploring The
              Maatram Logo, Both English and Tamil, Applied to Various Places
            </h2>

            {/* Positioned Images */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto rounded-tl-[16px] overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/maatram/mockup_1.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto rounded-tl-[16px] overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/maatram/mockup_2.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
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
                Creating a meaningful and credible digital presence with minimal
                visual content, while ensuring sensitivity to mental health and
                alignment with Auroville&apos;s cultural context.
              </p>
            </div>

            {/* Wins Column */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wins</h3>
              <p className="text-base text-gray-700 mb-4 font-secondary ">
                Delivered a warm, user-friendly mental health website and a
                culturally resonant brand identity that strengthened community
                connection, improved visibility, and established lasting trust
                and recall.
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
                    src="/images/work/maatram/testimonial-banner.png"
                    alt="maatram testimonial video"
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
              <span className="text-[#33ACA9]">●</span> Watch this testimonial
              video for Yuvabe by Megha, From Maatram
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default maatram;
