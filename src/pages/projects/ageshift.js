import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const ageshift = () => {
  return (
    <>
      <Head>
        <title>AgeShift App | AI-Driven Lifestyle & Wellness Platform</title>
        <meta
          name="description"
          content="Yuvabe Studios developed AgeShift, an AI-powered lifestyle management platform with mobile app, backend, and admin panel, enabling personalized health tracking, automated wellness management, and actionable insights for users and administrators"
        />
        <meta
          name="keywords"
          content="lifestyle management app, AI wellness platform, health tracking app, mobile health application, AI-driven health insights, wellness management app"
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
              AgeShift
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
              AgeShift
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Lifestyle Management and AI-Driven Wellness Platform
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Empowering users with AI-driven health recommendations, seamless
              lifestyle tracking, and automated wellness management for
              measurable improvement in daily routines.
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
              src="/images/work/ageshift/logo.svg"
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
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Mobile Application Development
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Backend API Engineering
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#205B0B] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Admin Panel Development
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[508px] border-b-8 border-[#205B0B]">
          <motion.div
            className="max-w-xl md:max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-lg text-gray-700">
              AgeShift is an intelligent lifestyle management platform designed
              to help users monitor and maintain their health, daily routines,
              and wellness goals through structured protocols. The system
              integrates a Flutter-based mobile application, a FastAPI backend,
              and a Next.js-powered Admin Panel, all connected via secure cloud
              infrastructure on Google Cloud Platform (GCP). <br />
              <br />
              Yuvabe collaborated with AgeShift to build a comprehensive
              platform that delivers AI-driven recommendations, tracks lifestyle
              protocols, and provides seamless engagement for both end-users and
              administrators. The platform ensures a unified, scalable, and
              secure experience while automating health and wellness management
              processes.
            </p>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="relative bg-[#EDF2ED] px-4 md:px-12 lg:px-32 py-16">
          {/* Title */}
          <div className="text-start mb-8">
            <p className="text-black text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-[#205B0B]">●</span> check out Ageshift app onboarding process
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 justify-items-center max-w-6xl mx-auto">
            {/* Snapshot 1 */}
            <div className="overflow-hidden">
              <Image
                src="/images/work/ageshift/onboarding1.png"
                alt="Snapshot 1"
                width={305}
                height={660}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Snapshot 2 */}
            <div className="overflow-hidden">
              <Image
                src="/images/work/ageshift/onboarding2.png"
                alt="Snapshot 2"
                width={305}
                height={660}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Snapshot 3 */}
            <div className="overflow-hidden">
              <Image
                src="/images/work/ageshift/onboarding3.png"
                alt="Snapshot 3"
                width={305}
                height={660}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
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
                  Mobile App (Flutter):
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Developed for end-users to track lifestyle protocols, receive
                  notifications, and access personalized AI insights.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Visual Identity & Tone:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Maintained a consistent aesthetic across all posts that
                  reflected Rangsutra&apos;s ethos of empowerment and
                  authenticity.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Cloud Infrastructure (GCP):
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Ensures scalability, reliability, and high performance for
                  app, backend, and admin panel..
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Admin Panel (Next.js + Tailwind + Zustand):
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Allows administrators to manage users, content, and analytics
                  dashboards efficiently.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  CI/CD & Automation:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Implemented GitHub Actions for automated builds, testing, and
                  deployment pipelines.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  AI Integration:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Embedded OpenAI models for intelligent recommendations and
                  behavioral insights.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="h-auto bg-[#908EBF]/50 px-6 md:px-16 lg:px-32 py-12 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-screen-lg flex flex-col items-center">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-12 text-center">
              <span className="text-[#5ec838]">●</span> Take a look at the{" "}
             Ageshift
              website
            </h2>

            {/* Positioned Images */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/ageshift/web-ss1.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/ageshift/web-ss2.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 my-6">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/ageshift/web-ss3.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto  overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/ageshift/web-ss4.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
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
                  Challenge: Ensuring cross-platform consistency, data
                  synchronization, secure AI integration, and scalable
                  infrastructure for a growing user base.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a robust, AI-powered lifestyle management platform
                  that enhances user engagement, automates health routines, and
                  provides administrators with actionable insights—streamlining
                  wellness management while maintaining high security and
                  performance.
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
              src="/images/work/ageshift/logo.svg"
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

export default ageshift;
