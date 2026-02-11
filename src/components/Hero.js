import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState("Human Centric");
  const words = ["Human Centric", "Sustainable", "Value Driven"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        return words[(currentIndex + 1) % words.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  });

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center py-4 px-8 lg:px-20 bg-white bg-[url('/images/svgs/bg.svg')] bg-cover bg-center overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideUpVariants}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Hero video */}
      <motion.div className="order-1 lg:order-2 w-full lg:w-full mt-10 lg:mt-0 flex justify-center lg:justify-end relative px-5 hidden lg:block">
        <div className="w-full h-auto relative">
          <video
            src="/videos/yubot.webm"
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-auto top-1/2 transform -translate-y-1/2 
                 w-[180%] md:w-[120%] right-[-40%] md:right-[-10%]"
            onContextMenu={(e) => e.preventDefault()}
            onError={(e) => {
              e.target.outerHTML = `<img src="/images/profile/bot.png" class="absolute w-full h-full object-cover" alt="Background" />`;
            }}
          />
        </div>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="order-1 lg:order-2 relative w-[150%] flex justify-center mt-6 lg:mt-0 z-20 block lg:hidden"
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src="/images/profile/yubot.gif"
          alt="Globe illustration"
          width={1000}
          height={1000}
          priority
          className="w-[200%] h-[200%]"
        />
      </motion.div>

      {/* Text and Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 lg:order-1 text-center lg:text-left space-y-6 max-w-lg px-4 lg:px-0 pl-0 lg:pl-10 pt-4 lg:pt-0 ml:0 lg:ml-6 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl leading-tight text-white"
        >
          <span className="font-semibold">We are a</span> <br />
          <span className="text-yellow-400 font-extrabold">
            {currentWord}
          </span>{" "}
          <br />
          <span className="font-semibold">creative studio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl text-white font-medium mt-4"
        >
          We specialise in human-centred, results-driven solutions designed to
          move your business forward.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => (window.location.href = "mailto:info@yuvabe.com")}
          className="font-primary font-semibold border-2 border-violet-700 bg-yellow-400 text-violet-700 py-3 px-8 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Book A Discovery Call
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
