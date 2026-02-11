import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const martimandir = () => {
  return (
    <>
      <Head>
        <title>
          Matrimandir Auroville | Digital Identity & Website Design for
          Spiritual Landmark
        </title>
        <meta
          name="description"
          content="Yuvabe Studios designed a digital identity and website for the Matrimandir in Auroville, reflecting its spiritual essence, architectural brilliance, and community impact, with optimized navigation, custom illustrations, and enhanced performance."
        />
        <meta
          name="keywords"
          content="Matrimandir Auroville, Auroville spiritual center, Auroville meditation center, website design, Auroville architecture"
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
              Martimandir
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
              Matrimandir
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Creating a Digital Identity for a Global Spiritual Landmark
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with the Matrimandir team to design a
              dedicated website, brand identity, and digital architecture that
              reflect the landmark’s spiritual essence while making information,
              updates, and fundraising accessible to a global audience.
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
              src="/images/work/martimandir/logo-1.png"
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
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Logo Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Brand Identity Development
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Custom Illustrations
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Information Architecture
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Architecture
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Description Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#9F3A3D]">
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
              The Matrimandir, often called the Soul of the City, is a globally
              recognised spiritual landmark in Auroville, India. Conceived by
              Mirra Alfassa (The Mother) and designed with architect Roger
              Anger, the golden sphere symbolises peace, reflection, and
              integral yoga.
              <br />
              <br />
              The objective was to create a{" "}
              <strong>dedicated digital presence</strong> for the Matrimandir
              that honoured its spiritual and architectural significance while
              providing clarity, accessibility, and long-term usability for
              visitors, researchers, and supporters worldwide.
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
              <strong>
                {" "}
                translating spiritual meaning into digital clarity
              </strong>
              . We worked closely with the Matrimandir team to design a calm,
              intuitive, and future-ready website supported by thoughtful
              branding, structured content, and performance-optimised visuals.
            </motion.p>
          </div>
        </section>

        <section className="h-[168px] bg-[#F7FAF5] flex items-center justify-center">
          <a
            href="https://www.matrimandir.org"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#FBE9A3] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-black font-semibold text-lg">
              <span className="w-2 h-2 bg-black rounded-full"></span>{" "}
              {/* Dot */}
              <span>
                Take a look at the Matrimandir Website (This site is down for
                maintenance )
              </span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">➜</span>
          </a>
        </section>

        {/* Snapshot Section */}
        <section className="relative bg-[#F7FAF5] px-6 md:px-12 lg:px-32 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-8 justify-center">
            {[
              {
                src: "/images/work/martimandir/homepage.webp",
                alt: "Snapshot 1",
                width: 252,
                height: 500,
              },
              {
                src: "/images/work/martimandir/aboutpage.webp",
                alt: "Snapshot 2",
                width: 252,
                height: 811,
              },
              {
                src: "/images/work/martimandir/matrimandirpage.png",
                alt: "Snapshot 3",
                width: 252,
                height: 608,
              },
              {
                src: "/images/work/martimandir/lakepage.png",
                alt: "Snapshot 4",
                width: 252,
                height: 772,
              },
              {
                src: "/images/work/martimandir/petalspage.png",
                alt: "Snapshot 5",
                width: 252,
                height: 772,
              },
            ].map((img, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="object-contain w-auto h-auto"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
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
                  Brand Identity & Logo Design:
                </strong>
                <span className="text-lg text-gray-700">
                  Developed a refined logo and visual identity inspired by the
                  Matrimandir&apos;s golden sphere, symbolising consciousness,
                  meditation, and unity.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Design & Architecture:
                </strong>
                <span className="text-lg text-gray-700">
                  Designed a clean, user-friendly website presenting essential
                  information such as history, architecture, visiting
                  guidelines, and galleries through seamless navigation.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Information Architecture:
                </strong>
                <span className="text-lg text-gray-700">
                  Structured complex spiritual, architectural, and cultural
                  content into intuitive sections, including newly added{" "}
                  <strong>News</strong> and <strong>Projects</strong> sections
                  to support updates and future initiatives.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Custom Illustrations:
                </strong>
                <span className="text-lg text-gray-700">
                  Created illustrations inspired by the Matrimandir gardens and
                  spherical form, adding narrative depth while preserving visual
                  serenity.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Optimization:
                </strong>
                <span className="text-lg text-gray-700">
                  Optimised images and performance to ensure fast loading and a
                  smooth experience, even with rich visual content.
                </span>
              </li>
            </ul>
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
                  Digitally representing a sacred and culturally significant
                  landmark while maintaining reverence, clarity, and modern
                  usability.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a minimalist yet meaningful website that reflects
                  the meditative essence of the Matrimandir, provides clear
                  access to information, and serves as a strong foundation for
                  global outreach and fundraising.
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
              src="/images/work/martimandir/logo-2.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-[#9F3A3D] text-white py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold">
              Yuvabe Studios transformed our vision for a dedicated Matrimandir
              website into a complete digital experience. They worked closely
              with our team, integrating content and visuals with care. The
              result is a clear, accessible site that supports fundraising and
              outreach. Their professionalism, responsiveness, and alignment
              with our vision were outstanding.
            </p>
            <p className="mt-4 text-sm font-medium">
              {" "}
              — Antoine Colombani, Matrimandir.
            </p>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default martimandir;
