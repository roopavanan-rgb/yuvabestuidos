import React, { Fragment, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NextSeo } from "next-seo";
import {
  digitalProjects,
  designProjects,
  aimlProjects,
  marketResearchProjects,
} from "../../data/work";
import TestimonialsSection from "@/components/Testomonial";

export default function WorkPage() {
  const digitalSliderRef = useRef(null);
  const designSliderRef = useRef(null);
  const aimlSliderRef = useRef(null);
  const marketResearchSliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <NextSeo
        title="Take a Glance at Our Projects | Yuvabe Studios"
        description="At Yuvabe Studios, our projects span across digital marketing, design, AI/ML, and market research, each crafted to deliver creativity with measurable impact. From building engaging campaigns and intuitive websites to creating brand identities and exploring data-driven solutions, our work reflects a blend of innovation, storytelling, and strategy."
        canonical="https://yuvabestudios.com/work"
        openGraph={{
          url: "https://yuvabestudios.com/work",
          title: "Our Work | Yuvabe Studios",
          description:
            "Discover Yuvabe Studios' top projects that highlight creativity and innovation in digital marketing, web design, and AI/ML.",
          images: [
            {
              url: "https://yuvabestudios.com/images/profile/logo.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios Portfolio",
            },
          ],
          site_name: "Yuvabe Studios",
        }}
        twitter={{
          handle: "@YuvabeStudios",
          site: "@YuvabeStudios",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link rel="icon" href="/yb-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Json Ld schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "CollectionPage",
                  "@id": "https://yuvabestudios.com/work#workpage",
                  url: "https://yuvabestudios.com/work",
                  name: "Work | Yuvabe Studios",
                  description:
                    "Explore Yuvabe Studios’ selected work, campaigns, and case studies across digital marketing, design, AI/ML, and research projects.",
                  publisher: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://yuvabestudios.com/work#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://yuvabestudios.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Work",
                      item: "https://yuvabestudios.com/work",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      {/* First Section */}
      <section className="h-[300px] bg-white flex items-start px-8 md:px-12 lg:px-32 py-8">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-medium text-[#371B34] mb-4">
            Take a Glance at Our Best Work
          </h1>
          <p className="text-xl md:text-2xl text-[#5829C7] font-secondary font-semibold mb-4">
            We&apos;d love to hear from you!
          </p>
          <p className="text-lg md:text-xl font-medium text-[#757575]">
            Explore a curated selection of projects across digital marketing,
            design, AI, and research. Each case study reflects our human-centred
            approach and focus on measurable impact.
          </p>
        </motion.div>
      </section>

      {/* Digital Marketing Section */}
      <section className="relative py-4 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between">
          {/* Left Panel with Title and Navigation Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(88,41,199,1) 0%, rgba(88,41,199,0.7036064425770308) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital
              <br />
              Marketing
            </h2>
            <div className="flex space-x-4 border border-[#5829C7] ml-0 md:ml-8 py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.26px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#5829C7] flex items-center justify-center text-[#5829C7]"
                onClick={() => digitalSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-[#5829C7] flex items-center justify-center text-[#5829C7]"
                onClick={() => digitalSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Right Panel with Slider */}
          <div className="w-full md:w-[70%] ">
            <Slider {...settings} ref={digitalSliderRef}>
              {digitalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Project Card */}
                  <div className="bg-white shadow-lg border border-purple-300 rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#5829C7] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[126px] h-[28.95px] bg-purple-100 text-[#3500F0] rounded-lg text-sm font-medium border border-[#5829C7] hover:bg-purple-200 transition-all duration-300">
                          <span className="mr-2">Read More</span>
                          <IoIosArrowForward className="text-[#3500F0]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* left: Project Cards */}
          <div className="w-full md:w-[70%] ">
            <Slider {...settings} ref={designSliderRef}>
              {designProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card Container */}
                  <div className="bg-white shadow-lg border border-blue-300 rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap ">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#2C73D2] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[100px] sm:w-[126px] h-[30px] sm:h-[32.95px] bg-blue-100 text-[#2C73D2] rounded-lg text-sm font-medium border border-[#2C73D2] hover:bg-blue-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#2C73D2]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* right: Heading and Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-28"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,119,255,1) 0%, rgba(167,206,251,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Design
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 border ml-0 md:ml-28 border-[#2C73D2] py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#2C73D2] flex items-center justify-center text-[#2C73D2]"
                onClick={() => designSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2  border-[#2C73D2] flex items-center justify-center text-[#2C73D2]"
                onClick={() => designSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI/ML Section */}
      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse md:flex-row md:items-end justify-between">
          {/* Left: Title and Navigation */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0 "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left ml-0 md:ml-8"
              style={{
                background:
                  "linear-gradient(90deg, rgba(240,78,39,1) 0%, rgba(241,161,142,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI/ML
            </h2>
            <div className="flex space-x-4 ml-0 md:ml-8 border border-[#FF5722] py-2 px-4 rounded-3xl  w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#FF5722] flex items-center justify-center text-[#FF5722]"
                onClick={() => aimlSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-[#FF5722] flex items-center justify-center text-[#FF5722]"
                onClick={() => aimlSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Right: Project Cards */}
          <div className="w-full md:w-[70%] ">
            <Slider {...settings} ref={aimlSliderRef}>
              {aimlProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto bg-white shadow-lg border border-orange-300 rounded-lg p-4">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#FF5722] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex  justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[126px] h-[32.95px] bg-orange-100 text-[#FF5722] rounded-lg text-sm font-medium border border-[#FF5722] hover:bg-orange-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#FF5722]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="relative py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end">
          {/* left: Project Cards */}
          <div className="w-full md:w-[70%] ">
            <Slider {...settings} ref={marketResearchSliderRef}>
              {marketResearchProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card Container */}
                  <div className="bg-white shadow-lg border border-[#0F8745] rounded-lg p-4 w-[100%] sm:w-[417.55px] mx-auto sm:h-[420px] h-auto">
                    <div className="relative w-full max-w-[95%] sm:max-w-[372px] h-[194px] sm:h-[258px] mx-auto rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags and Read More Button */}
                    <div className="flex items-center justify-between flex-wrap ">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 items-center h-[32.85px]">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-[#0F8745] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <Link href={project.link}>
                        <button className="flex justify-center ml-1 md:ml-0 mt-3 md:mt-0 items-center w-[100px] sm:w-[126px] h-[30px] sm:h-[32.95px] bg-green-100 text-[#0F8745] rounded-lg text-sm font-medium border border-[#0F8745] hover:bg-green-200 transition-all duration-300">
                          <span className="mr-1">Read More</span>
                          <IoIosArrowForward className="text-[#0F8745]" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* right: Heading and Buttons */}
          <motion.div
            className="w-full md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,135,69,1) 0%, rgba(16,233,114,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Market <br />
              Research
            </h2>

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-4 border border-[#0F8745] py-2 px-4 rounded-3xl w-[132.64px] sm:w-[132.64px] h-[64.24px] sm:h-[64.26px]">
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2 border-dashed border-[#0F8745] flex items-center justify-center text-[#0F8745]"
                onClick={() => marketResearchSliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="w-[44.84px] sm:w-[44.84px] h-[44.84px] sm:h-[44.84px] rounded-full border-2  border-[#0F8745] flex items-center justify-center text-[#0F8745]"
                onClick={() => marketResearchSliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </Fragment>
  );
}
