import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const Agroecology = () => {
  return (
    <>
      <Head>
        <title>
          Agroecology India | Sustainable Farming Knowledge Hub & Platform
          Design
        </title>
        <meta
          name="description"
          content="Yuvabe Studios redesigned Agroecology India’s platform into a digital knowledge hub with 100+ resources, interactive mapping, and real-time collaboration tools for sustainable farming."
        />
        <meta
          name="keywords"
          content="sustainable farming in India, sustainable agriculture in India, agroecology, agroecology website, digital map, interactive digital map, consortium website design, knowledge hub"
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
              Agroecologicalindia
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
              Agroecologyindia
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Building a Digital Knowledge Hub for Sustainable Food and Farming
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with Agroecology India to design and
              develop a scalable digital knowledge hub that supports sustainable
              farming, research access, and real-time collaboration across
              India&apos;s agroecology ecosystem.
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
              src="/images/work/cat/logo.png"
              alt="cat"
              width={400}
              height={400}
              className="object-contain  sm:w-[400px] sm:h-[400px]"
            />
          </motion.div>
        </header>

        <section className="px-6 md:px-12 py-6 border-b border-gray-200 bg-[#2E7574]/10 items-center justify-items-center w-full overflow-hidden">
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
                <span className="w-2 h-2 bg-[#2E7574] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Knowledge Hub Design
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2E7574] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Bharat Ecological Tracker
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2E7574] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  White Paper Structuring
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#2E7574] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Data Extraction and Automation
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#2E7574]">
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
              The Consortium for Agroecological Transformations (CAT) is working
              towards guiding 40 million farmers in India towards sustainable
              farming practices by 2030, supporting a just and resilient food
              system.
              <br />
              <br />
              To support this mission, Agroecology India needed a digital
              platform that could house large volumes of research, visualise
              nationwide initiatives, and enable collaboration between farmers,
              researchers, NGOs, and policymakers.
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
              We focused on transforming a complex, research-heavy initiative
              into an accessible, user-friendly digital knowledge hub. The goal
              was to make agroecology data discoverable, navigable, and
              actionable while ensuring performance, scalability, and clarity
              for diverse audiences.
            </motion.p>
          </div>
        </section>

        <section className="h-[168px] bg-[#F7FAF5] flex items-center justify-center">
          <a
            href="https://agroecologyindia.org/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#2E7574]/30 rounded-md px-6 shadow-md hover:shadow-lg transition-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-black font-semibold text-lg">
              <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Agroecological Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">➜</span>
          </a>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex flex-col items-center justify-start px-8 py-12 h-auto">
          <motion.div
            className="max-w-3xl w-full"
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
                  Knowledge Hub Development:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Organised over 100 research papers, case studies, and white
                  papers into a structured digital library, creating a central
                  resource for sustainable agriculture and agroecology in India.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Wireframing and Information Architecture:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Designed clear content hierarchies and navigation flows to
                  help users easily explore research, initiatives, and live data
                  across the platform.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Interactive Digital Mapping:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Developed the Bharat Agroecology Tracker, an interactive
                  online map visualising more than 1,000 agroecology initiatives
                  across India, enabling location-based discovery and insights.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Survey and Data Automation:{" "}
                </strong>
                <span className="text-lg text-gray-700">
                  Implemented survey workflows that allow real-time data
                  submissions, automatically updating the online mapping system
                  and keeping information current and scalable.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Consortium Website Design:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Built a user-friendly consortium website tailored for NGOs,
                  farmers, researchers, and policymakers, ensuring intuitive
                  access to resources, case studies, and live datasets.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="bg-[#F7FAF5] py-16">
          <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 mb-8">
            {/* First Image */}
            <motion.div
              className="w-[80%] md:w-[600px] h-auto overflow-hidden rounded-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/cat/snapshot.png"
                alt="snapshot of our works"
                width={546}
                height={362}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="w-[80%] md:w-[600px] h-auto overflow-hidden rounded-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/cat/snapshot-2.png"
                alt="snapshot of our works"
                width={546}
                height={362}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>

          <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 ">
            {/* First Image */}
            <motion.div
              className="w-[80%] md:w-[600px] h-auto overflow-hidden rounded-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/cat/snapshot-3.png"
                alt="snapshot of our works"
                width={546}
                height={362}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="w-[80%] md:w-[600px] h-auto overflow-hidden rounded-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/cat/snapshot-4.png"
                alt="snapshot of our works"
                width={546}
                height={362}
                className="object-cover w-full h-full"
              />
            </motion.div>
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
                  Handling high-volume survey submissions and live data updates
                  while maintaining platform performance, speed, and
                  reliability..
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a custom Next.js and Supabase solution that enables
                  real-time survey-to-map integration, seamless collaboration,
                  and effortless scalability for thousands of entries across
                  India.
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
              src="/images/work/cat/logo-2.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        <section className="relative h-[600px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Image Container */}
          <div className="relative w-full flex justify-center mb-8">
            <div className="relative w-full  md:w-[900px] h-[300px] sm:h-[450px] rounded-xl overflow-hidden">
              <Link href="https://youtu.be/2LkGlhTMgAQ" passHref>
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src="/images/work/cat/testimonial.png"
                    alt="hemplanet"
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
              <span className="text-[#2E7574]">●</span> Watch the testimonial
              video by Minhaj Ameen, Operations Director at Agroecology India,
              sharing their experience working with Yuvabe Studios.
            </p>
          </div>
        </section>
        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default Agroecology;
