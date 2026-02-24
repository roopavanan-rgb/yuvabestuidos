import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const timelineData = [
  {
    year: "2020",
    title: "Foundation of Yuvabe",
    description:
      "Yuvabe was created with a mission to empower young adults in Auroville through skill-building, community service, and personal growth.",
    dotPosition: { top: "45%", left: "4%" },
  },
  {
    year: "2021",
    title: '"Work. Serve. Evolve." Model Introduced',
    description:
      "We developed a unique growth model blending professional development, meaningful service, and inner transformation.",
    dotPosition: { top: "30%", left: "20%" },
  },
  {
    year: "2022",
    title: "Partnership and Collaborations",
    description:
      "Formed strong collaborations with global tech firms, nonprofits, and research organizations—expanding our reach and impact.",
    dotPosition: { top: "35%", left: "37%" },
  },
  {
    year: "2023",
    title: "Programs and Impact",
    description:
      "Scaled our training programs, workshops, and community initiatives, strengthening youth participation and social impact in Auroville.",
    dotPosition: { top: "15%", left: "55%" },
  },
  {
    year: "2024",
    title: "Launch of Yuvabe Education",
    description:
      "Introduced the STEAM Lab, creating hands-on learning experiences in technology, creativity, and innovation for young learners.",
    dotPosition: { top: "32%", left: "72%" },
  },
  {
    year: "2025",
    title: "Looking Ahead",
    description:
      "Continuing to explore new frontiers with a vision to empower more youth and deliver meaningful, future-ready solutions.",
    dotPosition: { top: "-5%", left: "90%" },
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null); // Set initial state to null to avoid SSR issues

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Handle window resize for responsive dot positioning
  useEffect(() => {
    let lastIndex = 0;

    const unsubscribe = scrollYProgress.on("change", (v) => {
      const newIndex = Math.min(
        timelineData.length - 1,
        Math.floor(v * timelineData.length),
      );

      if (newIndex !== lastIndex) {
        lastIndex = newIndex;
        setActiveIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + timelineData.length) % timelineData.length,
    );
  };

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[url('/images/svgs/time.svg')] bg-cover bg-center border-t-2 border-violet-700 "
    >
      <div className="h-[400vh] relative">
        {" "}
        {/* scroll zone height */}
        <div className="sticky top-0 flex flex-col items-center justify-center min-h-screen px-4 py-10">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:text-[40px] sm:text-5xl text-2xl font-primary font-medium text-center mb-2 "
          >
            Tracing Our Roots
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-md sm:text-lg mb-4 font-secondary font-medium"
          >
            Tracing Yuvabe&apos;s Growth as a Creative & Technology Studio
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-md sm:text-lg mb-8 font-secondary"
          >
            A timeline of how Yuvabe evolved from a youth-focused initiative
            into a multidisciplinary creative and technology studio
          </motion.p>

          {/* Wave Image with Dots */}
          <div className="relative w-[360px] sm:w-full h-[59.37px] sm:h-48 md:h-56 lg:h-64  my-8 flex justify-center items-center">
            <Image
              src="/images/profile/roots.png"
              alt="Timeline Wave"
              fill
              className="w-full h-full "
            />

            {/* Dots Positioned Along the Wave */}
            <div className="absolute w-full h-full">
              {timelineData.map((data, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-2 h-2 sm:w-4 sm:h-4 rounded-full transition 
           ${
             activeIndex === index
               ? "bg-[#5829c7] shadow-[0_0_10px_2px_rgba(255,202,45,0.6)]"
               : "bg-gray-400 hover:shadow-[0_0_10px_2px_rgba(255,202,45,0.4)]"
           }`}
                  // style={{
                  //   top:
                  //     windowWidth <= 393
                  //       ? data.dotPosition.mobileTop
                  //       : data.dotPosition.top,
                  //   left:
                  //     windowWidth <= 393
                  //       ? data.dotPosition.mobileLeft
                  //       : data.dotPosition.left,
                  style={{
                    top: data.dotPosition.top,
                    left: data.dotPosition.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  // whileInView={{ scale: activeIndex === index ? 1.2 : 1 }}
                />
              ))}
            </div>
          </div>

          {/* Text and Description Section */}
          <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-5xl px-8 my-8 font-primary font-semibold border-l-4 border-violet-800">
            {/* Left Side Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 md:pl-0 text-start"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-violet-900">
                  {timelineData[activeIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-blue-700 font-bold">
                  {timelineData[activeIndex].year}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right Side Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 md:pr-0 text-start sm:mt-0 mt-4"
              >
                <p className="text-violet-700 text-sm sm:text-base font-secondary font-semibold">
                  {timelineData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
        </div>
      </div>
    </section>
  );
}
