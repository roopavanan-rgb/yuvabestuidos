import { motion } from "framer-motion";
import Image from "next/image";
import globeImage from "../../public/images/about/hero.gif";
import ClientLogoSlider from "./ClientLogoSlider";

export default function AboutHeroSection() {
  return (
    <div>
      {/* About Us Section */}
      <div className="relative overflow-hidden py-24 px-6 lg:px-24 flex flex-col lg:flex-row items-center bg-white bg-[url('/images/about/bg.svg')] bg-cover bg-center">
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Left Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-1/2 relative z-20"
        >
          <h2 className="text-5xl font-medium font-primary text-[#FFCA2D] mb-6 px-6 lg:px-12">
            Who We Are?
          </h2>
          <p className="text-white text-lg mb-6 font-secondary font-medium px-4 lg:px-12">
            Yuvabe Studios is a human-centric creative studio based in
            Auroville, blending design, digital marketing, AI and ML
            development, and market research to help organisations grow with
            clarity, creativity, and technology.
            <br /> Rooted in Auroville&apos;s culture of innovation and
            sustainable living, we bring together young innovators and
            experienced professionals who transform challenges into meaningful
            solutions.
          </p>
          <p className="text-white text-lg mb-6 font-secondary font-medium px-4 lg:px-12">
            Our work combines purpose, design, and technology to support brands,
            nonprofits, startups, tech companies, and social enterprises across
            India and worldwide.
          </p>
        </motion.div>

        {/* Right Globe Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative lg:w-1/2 w-full flex justify-center lg:justify-center mt-6 lg:mt-0 z-20"
          onContextMenu={(e) => e.preventDefault()}
        >
          <Image
            src={globeImage}
            alt="Globe illustration"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <motion.div
        className="bg-white py-6  w-full overflow-hidden  text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Client Logo Slider */}
        <ClientLogoSlider />
      </motion.div>

      {/* Our Mission */}
      <motion.div
        className="flex justify-center items-center py-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="p-4
    max-w-[1200px] w-full 
    lg:h-[320px] 
    rounded-2xl
    text-start 
    flex flex-col justify-center items-center
    bg-[linear-gradient(95.72deg,#5829C7_-1.05%,rgba(88,41,199,0.2)_152.75%)]
    shadow-[5px_5px_30px_rgba(0,0,0,0.1)]
    backdrop-blur-[17.5px]
  "
        >
          <motion.h2
            className="text-2xl sm:text-4xl font-primary font-semibold text-yellow-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-white text-base md:text-xl font-secondary font-light leading-normal text-justify sm:leading-relaxed tracking-wide w-[280px] md:w-[800px] mx-auto	"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our mission is to bridge the gap between traditional approaches and
            modern innovation.
            <br />
            We help organisations unlock new opportunities through creative
            design, intelligent technology, and human-centred strategy, while
            empowering our community with meaningful and future-ready solutions.<br/>
            Every project reflects clarity, creativity, integrity, and long-term
            impact.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
