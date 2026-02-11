import { motion } from "framer-motion";
import Image from "next/image";

const CoreValues = () => {
  const coreValues = [
    {
      id: 1,
      title: "Care",
      description:
        "We cultivate an attitude of care towards ourselves, our teams, and the communities we serve. This value guides our human-centred design, collaboration, and the way we build meaningful solutions.",
      icon: "/images/profile/care.png",
    },
    {
      id: 2,
      title: "Courage",
      description:
        "We encourage the courage to question assumptions, explore new ideas, and challenge the status quo. It’s the driving force behind our innovation in design, digital strategy, and AI-powered problem-solving.",
      icon: "/images/profile/courage.svg",
    },
    {
      id: 3,
      title: "Creativity",
      description:
        "We nurture a mindset of creativity and continuous learning. This fuels our approach to branding, UI/UX, storytelling, and digital marketing allowing us to create work that is imaginative, thoughtful, and impactful.",
      icon: "/images/profile/creativity.svg",
    },
  ];

  return (
    <section className="relative bg-[url('/images/svgs/core.svg')] bg-cover bg-center py-16 overflow-hidden">
      {/* Section title */}
      <h2 className="text-center text-white text-4xl font-primary font-medium mb-12">
        Our Core Values
      </h2>

      {/* Core values cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {coreValues.map((value) => (
          <motion.div
            key={value.id}
            className="flex flex-col md:flex-col items-center text-center bg-gradient-to-br from-[#764fd0] to-[#794cf0] 
    rounded-2xl w-[90%] max-w-[310px] p-6 h-auto min-h-[260px] 
    border border-white border-opacity-50 backdrop-blur-md transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: value.id * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] mb-4 md:mb-6">
              <Image
                src={value.icon}
                alt={`${value.title} icon`}
                width={100}
                height={100}
              />
            </div>

            {/* Text */}
            <h3 className="text-white text-[20px] md:text-[24px] font-primary font-medium">
              {value.title}
            </h3>
            <p className="text-white text-sm mt-2 font-secondary leading-snug max-w-[280px]">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;


// className="text-white  w-[256px] h-[34px]  font-secondary font-semibold leading-tight md:leading-snug text-[clamp(10px,2vw,14px)] max-h-[calc(2 * 1.6em)] overflow-hidden whitespace-normal"