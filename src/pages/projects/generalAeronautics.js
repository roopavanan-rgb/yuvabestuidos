import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const generalAeronautics = () => {
  return (
    <>
      <Head>
        <title>
          General Aeronautics | Drone Technology & Agricultural Innovation
        </title>
        <meta
          name="description"
          content="Yuvabe Studios redesigned General Aeronautics’ website and digital presence, highlighting agriculture, defense, and emergency medical drones with intuitive UI/UX, branding, and social media strategy for global visibility."
        />
        <meta
          name="keywords"
          content="General Aeronautics, agriculture drones India, defense drones, emergency medical delivery drones, warehouse automation drones, drone technology company, web application design, branding solutions, drone innovation India
"
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
              General Aeronautics
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
              General Aeronautics
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 w-full md:w-[80%] mx-auto md:mx-0">
              Positioning a Global Drone Technology Leader Through Strategic
              Digital Design
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with General Aeronautics to redesign its
              website, strengthen brand identity, and create intuitive UI/UX for
              web applications, helping communicate complex drone solutions
              across agriculture, defense, and humanitarian sectors with clarity
              and impact.
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
              src="/images/work/general/logo.png"
              alt="bmh"
              width={400}
              height={400}
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
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Revamp & Blog Integration
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  UI/UX Design for Web Applications
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Branding (Logo, Illustrations, Videos)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#938953] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Strategy & Content Creation
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[480px] border-b-8 border-[#938953]">
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
              General Aeronautics (GA) is an Indian drone technology company
              delivering solutions across agriculture drones, defense drones,
              emergency medical delivery, and warehouse automation. Founded by
              aerospace leaders with decades of global experience, GA combines
              frugal innovation with advanced engineering to build scalable,
              cost-effective aerial technologies. <br />
              <br />
              As the company expanded its offerings, it needed a{" "}
              <strong>clear, human-centric digital presence </strong> that could
              explain complex, multi-sector solutions while reinforcing
              credibility and innovation.
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
              Yuvabe Studios focused on{" "}
              <strong> simplifying complexity through design.</strong>
              We restructured GA&apos;s website and content to clearly
              communicate core solutions, built a cohesive brand system, and
              designed intuitive interfaces for web applications, ensuring that
              both technical and non-technical audiences could understand
              GA&apos;s impact.
            </motion.p>
          </div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://generalaeronautics.com/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#33ACA933] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-[#545454] font-semibold text-lg">
              <span className="w-2 h-2 bg-[#33ACA9] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the General Aeronautics Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[534px]">
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
                  Website Revamp & Content Structure:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Redesigned the website with improved navigation and content
                  hierarchy, highlighting key solutions including agricultural
                  drones, emergency medical drones, indoor warehouse drones, and
                  tall-tree sprayers.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Branding & Visual Identity:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Developed a refreshed logo, custom illustrations, videos, and
                  blog content that reflected GA&apos;s frugal innovation
                  philosophy and engineering expertise.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media Strategy:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Created campaign creatives highlighting humanitarian and
                  real-world impact initiatives, including Covid response,
                  locust control, and accident response drones.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  UI/UX for Web Application:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Designed user-centred interfaces to streamline drone data
                  visualisation and mission planning, improving usability for
                  operators and stakeholders.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Infographic Poster Designs Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 lg:px-32 py-12 h-auto flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            {/* Text Section */}
            <motion.div
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                <span className="text-[#938953] mr-2">●</span> Take a look at
                these Illustration
              </h2>
            </motion.div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between space-y-8 md:space-y-0 my-10">
              {/* First Image */}
              <motion.div
                className=" overflow-hidden w-full md:w-[576px] md:h-[477px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/general/drone-illustator.svg"
                  alt="Illustration 1"
                  width={576}
                  height={477}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className=" overflow-hidden w-full md:w-[450px] md:h-[400px] mt-4 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/general/multi-copter.svg"
                  alt="Illustration 2"
                  width={351}
                  height={319}
                  className="object-contain w-full h-full md:mx-auto"
                />
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-start justify-between space-y-8 md:space-y-0 ">
              {/* First Image */}
              <motion.div
                className="overflow-hidden w-full md:w-[576px] md:h-[477px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/general/survillance.png"
                  alt="Illustration 1"
                  width={576}
                  height={477}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className=" overflow-hidden w-full md:w-[450px] md:h-[400px] mt-4 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/general/field-illusration.png"
                  alt="Illustration 2"
                  width={351}
                  height={319}
                  className="object-contain w-full h-full md:ml-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenges & Wins Section */}
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
                  Presenting GA&apos;s diverse and technically complex drone
                  solutions across agriculture, defense, and humanitarian use
                  cases in a way that was simple, engaging, and accessible.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a modern digital ecosystem that reinforced General
                  Aeronautics&apos; position as a trusted leader in drone
                  innovation—improving clarity, usability, and visibility across
                  web, applications, and brand communication.
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
              src="/images/work/general/logo.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default generalAeronautics;
