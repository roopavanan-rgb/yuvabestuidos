"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "JACK ALEXANDER",
    title: "CEO",
    thumbnail: "/images/work/bmh/testimonial.png",
    src: "https://youtu.be/FssqEYEdbfo",
  },
  {
    id: 2,
    name: "MEGHA",
    title: "Therapist ",
    thumbnail: "/images/work/maatram/testimonial-banner.png",
    src: "https://youtu.be/4KL8YMZ-spU",
  },
  {
    id: 3,
    name: "SUBIKSHA",
    title: "Client & Business Strategist ",
    thumbnail: "/images/work/buglerock/testimonial-banner.png", 
    src: "https://youtu.be/i2iKnpsSv4k", 
  },
  {
    id: 4,
    name: "MINHAJ AMEEN ",
    title: "Operations Director ",
    thumbnail: "/images/work/cat/testimonial.png",
    src: "https://youtu.be/2LkGlhTMgAQ",
  },
  {
    id: 5,
    name: "JACK ALEXANDER",
    title: "CEO ",
    thumbnail: "/images/work/bmh/testimonial.png",
    src: "https://youtu.be/FssqEYEdbfo",
  },
];


// Helper: normalize YouTube URLs
function normalizeYouTubeUrl(url) {
  if (url.includes("youtu.be")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("watch?v=")) {
    const videoId = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}

export default function AccordionTestimonialDepth() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative flex flex-col items-center justify-center py-20  overflow-hidden border-t-2 border-purple-600">
      <h2 className="text-2xl md:text-4xl font-medium font-primary mb-10">
        Client Testimonials: Results, Impact & Real Experiences
      </h2>

      <div className="flex w-full max-w-6xl h-[450px] overflow-hidden justify-center ">
        {testimonials.map((item, index) => {
          const distance = Math.abs(activeIndex - index);
          const isActive = activeIndex === index;

          // Adjust scale and width by distance from center
          const scale =
            distance === 0
              ? 1
              : distance === 1
              ? 0.85
              : distance === 2
              ? 0.75
              : 0.6;
          const brightness =
            distance === 0 ? "brightness-100" : "brightness-75 grayscale";

          return (
            <motion.div
              key={item.id}
              layout
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                flex: isActive ? 4 : distance === 1 ? 0.6 : 0.4,
                scale,
                zIndex: 10 - distance,
              }}
              className={`relative flex items-center justify-center cursor-pointer overflow-hidden ${brightness}`}
              onClick={() =>
                isActive
                  ? setSelectedVideo(normalizeYouTubeUrl(item.src))
                  : setActiveIndex(index)
              }
            >
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                className="object-cover transition-all duration-700"
              />

              {/* Overlay */}
              <motion.div
                initial={false}
                animate={{
                  backgroundColor:
                    isActive || distance === 1
                      ? "rgba(0,0,0,0.3)"
                      : "rgba(0,0,0,0.6)",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Non-active cards: vertical names */}

                {/* Active card: bottom-left text */}
                {isActive && (
                  <div className="absolute bottom-6 left-6 text-left">
                    <h3 className="text-white text-2xl font-bold tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.title}</p>
                  </div>
                )}
              </motion.div>

              {/* Play icon */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white/80 p-3 rounded-full shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Popup Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative bg-black overflow-hidden max-w-3xl w-full aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src={`${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 text-white text-2xl bg-black/40 rounded-full px-2 hover:bg-black/60"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
