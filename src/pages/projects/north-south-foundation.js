import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const nsf = () => {
  return (
    <>
      <Head>
        <title>
          North South Foundation | Empowering Education Through Digital
          Storytelling
        </title>
        <meta
          name="description"
          content="Yuvabe Studios helped NSF reintroduce its brand, showcase volunteer impact, and strengthen community engagement through curated content, social media storytelling, and strategic digital branding for education-focused nonprofits."
        />
        <meta
          name="keywords"
          content="education nonprofit, volunteer storytelling, scholarship programs, community engagement, digital branding for nonprofits, student empowerment, North South Foundation, volunteer impact stories, educational programs"
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
              North South Foundation
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
              North South Foundation
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Strengthening Community Engagement Through Digital Storytelling
              and Content Strategy.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 font-secondary">
              Yuvabe Studios partnered with North South Foundation to
              reintroduce its brand through content strategy, volunteer
              storytelling, and social media engagement—helping a volunteer-run
              nonprofit communicate impact and build a stronger digital
              community.
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
              src="/images/work/nsf/logo.png"
              alt="nsf logo"
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
                <span className="w-2 h-2 bg-[#32602c] rounded-full"></span>
                <span className="text-sm text-gray-700"> Content Strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#32602c] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Content Creation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#32602c] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Community Engagement
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#32602c] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Volunteer Storytelling
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#32602c] rounded-full"></span>
                <span className="text-sm text-gray-700">Digital Branding</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#32602c]">
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
              North South Foundation (NSF) is a volunteer-driven nonprofit that
              provides scholarships to underprivileged students and runs
              educational programs to promote academic excellence. While the
              organization had strong grassroots impact, it needed a{" "}
              <strong> clear digital narrative</strong> that showcased its
              volunteers, scholars, and community-led work in a consistent and
              scalable way.
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
              Yuvabe Studios focused on{" "}
              <strong>human-centred storytelling. </strong> We built a digital
              content framework that highlighted real people behind NSF’s
              impact—volunteers, mentors, and students—while clarifying the
              organisation’s mission and strengthening long-term engagement
              across social platforms.
            </motion.p>
          </div>
        </section>

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
              <span className="text-[#05155E]">●</span> Check out some of these
              amazing designs for North South Foundation Post
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "poster_1.jpg",
                "poster_2.jpg",
                "poster_3.jpg",
                "poster_4.jpg",
                "poster_5.jpg",
                "poster_6.jpg",
                "poster_7.jpg",
                "poster_8.jpg",
                "poster_9.jpg",
                "poster_10.jpg",
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
                    src={`/images/work/nsf/${poster}`}
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
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
            viewport={{ once: true }} // Animation triggers only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
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
                  Content Audit & Strategy:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Reviewed existing channels to identify gaps, then developed a
                  focused content plan centered around impact and community.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Volunteer Highlights:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Created storytelling formats that celebrated the real people
                  behind NSF’s success—mentors, volunteers, and scholars.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Scalable Structure:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Developed a system of recurring themes and categories to
                  ensure content consistency and ease of execution for the team.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-32 pb-12 bg-white flex flex-col lg:flex-row items-center justify-between">
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
                  Generating content without relying on regular inputs from the
                  organization while keeping posts authentic and aligned with
                  NSF&apos;s voice.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Successfully launched a refreshed digital identity and content
                  framework that was well-received by volunteers and scalable
                  for long-term use.
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
              src="/images/work/nsf/icon.png"
              alt="nsf icon"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        <section className="bg-[#32602c] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold">
              &quot;Yuvabe is a talented team of creative, digital marketing
              professionals who have been instrumental in quite a few campaigns
              for us in various forms which we have deployed across email,
              social media campaigns. This has helped us get our message out to
              our constituents in an engaging manner. The team has a good
              breadth and deep knowledge of tools and the creative process work.
              It has been a pleasure to work with them and I would highly
              recommend them.&quot;
            </p>
            <p className="mt-4 text-sm font-medium">
              - Visa Meyyappan, Chief Administrative Officer,
              NorthSouth Foundation
            </p>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default nsf;
