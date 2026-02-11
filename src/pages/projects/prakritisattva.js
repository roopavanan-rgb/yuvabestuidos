import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const prakritisattva = () => {
  return (
    <>
      <Head>
        <title>
          Prakriti Sattva | Ayurvedic Skincare Rebranding & Website Design
        </title>
        <meta
          name="description"
          content="Yuvabe Studios rebranded Prakriti Sattva, creating a modern Ayurvedic skincare identity with logo, website redesign, UI/UX, and visual language that appeals to younger, conscious consumers."
        />
        <meta
          name="keywords"
          content="Prakriti Sattva, Ayurvedic skincare brand, skincare India, natural skincare, Ayurvedic products, wellness product, brand identity design, skincare website redesign, Ayurvedic logo design, Ayurvedic brand"
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
              Prakriti Sattva
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
              Prakriti Sattva
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Rebranding an Ayurvedic Skincare Brand for the Modern, Conscious
              Consumer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Yuvabe Studios partnered with Prakriti Sattva to deliver a
              complete brand identity and website redesign, modernising an
              Ayurvedic skincare brand while preserving its traditional wisdom,
              authenticity, and holistic philosophy.
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
              src="/images/work/prakritisattva/logo.png"
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
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-[#839627] pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  {" "}
                  Brand Identity Design
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Logo Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">Tagline Creation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Color Palette & Visual Language
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Website Design & UI/UX
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#839627] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Rebranding Strategy
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#839627]">
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
              Prakriti Sattva is an Ayurvedic wellness brand offering
              handcrafted skincare rooted in ancient healing traditions and
              natural ingredients. While the brand had a strong philosophical
              foundation, it needed a refreshed visual and digital identity to
              connect with younger, urban, and conscious consumers. <br />
              <br />
              The challenge was to modernise the brand without diluting its
              Ayurvedic essence or alienating its existing audience.
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
              We focused on balance, honouring tradition while introducing
              clarity, minimalism, and contemporary aesthetics. From brand
              language to digital experience, every element was designed to
              communicate trust, purity, and mindful living.
            </motion.p>
          </div>
        </section>

        {/* button */}
        <section className="h-[168px] bg-[#EDF2ED] flex items-center justify-center">
          <a
            href="https://prakritisattva.com/"
            className="flex items-center justify-between w-[1121px] h-[56px] bg-[#8396274D] rounded-md px-6 shadow-md hover:shadow-lg transition-shadow border border-[#9D9D9D]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Dot and Text */}
            <span className="flex items-center space-x-2 text-black font-semibold text-lg">
              <span className="w-2 h-2 bg-[#316714] rounded-full"></span>{" "}
              {/* Dot */}
              <span>Take a look at the Prakriti Sattva Website</span>
            </span>

            {/* Arrow */}
            <span className="text-black text-xl">
              <FaRegArrowAltCircleRight />
            </span>
          </a>
        </section>

        <section className="h-auto bg-[#EDF2ED] px-6 md:px-16 lg:px-32 py-12 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-screen-lg flex flex-col items-center rounde">
            {/* Positioned Images */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 ">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/snapshot1.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/snapshot2.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full "
                />
              </motion.div>
            </div>
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 my-6">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/snapshot3.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full "
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto  overflow-hidden rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/snapshot4.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full "
                />
              </motion.div>
            </div>
          </div>
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
                  Brand Identity and Visual Language:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Developed a modern, minimal identity system that balanced
                  Ayurvedic heritage with freshness. This included a refined
                  logo, typography, colour palette, and brand tone that felt
                  grounded yet aspirational.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Tagline Development:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Crafted a concise tagline that expressed the essence of
                  Ayurveda while resonating emotionally with today’s wellness
                  focused audience.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Redesign and UI/UX:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Redesigned the website into a mobile first, user friendly
                  experience with clean layouts, intuitive navigation, and clear
                  product storytelling, enhancing both usability and brand
                  perception.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Audience Alignment:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Aligned content structure, visuals, and messaging to appeal to
                  a younger demographic interested in clean beauty, holistic
                  wellness, and conscious consumption.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Label Section */}
        <section className="bg-[#EDF2ED] px-6 md:px-16 lg:px-32 py-12">
          <div className="flex flex-col items-center">
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-12">
              <span className="text-[#9F3A3D] mr-2">●</span> Take a Look at
              these beautiful label designs
            </h2>

            {/* Rows Container */}
            <div className="space-y-8 w-full max-w-screen-lg">
              {/* 1st, 2nd, 3rd Rows */}
              {["/images/work/prakritisattva/label1.png"].map((src, index) => (
                <motion.div
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={`Row ${index + 1}`}
                    width={1116}
                    height={148}
                    className="object-cover w-full h-[148px] rounded-md"
                  />
                </motion.div>
              ))}

              {/* 4th Row */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/prakritisattva/label4.png"
                  alt="4th Row"
                  width={1116}
                  height={483}
                  className="object-cover w-full h-[483px] rounded-md"
                />
              </motion.div>

              {/* 5th Row */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {[
                  "/images/work/prakritisattva/label5.png",
                  "/images/work/prakritisattva/label6.png",
                  "/images/work/prakritisattva/label7.png",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`5th Row Image ${index + 1}`}
                    width={356}
                    height={359}
                    className="object-cover w-full h-[359px] rounded-md"
                  />
                ))}
              </motion.div>

              {/* 7th Row */}
              <motion.div
                className="grid grid-cols-2 gap-4 justify-items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {[
                  "/images/work/prakritisattva/label10.png",
                  "/images/work/prakritisattva/label11.png",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`7th Row Image ${index + 1}`}
                    width={258}
                    height={258}
                    className="object-cover rounded-full"
                  />
                ))}
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
                  Modernising an Ayurvedic brand without losing authenticity or
                  disconnecting from its spiritual and traditional roots.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a refreshed brand identity and website that feel
                  contemporary yet deeply rooted in Ayurveda, laying a strong
                  foundation for growth, visibility, and long term brand trust.
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
              src="/images/work/prakritisattva/hair.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Two-Image Section */}
        <section className="px-6 md:px-16 lg:px-32 py-12 bg-[#D8789E] flex items-center justify-center">
          <div className="w-full max-w-screen-lg">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-12 text-center">
              <span className="text-white">●</span> Creative label mockups for
              multiple container types
            </h2>

            {/* Image Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              {[
                "/images/work/prakritisattva/product.png",
                "/images/work/prakritisattva/product2.png",
                "/images/work/prakritisattva/bodycare.webp",
                "/images/work/prakritisattva/lipcare.webp",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-[400px] aspect-square flex items-center justify-center rounded-lg overflow-hidden"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={`Mockup ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-[#EDF2ED] text-black py-12 px-8">
          <motion.div
            className="max-w-3xl mx-auto text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold">
              Yuvabe Studios truly understood the soul of Prakriti Sattva,
              rooted in Ayurveda and holistic wellness. Their mission driven and
              youth empowering approach resonated deeply with our values.
              Through collaborative creativity, they translated our vision into
              a cohesive brand and website that feel authentic, inspiring, and
              transformative. They do not just build brands, they help you build
              a legacy with heart.
            </p>
            <p className="mt-4 text-sm font-medium">
              {" "}
              — Supriya Bhat, Founder, Prakriti Sattva LLC.
            </p>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default prakritisattva;
