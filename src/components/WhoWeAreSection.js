// components/WhoWeAreSection.js
import { motion } from 'framer-motion';

const WhoWeAreSection = () => {
  return (
    <motion.div
      className="flex flex-col items-start w-full max-w-5xl mt-8 bg-white px-6 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-2xl font-semibold text-violet-800 mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </motion.h3>
      <motion.p
        className="text-gray-700 mb-4 text-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        At Yuvabe, we&apos;re not just a digital agency&mdash;we&apos;re a movement! Based in Auroville, a
        community known for innovation and sustainable living, we&apos;ve woven these values into
        everything we do.
      </motion.p>
      <motion.p
        className="text-gray-700 text-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our team is a vibrant mix of young innovators and seasoned pros, passionate about
        turning today&apos;s challenges into tomorrow&apos;s solutions.
      </motion.p>
    </motion.div>
  );
};

export default WhoWeAreSection;
