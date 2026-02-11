// components/WorkSlider.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorkSlider = ({ title, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="space-x-4">
          <button onClick={handlePrev} className="text-xl">◀</button>
          <button onClick={handleNext} className="text-xl">▶</button>
        </div>
      </div>

      <div className="flex space-x-4 overflow-hidden">
        {projects.slice(currentIndex, currentIndex + 2).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-[417.55px] h-[429.69px] p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={417.55}
              height={429.69}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-600">Nourishing Awareness: Local Food Education with Project 365</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;
