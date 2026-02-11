"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import { projects } from "/data/projects";

export default function ProjectCarousel() {
  const [currentProject, setCurrentProject] = useState(0);

  const activeProject = projects[currentProject] || projects[0];

  return (
    <div className="relative overflow-hidden py-8 bg-[url('/images/svgs/car.svg')] bg-cover bg-center md:py-16">
      {/* Heading Section */}
      <div className="relative z-10 mb-6 text-start pl-4 md:pl-10">
        <h2 className="text-lg md:text-4xl font-bold text-yellow-400">
          Work We&apos;re Proud Of
        </h2>
        <p className="text-xs md:text-lg text-white">
          Explore our featured projects across digital marketing, design, AI/ML,
          and research—each designed to deliver measurable impact and
          human-centred solutions
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setCurrentProject(swiper.realIndex)}
        breakpoints={{
          1024: { slidesPerView: 1.5 },
          768: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
        }}
        className="relative z-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className={`relative overflow-hidden rounded-lg flex items-center justify-center transition-all duration-500 mx-auto lg:mx-0 ${
                index === currentProject
                  ? "w-[96%] h-[163px] md:w-[700px] md:h-[320px] lg:w-[800px] lg:h-[364px]"
                  : "w-full h-[150px] md:w-[643px] md:h-[292px]"
              }`}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={index === currentProject ? 870 : 688}
                height={index === currentProject ? 395 : 315}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Title, Description, Tags, and Button */}
      <div className="mt-6 md:mt-8 px-4 lg:px-10 flex flex-col md:flex-row md:justify-between items-start">
        <div className="text-start">
          <h3 className="text-sm md:text-3xl font-semibold text-white">
            {activeProject.title}
          </h3>
          <p className="text-xs md:text-lg text-gray-300 mt-2">
            {activeProject.description}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {activeProject.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-yellow-300 text-black rounded-full text-[10px] md:text-sm font-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex-shrink-0">
          <Link href="/work">
            <button className="px-3 py-2 md:px-6 md:py-2 w-[100px] h-[34px] md:w-[167px] md:h-[55px] bg-yellow-400 text-black text-[10px] md:text-lg font-secondary font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
