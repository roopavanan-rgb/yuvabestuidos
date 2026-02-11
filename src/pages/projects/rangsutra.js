import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const rangsutra = () => {
  return (
    <>
      <Head>
        <title>
          Rangsutra | Empowering Rural Artisans with Digital Storytelling
        </title>
        <meta
          name="description"
          content="Discover how Yuvabe Studios elevated Rangsutra’s brand visibility through visual storytelling, social media content, and design strategy—showcasing rural artisans’ craftsmanship and connecting them with conscious consumers."
        />
        <meta
          name="keywords"
          content="rural artisans, artisan empowerment, contemporary craft design, social media marketing for artisans, brand storytelling, visual content creation, artisan livelihoods, Rangsutra crafts, handmade products India, digital marketing for artisans"
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
              Rangsutra
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
              Rangsutra
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Amplifying Artisan Stories Through Strategic Visual Storytelling
              and Social Media
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 font-secondary">
              Yuvabe Studios partnered with Rangsutra to design a visual
              storytelling and social media strategy that highlighted artisan
              craftsmanship, strengthened brand identity, and increased
              engagement with conscious consumers across digital platforms.
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
              src="/images/work/rangsutra/banner.png"
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
                <span className="text-sm text-gray-700">
                  Brand Storytelling
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Graphic Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Social Media Content Creation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Email Marketing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9F3A3D] rounded-full"></span>
                <span className="text-sm text-gray-700">Design Strategy</span>
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
            <p className="text-lg text-gray-700 font-secondary">
              Rangsutra is a collective of rural artisans across India who
              co-own the company. The brand blends traditional handmade
              craftsmanship with contemporary design to create sustainable
              livelihoods. <br />
              <br />
              The challenge was to{" "}
              <strong>
                {" "}
                translate complex artisan narratives into clear, engaging
                digital content
              </strong>{" "}
              while preserving authenticity and cultural sensitivity.
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
              <strong>story-led visual communication </strong>. We curated
              written and visual content that foregrounded artisans, processes,
              and product stories, helping Rangsutra connect meaningfully with
              conscious consumers through social media and digital touchpoints.
            </motion.p>
          </div>
        </section>

        <section className="bg-[#9F3A3D] px-6 md:px-16 py-12 flex items-center justify-center">
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
              <span className="text-[#fff]">●</span> Check out some highlights
              from the campaign
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
                "poster_7.png",
                "poster_8.png",
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
                    src={`/images/work/rangsutra/${poster}`}
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
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Visual Design for Social Media:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Designed platform-optimised posts that showcased artisans,
                  products, and values, ensuring clarity and consistency across
                  digital channels.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Visual Identity & Tone:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Maintained a cohesive aesthetic and tone aligned with
                  Rangsutra’s ethos of empowerment, authenticity, and community
                  ownership.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Story-Driven Content Strategy:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Built each post around an artisan story or product narrative,
                  creating emotional resonance and strengthening brand
                  connection.
                </span>
              </li>

              <li>
                <strong className="text-lg font-semibold text-gray-900 ">
                  Collaborative Review Process:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700 font-secondary">
                  Worked closely with the internal Rangsutra team to refine
                  content, ensuring cultural accuracy, sensitivity, and brand
                  alignment.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Centered Image Section */}
        {/* <section className="bg-[#9F3A3D] flex items-center justify-center h-[400px] px-4 md:px-8">
          <div className="relative w-[374px] h-[261px]">
            <Image
              src="/images/work/rangsutra/handloom.png"
              alt="handloom Illustration"
              width={374}
              height={261}
              className="object-contain w-full h-full"
            />
          </div>
        </section> */}

        {/* Newsletter Section */}
        <section className="w-full bg-[#9F3A3D] px-6 py-12 flex items-center justify-center">
          <motion.div
            className="w-full max-w-screen-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-start justify-start">
              <span className="text-[#fff] mr-2">●</span> Take a look at these
              Newsletter for Rangsutra
            </h2>

            {/* Posters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Poster 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[500px] mx-auto">
                <Image
                  src="/images/work/rangsutra/newsletter-1.png"
                  alt="BMH Poster 1"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[500px] mx-auto">
                <Image
                  src="/images/work/rangsutra/newsletter-2.png"
                  alt="BMH Poster 2"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Poster 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[319px] h-[500px] mx-auto">
                <Image
                  src="/images/work/rangsutra/newsletter-3.png"
                  alt="BMH Poster 3"
                  width={319}
                  height={414}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
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
                  Representing a large and diverse artisan network through
                  limited visual formats while maintaining authenticity and
                  depth.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Successfully distilled complex artisan stories into simple,
                  impactful visual narratives that were well-received by both
                  internal stakeholders and social media audiences—strengthening
                  engagement and brand clarity.
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
              src="/images/work/rangsutra/win.png"
              alt="Runner Illustration"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </section>

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
                <span className="text-[#9F3A3D] mr-2">●</span> Take a look at
                these Illustration
              </h2>
            </motion.div>

            {/* Images Section */}
            <div className="flex flex-col md:flex-row items-start md:items-start justify-between space-y-8 md:space-y-0 my-10">
              {/* First Image */}
              <motion.div
                className="rounded-lg overflow-hidden w-full md:w-[576px] md:h-[477px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/rangsutra/women-2.png"
                  alt="Illustration 1"
                  width={576}
                  height={477}
                  className="object-contain w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="rounded-lg overflow-hidden w-full md:w-[351px] md:h-[319px] mt-4 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/rangsutra/women-1.png"
                  alt="Illustration 2"
                  width={351}
                  height={319}
                  className="object-contain w-full h-full md:ml-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default rangsutra;
