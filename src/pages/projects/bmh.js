import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const hemplanet = () => {
  return (
    <>
      <Head>
        <title>
          BMH Equipment | Industrial Solutions & B2B Digital Strategy
        </title>
        <meta
          name="description"
          content=" Discover how Yuvabe Studios enhanced BMH Equipment’s digital presence with targeted social media marketing, custom newsletters, and website enhancements—driving B2B growth and showcasing industrial storage and caster solutions with impact."
        />
        <meta
          name="keywords"
          content="industrial solutions, B2B marketing, industrial storage solutions, caster solutions, social media marketing for B2B, newsletter design, custom website enhancements, industrial, brand visibility, BMH Equipment"
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
              BMH
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
              BMH Equipment
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Driving B2B Growth Through Strategic Digital Marketing and
              Communication
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 font-secondary">
              Yuvabe Studios helped BMH Equipment strengthen its B2B digital
              presence through social media marketing, newsletter design, and
              website enhancements that improved visibility, engagement, and
              lead nurturing for industrial buyers.
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
              src="/images/work/bmh/logo.png"
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
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide in from below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Marketing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Newsletter Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Maintenance
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Custom Illustration
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#9F3A3D]">
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
            <p className="text-lg text-gray-700 font-secondary">
              BMH Equipment is a global leader in industrial storage and caster
              solutions with over 40 years of expertise. While the company had
              strong technical credibility, it needed a{" "}
              <strong>
                clear and consistent digital communication strategy{" "}
              </strong>{" "}
              to better connect with B2B audiences and highlight its focus on
              ergonomics, safety, and efficiency.
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
              Yuvabe Studios developed a{" "}
              <strong> B2B-focused digital strategy</strong> that translated
              BMH&apos;s technical expertise into accessible, engaging content.
              By aligning social media, newsletters, and website visuals, we
              helped reinforce brand authority and support long-term customer
              relationships.
            </motion.p>
          </div>
        </section>

        {/* Poster Design Section */}
        <section className="w-full bg-[#EDF2ED] px-6 py-12 flex items-center justify-center">
          <motion.div
            className="w-full max-w-screen-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 flex items-start justify-start">
              <span className="text-[#98C93C] mr-2">●</span> Take a look at
              these Newsletter for BMH
            </h2>

            {/* Posters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Poster 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/bmh/poster3.png"
                  alt="BMH Poster 1"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/bmh/poster2.png"
                  alt="BMH Poster 2"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[414px] mx-auto">
                <Image
                  src="/images/work/bmh/poster1.png"
                  alt="BMH Poster 3"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>
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
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Social Media Marketing:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Created a structured B2B content strategy and visual
                  guidelines to highlight product innovation, industry
                  expertise, and practical use cases for industrial buyers.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Newsletter Strategy:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Designed a custom HubSpot newsletter template to support
                  regular communication, client education, and lead nurturing
                  across BMH’s B2B network.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website & Visual Enhancements:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Developed bespoke illustrations and implemented ongoing
                  website updates to ensure a modern, professional, and
                  user-friendly digital experience aligned with BMH’s brand
                  identity.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Design Section */}
        <section className="bg-[#9F3A3D] px-6 md:px-16 py-12 flex items-center justify-center">
          {/* Wrapper to Center the Content */}
          <motion.div
            className="w-full max-w-screen-xl"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
            viewport={{ once: true }} // Animation occurs only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Animation duration and easing
          >
            {/* Title */}
            <h2 className="text-xl font-semibold text-white mb-8 text-start">
              <span className="text-white">●</span> Check out some highlights
              from the campaign
            </h2>

            {/* Merch Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {/* Merch Items */}
              {[
                "post1.png",
                "post2.png",
                "post3.png",
                "post4.png",
                "post5.png",
                "post6.png",
                "post7.png",
                "post8.png",
                "post9.png",
                "post10.png",
              ].map((poster, index) => (
                <motion.div
                  key={index}
                  className="bg-[#EDF2ED] rounded-lg overflow-hidden"
                  style={{ width: "100%", aspectRatio: "1/1" }} // Maintain square aspect ratio
                  initial={{ opacity: 0, scale: 0.9 }} // Initial state: hidden and slightly smaller
                  whileInView={{ opacity: 1, scale: 1 }} // When in view: fade in and scale to normal size
                  viewport={{ once: true }} // Animation occurs only once
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1, // Staggered animation for each item
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={`/images/work/bmh/${poster}`}
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
        <section className="flex items-center justify-center px-6 md:px-12 lg:px-20 py-12">
          <motion.div
            className="w-full max-w-screen-lg"
            initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // While in view: fade in and slide up
            viewport={{ once: true }} // Animation occurs only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Duration and easing
          >
            {/* Section Title */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Challenges & Wins:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Challenge:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Conducting in-depth research in the industrial storage and
                  caster market to define the right B2B personas, competitive
                  positioning, and content direction.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a cohesive digital presence where newsletters and
                  social media campaigns generated strong engagement and
                  positive client feedback—reinforcing BMH Equipment’s position
                  as a trusted and innovative leader in industrial solutions.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="relative h-[600px] bg-white px-6 md:px-12 lg:px-32 py-16 flex flex-col">
          {/* Image Container */}
          <div className="relative w-full flex justify-center mb-8">
            <div className="relative w-full  md:w-[900px] h-[300px] sm:h-[450px] rounded-xl overflow-hidden">
              <Link href="https://www.youtube.com/watch?v=FssqEYEdbfo" passHref>
                <div className="relative w-full h-full cursor-pointer">
                  <Image
                    src="/images/work/bmh/testimonial.png"
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
              <span className="text-[#98C93C]">●</span> Watch the testimonial
              video from Jack Alexander, CEO of BMH Equipment Inc., sharing his
              experience.
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
