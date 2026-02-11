import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <motion.section className="relative h-[268px] w-full sm:h-[300px] lg:h-[350px] flex items-center justify-center bg-hero-gradient bg-cover bg-center overflow-hidden">
      {/* Text Content */}
      <div className="text-center z-10 px-8 lg:px-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-secondary text-yellow-500 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-white font-secondary max-w-[90%] sm:max-w-[80%] lg:max-w-[100%] mx-auto leading-relaxed text-xs sm:text-lg md:text-xl tracking-widest ">
          Yuvabe is shaped by the unique environment of Auroville, a place where
          creativity, innovation, sustainability, and community come together.
          This inspires us to think differently and work with intention.
          <br />
          We collaborate with purpose, innovate with curiosity, and aim to
          create solutions that make a real difference. Let us build boldly and
          create meaningful impact together.
        </p>
      </div>
    </motion.section>
  );
}
