"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Krishna Mckenzie",
    title: "Founder of Solitude Farm & Cafe",
    text: `The Project 365 team exceeded our expectations with their innovative approach and dedication. Their automated system and daily content strategy truly transformed our online presence.`,
  },
  {
    name: "Av Marathon Team",
    title: "",
    text: `The marketing campaign for Av Marathon was a huge success. The team's ability to exceed the registration goal so quickly was impressive and greatly contributed to the event's success.`,
  },
  {
    name: "Aruna Sampige",
    title: "tvam Technologies Pvt. Ltd.",
    text: `Partnering with Yuvabe Studios for over a year, we've seen exceptional results. Their deep understanding of our vision and customer segments, combined with prompt responsiveness, has strengthened our brand.`,
  },
  {
    name: "Antoine Colombani",
    title: "Matrimandir",
    text: `Yuvabe Studios transformed our vision for a dedicated Matrimandir website into a complete digital experience. Their professionalism and alignment with our vision were outstanding.`,
  },
  {
    name: "Sarita Chand",
    title: "Co-Founder, Indic-AI",
    text: `Yuvabe Studios helped us balance clarity and dignity in telling Indic-AI’s story across education, jobs, healthcare, and AI. They delivered a brochure and website that feel authentic and impactful.`,
  },
  {
    name: "Venture Capital Partner",
    title: "",
    text: `The defence tech investment thesis was a game-changer! The comprehensive analysis helped us confidently navigate the sector.`,
  },
  {
    name: "Visa Meyyappan",
    title: "Chief Administrative Officer, NorthSouth Foundation",
    text: `Yuvabe is a talented team of creative, digital marketing professionals who have been instrumental in quite a few campaigns for us in various forms which we have deployed across email, social media campaigns. This has helped us get our message out to our constituents in an engaging manner. The team has a good breadth and deep knowledge of tools and the creative process work. It has been a pleasure to work with them and I would highly recommend them`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto  text-center relative">
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-6">
          Stories of Trust and Transformation
        </h2>

        <div className="relative overflow-hidden min-h-[24rem] md:min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-0"
            >
              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed mb-4 md:mb-6">
                “{testimonials[index].text}”
              </p>

              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {testimonials[index].name}
                </h3>

                {testimonials[index].title && (
                  <p className="text-sm text-gray-500">
                    {testimonials[index].title}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === index ? "bg-gray-800" : "bg-gray-300"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
