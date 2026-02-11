// components/Principles.js
import { motion } from 'framer-motion';

export default function Principles() {
    const principles = [
      {
        title: "Passion Drives Us",
        description:
          "We bring enthusiasm, curiosity, and dedication to every project, ensuring high-quality outcomes and meaningful results.",
      },
      {
        title: "People First",
        description:
          "We design with empathy and purpose, putting users, clients, and communities at the centre of every decision.",
      },
      {
        title: "No Limits",
        description:
          "We challenge assumptions and embrace experimentation because innovation happens when we go beyond what’s expected",
      },
      {
        title: "Partners in Progress",
        description:
          "We collaborate closely with clients as long-term partners, not just service providers, ensuring shared growth and success.",
      },
      {
        title: "Attention to Detail",
        description:
          "We obsess over clarity, precision, and consistency qualities that elevate design, development, and strategy.",
      },
      {
        title: "Stay Playful",
        description:
          "Creativity thrives when we enjoy the process. We encourage curiosity, imagination, and a playful mindset in our work.",
      },
      {
        title: "Community",
        description:
          "We believe in giving back and building systems that strengthen the communities we work with—locally and globally.",
      },
      {
        title: "Innovation",
        description:
          "We continuously explore new technologies and design approaches to create forward-thinking, future-ready solutions.",
      },
      {
        title: "Sustainability",
        description:
          "We commit to responsible, sustainable practices in the way we work, design, and collaborate.",
      },
    ];

    return (
      <div className="w-full flex flex-col items-center py-16 px-4 md:px-8 lg:px-10 bg-[url('/images/svgs/pri.svg')] bg-cover bg-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-medium font-primary text-center text-gray-800 mb-4"
        >
          Our Principles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg font-secondary font-semibold text-center text-gray-600 mb-10"
        >
          These principles guide every project, from design and AI to research
          and digital marketing, ensuring clarity, integrity, and long-term
          impact.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="flex items-start space-x-4 p-4 text-start "
            >
              {/* Blue bullet point */}
              <span className="w-4 h-2 rounded-full bg-blue-800 mt-1.5"></span>

              {/* Principle content */}
              <div>
                <h3 className="text-lg font-primary font-medium text-black">
                  {principle.title}
                </h3>
                <p className="text-sm font-secondary font-regular text-gray-600 mt-2">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
}
