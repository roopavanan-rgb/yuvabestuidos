"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const teamMembers = [
  {
    name: "Priya",
    role: "Head Of Digital Marketing",
    category: "Digital Marketing",
    imagePath: "/images/team/priya.webp",
  },

  {
    name: "Sagar",
    role: "UI/UX Designer & Web Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/sagar.webp",
  },
  {
    name: "Logasundari",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/logasundari.webp",
  },
  {
    name: "Anjali",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/anjali.webp",
  },
  {
    name: "Hemapriya",
    role: "Copywriting and Branding",
    category: "Digital Marketing",
    imagePath: "/images/team/hema.webp",
  },
  {
    name: "Vanchi",
    role: "Video Editor & Motion Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/vanchi.webp",
  },
  {
    name: "Roopan",
    role: "Jr. Front end Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/roopan.webp",
  },
  {
    name: "Balaji",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/balaji.webp",
  },
  {
    name: "Jayant",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/jayant.webp",
  },
  {
    name: "Abiraj",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/abiraj.webp",
  },
  {
    name: "Bharathi",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/bharathi.webp",
  },
  {
    name: "Karthik",
    role: "Wordpress Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/karthik.webp",
  },

  {
    name: "Anupama",
    role: "AI/ML Mentor",
    category: "AI/ML",
    imagePath: "/images/team/anupama.webp",
  },
  {
    name: "Keerthana",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/keerthana.webp",
  },
  {
    name: "Dhanush",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/dhanush.webp",
  },
  {
    name: "Thamarai Kannan",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/thamaraikannan.webp",
  },
  {
    name: "Arun Kumar",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/arunkumar.webp",
  },

  {
    name: "Abinesh Kumar",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/abinesh.webp",
  },
  {
    name: "Hari Prasath",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/hariprasath.webp",
  },
  {
    name: "Bhuvana",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/bhuvana.webp",
  },
  {
    name: "Vasantharaj",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/vasanth.webp",
  },
  {
    name: "Abilash",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/abilash.webp",
  },
  {
    name: "Hariharan",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/hari.webp",
  },
  {
    name: "Shimalini",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/shimalini.webp",
  },
  {
    name: "Sharat Kumar",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/sharat.webp",
  },
  {
    name: "Poovendiran",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/poovendiran.webp",
  },
  {
    name: "Praveen",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/praveen.webp",
  },
  {
    name: "Manivel",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/manivel.webp",
  },
  {
    name: "Anishvathi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/anishvathi.webp",
  },
  {
    name: "Vinodhini",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vinodhini.webp",
  },
  {
    name: "Arthi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/arthi.webp",
  },
  {
    name: "Sindhu",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/sindhu.webp",
  },
  {
    name: "Sarguru",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/guru.webp",
  },
  {
    name: "Rajeswari",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/raji.webp",
  },
  {
    name: "Velmurugan",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/velu.webp",
  },
  {
    name: "Valantina",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/valantina.webp",
  },
  {
    name: "Niraimathy",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/niraimathy.webp",
  },
  {
    name: "Selvi",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/selvi.webp",
  },
  {
    name: "Vignesh",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vignesh.webp",
  },
  {
    name: "Sundhranandhan",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/sundhar.webp",
  },
  {
    name: "Kalaiarasi",
    role: "Data Engineer & Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/kalai.webp",
  },
  {
    name: "Arjun",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/arjun.webp",
  },
  {
    name: "Nagachandiran",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/nagachandiran.webp",
  },
  {
    name: "Hariharan",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/hariharan.webp",
  },
];

export default function TeamSection() {
  const digitalMarketingTeam = teamMembers.filter(
    (m) => m.category === "Digital Marketing",
  );
  const aiMlTeam = teamMembers.filter((m) => m.category === "AI/ML");
  const marketResearchTeam = teamMembers.filter(
    (m) => m.category === "Market Research",
  );

  const TeamCard = ({ member }) => (
    <div className="px-2 py-4 h-full flex justify-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-full max-w-[210px] h-[280px]">
        {/* IMAGE */}
        <div className="relative w-full h-[75%]">
          <Image
            src={member.imagePath}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width:728px) 50vw, (max-width:1280px) 25vw, 210px"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-end flex-1 px-3 py-2 text-left">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight truncate">
            {member.name}
          </h3>

          <p className="text-md font-secondary text-gray-600 leading-snug line-clamp-2">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-medium text-gray-800">
          Our Incredible Team
        </h2>
      </div>

      {/* DIGITAL */}
      <div className="relative w-full mb-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-purple-300/50 border-violet-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-purple-200/50 hidden  xl:flex">
          Digital <br />
          Marketing
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode
          loop
          speed={4000}
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="ticker-swiper"
        >
          {[...digitalMarketingTeam, ...digitalMarketingTeam].map(
            (member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>

      {/* AI ML REVERSE */}
      <div className="relative w-full mb-12">
        <div className="absolute right-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-[#F04E2733]/20 rounded-xl shadow-lg p-6 text-white font-medium text-4xl  items-center justify-center z-20 backdrop-blur-lg border border-orange-200/50 hidden xl:flex">
          AI/ML
        </div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode
          loop
          speed={4000}
          allowTouchMove={false}
          autoplay={{ delay: 0, reverseDirection: true }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="ticker-swiper"
        >
          {[...aiMlTeam, ...aiMlTeam].map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </div>

      {/* MARKET */}
      <div className="relative w-full mb-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-green-300/50 border-green-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-green-200/50 hidden xl:flex">
          Market <br />
          Research
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          freeMode
          loop
          speed={4000}
          allowTouchMove={false}
          autoplay={{ delay: 0 }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 12 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 6 },
          }}
          className="ticker-swiper"
        >
          {[...marketResearchTeam, ...marketResearchTeam].map(
            (member, index) => (
              <SwiperSlide key={index}>
                <TeamCard member={member} />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
}
