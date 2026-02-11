import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const AurovilleMarathon = () => {
  return (
    <>
      <Head>
        <title>
          Auroville Marathon | Boosting Event Registrations Through Digital
          Strategy
        </title>
        <meta
          name="description"
          content=" Discover how Yuvabe Studios helped the Auroville Marathon achieve over 2,900+ registrations in just 15 days through a powerful digital marketing strategy combining community engagement, social media campaigns, and event storytelling."
        />
        <meta
          name="keywords"
          content="Auroville Marathon, Auroville events, sports events in India, marathon registration, running competition in India"
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
            <span> Digital Marketing</span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              AV Marathon
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
              Auroville Marathon
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Driving Event Registrations Through Social Media and Digital
              Strategy
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios led the digital marketing and social media strategy
              for the Auroville Marathon, using content-led campaigns,
              advertising, and community-driven storytelling to exceed
              registration targets within a short project timeline.
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
              src="/images/work/marathon.png"
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
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Product & Event Strategy
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Photography & Videography
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Content Creation & Graphic Design
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#05155E] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Development
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#05155E]">
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
              The Auroville Marathon is one of India&apos;s most loved community
              running events, known for its inclusive spirit where every
              participant is a winner. With growing interest year after year,
              the challenge was to drive registrations quickly while preserving
              the marathon&apos;s community-first identity. <br />
              <br />
              The project timeline was limited to three months, requiring a
              focused, agile digital strategy.
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
              Yuvabe Studios designed a{" "}
              <span className="font-semibold text-[#05155E]">
                high-intensity, short-cycle digital marketing strategy
              </span>{" "}
              partnered with aimed at increasing registrations, strengthening
              community engagement, and amplifying event visibility across
              India.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed font-secondary mb-8"
            >
              Beyond promotion,we also supported{" "}
              <span className="font-semibold text-[#05155E]">
                event communication, media coverage, and on-ground visibility,
              </span>{" "}
              ensuring a cohesive online and offline presence.
            </motion.p>
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
              <span className="text-[#05155E]">●</span> A selection of social
              media creatives, visual assets, and communication materials
              developed for the marathon campaign.
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "poster_1.png",
                "poster_2.png",
                "poster_3.png",
                "poster_4.png",
                "poster_5.png",
                "poster_6.png",
                "poster_7.png",
                "poster_8.png",
                "poster_9.png",
                "poster_10.png",
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
                    src={`/images/work/marathon/${poster}`}
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
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[534px]">
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
                  Social Media Marketing:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Leveraged Facebook, Instagram, and Mailchimp to reach runners,
                  fitness enthusiasts, and community groups while reinforcing
                  the marathon&apos;s inclusive ethos.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Daily Content Posting:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Created and published daily content to maintain momentum,
                  build anticipation, and keep registration reminders visible
                  throughout the campaign period.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Registration Target:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Set a target of 2,500 registrations within 1.5 months. Through
                  a combination of organic reach, community-driven storytelling,
                  and paid ads, the target was achieved in just 15 days. Final
                  registrations crossed 2,984+ participants.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Advertising Campaigns:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Executed targeted organic and paid campaigns for marathon
                  sign-ups and related workshops, expanding reach across India’s
                  fitness and running communities.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Design Section */}
        <section className="bg-[#05155E] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-white mb-8 text-start">
              <span className="text-white">●</span> Designed marathon
              merchandise and event materials including apparel, bibs, maps,
              medals, certificates, and on-ground signage to support participant
              experience and brand consistency.
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "poster_01.png",
                "poster_02.png",
                "poster_03.png",
                "poster_04.png",
                "poster_06.png",
                "poster_07.png",
                "poster_08.png",
                "poster_09.png",
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
                    src={`/images/work/marathon/${poster}`}
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
                  Achieving an ambitious registration target within a very short
                  timeframe while maintaining authentic, community-led
                  messaging.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Surpassed the registration goal in record time, demonstrating
                  the effectiveness of an integrated social media marketing and
                  content strategy tailored for large-scale community events.
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
              src="/images/work/marathon/runner.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Founder Section */}
        <section className="bg-[#05155E] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
          >
            <p className="text-lg font-semibold">
              &quot;The marketing campaign for Av Marathon was a huge success.
              The team&apos;s ability to exceed the registration goal so quickly
              was impressive and greatly contributed to the event&apos;s
              success.&quot;
            </p>
            <p className="mt-4 text-sm font-medium">
              {" "}
              — Auroville Marathon Team
            </p>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="px-8 py-12">
          {/* Title */}
          <motion.h2
            className="text-xl font-semibold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#05155E]">●</span> A few other things you
            might need at a marathon - Maps, Medals, Bibs, Certificates and more
          </motion.h2>

          {/* Gallery Grid */}
          <motion.div
            className="grid gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            {/* First Row */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p1.png"
                  alt="Turn Right"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p2.png"
                  alt="Go Straight"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/p3.png"
                  alt="Turn Left"
                  width={204}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/certificate-06.png"
                  alt="Certificate"
                  width={345}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/bib.png"
                  alt="Green Bib"
                  width={297}
                  height={198}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/bib2.png"
                  alt="Red Bib"
                  width={297}
                  height={198}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/work/marathon/map.png"
                  alt="Map"
                  width={356}
                  height={244}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default AurovilleMarathon;
