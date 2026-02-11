import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const hemplanet = () => {
  return (
    <>
      <Head>
        <title>Project-365 - Local Food Education</title>
        <meta
          name="description"
          content="Discover how we helped Project-365 grow awareness through strategic product campaigns, social media marketing, and eco-friendly hemp solutions."
        />
        <meta
          name="keywords"
          content="Project-365, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span> Digital Marketing</span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Solitude Farm
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
              Solitude Farm
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Community Engagement Growth through Year-Long Digital Marketing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios executed Project 365, a year-long digital marketing
              campaign for Solitude Farm, combining social media marketing,
              content creation, website redesign, and automation to promote
              farm-to-table living and sustainable farming practices in India.
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
              src="/images/work/project-365/solitudefarm-logo.png"
              alt="solitudefarm"
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
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Digital Campaign Strategy
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Content Creation & Graphic Design
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Marketing Automation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#98C93C] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Redesign & Blog Integration
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-16 h-auto border-b-8 border-[#205B0B]">
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
              Solitude Farm is a permaculture-based farm and café in Auroville
              that champions local food systems, sustainable agriculture, and
              farm-to-table living. Alongside farming, the farm runs a Farm
              Fresh Basket Service, a community-supported agriculture initiative
              supplying seasonal produce to the bioregion. <br />
              <br />
              The challenge was not awareness alone, but sustained visibility
              and daily engagement without overwhelming the internal team.
            </p>
          </motion.div>
        </section>

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
              In 2023,{" "}
              <span className="font-semibold text-[#3500F0]">
                Yuvabe Studios
              </span>{" "}
              partnered with{" "}
              <span className="font-semibold text-[#3500F0]">
                Solitude Farm
              </span>{" "}
              to design and execute <span className="italic">Project 365</span>{" "}
              — a structured, year-long digital marketing campaign built around
              consistency, education, and automation.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-[#98C93C]/20 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
                The goal was to:
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base md:text-lg leading-relaxed font-secondary">
                <li>Educate audiences about organic farming in India</li>
                <li>
                  Build daily engagement around food, farming, and community
                </li>
                <li>Increase visibility for the Farm Fresh Basket Service</li>
                <li>Reduce manual effort through automated publishing</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Design Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-black mb-8 text-start">
              <span className="text-[#98C93C]">●</span> A curated selection of
              campaign creatives and communication materials developed during
              Project 365.
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "img-1.png",
                "img-2.png",
                "img-3.png",
                "img-4.png",
                "img-5.png",
                "img-6.png",
                "img-7.png",
                "img-8.png",
                "img-9.png",
                "img-10.png",
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
                    src={`/images/work/project-365/${poster}`}
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
                  Automated Content Publishing:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Built a system to auto-publish content across WordPress,
                  Facebook, Instagram, and Mailchimp, ensuring consistency while
                  saving time for the farm team.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Daily Content Management:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Planned and produced daily posts, articles, visuals, and
                  educational content highlighting sustainable farming
                  practices, local produce, and farm life.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Redesign & Blog Integration:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Redesigned the website to improve visibility for the basket
                  service, workshops, and organic farming initiatives, with blog
                  integration for long-form education.
                </span>
              </li>
              {/* Key Point 4 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Organic + Paid Campaigns:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Ran a mix of organic and paid campaigns to promote workshops,
                  local produce, and farm events, strengthening awareness of the
                  farm-to-table movement.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="relative bg-[#205B0B] px-6 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              <span className="text-[#98C93C]">●</span> Selected views from the
              refreshed Solitude Farm website showcasing improved structure,
              content clarity, and service visibility.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 max-w-7xl mx-auto">
            {/* First Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[962.25px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-1.png"
                alt="Snapshot 1"
                width={252}
                height={962.25}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[811px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-2.png"
                alt="Snapshot 2"
                width={252}
                height={811}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Third Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[608px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-3.png"
                alt="Snapshot 3"
                width={252}
                height={608}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Fourth Image */}
            <motion.div
              className="overflow-hidden w-[252px] h-[772px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src="/images/work/project-365/home-4.png"
                alt="Snapshot 4"
                width={252}
                height={772}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
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
              <strong>Challenge: </strong>Managing daily content across multiple
              platforms without losing quality, consistency, or operational
              efficiency.
              <br />
              <br />
              <strong>Win: </strong> A fully automated, content-led digital
              marketing system that boosted community engagement, improved
              operational efficiency, and scaled visibility for Solitude
              Farm&apos;s community-supported agriculture model.
            </p>
          </motion.div>

          {/* Image with Link */}
          <motion.div
            className="relative w-full mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 items-center justify-center h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="https://youtu.be/yz2ksYMFzT8" passHref>
              <div className="relative w-full h-full cursor-pointer">
                <Image
                  src="/images/work/project-365/banner.png"
                  alt="Solitude Farm"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </Link>
          </motion.div>

          {/* Watch Video Section */}
          <motion.div
            className="text-lg md:text-xl text-black font-semibold flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>
              <span className="text-[#98C93C]">●</span> Watch the Project 365
              wrap-up video capturing the spirit of local food, community, and
              sustainable living.
            </p>
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#205B0B] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide up
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            <p className="text-2xl font-medium ">
              “The Project 365 team exceeded our expectations with their
              innovative approach and dedication. Their automated system and
              daily content strategy truly transformed our online presence.”
            </p>
            <p className="mt-4 text-xl font-regular font-secondary">
              — Krishna McKenzie, Founder, Solitude Farm & Café
            </p>
          </motion.div>
        </section>

        {/* Snapshot Section */}

        <section className="relative h-[600px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Image Container */}
          <div className="relative w-full flex justify-center mb-8">
            <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
              <Link
                href="https://www.instagram.com/reel/Cq73CS1PjQ5/?igsh=eHA0dXJnMTNkZWZk"
                passHref
              >
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src="/images/work/project-365/Krishna.png"
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
              <span className="text-[#98C93C]">●</span> Watch this testimonial
              video by Krishna Mckenzie, Founder of Solitude Farm & Cafe
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default hemplanet;
