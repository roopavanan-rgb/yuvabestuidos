import { motion } from "framer-motion";
import Image from "next/image";

const WhatWeDo = () => {
  const services = [
    {
      icon: "/images/about/creatives.svg",
      title: "Creatives & Design",
      description:
        "Visual identity design, Bold graphics and digital creatives, UI/UX design and user-centred product experiences and Copywriting and content design.",
    },
    {
      icon: "/images/about/marketing.svg",
      title: "Marketing & Campaigns",
      description:
        "Social media marketing, SEO, SEM & PPC campaigns, Email marketing, Influencer and affiliate campaigns and Full-funnel digital strategy.",
    },
    {
      icon: "/images/about/strategy.svg",
      title: "Strategy & Optimization",
      description:
        "Brand and communication strategy, Data-driven decision-making, Conversion rate optimisation (CRO) and Marketing automation.",
    },
    {
      icon: "/images/about/marketing.svg",
      title: "Technology & Development",
      description:
        "Web development, CRM setup and management, Analytics configuration & reporting & Cloud deployment and AI/ML integration.",
    },
  ];

  return (
    <section className="w-full h-auto px-6 py-8 sm:px-16 sm:py-6 flex flex-col justify-between items-start bg-white bg-[url('/images/about/we.svg')] bg-cover bg-center">
      {/* Top Text Section */}
      <div className="max-w-4xl text-center md:text-start lg:text-start space-y-4 mb-4 pl-2 lg:pl-16">
        <motion.h2
          className="text-3xl lg:text-5xl font-medium font-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do?
        </motion.h2>
        <motion.p
          className="text-xl lg:text-2xl text-[#3500F0] font-semibold font-secondary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          At Yuvabe, We don’t play it safe, We rewrite the rulebook!
        </motion.p>
        <motion.p
          className="text-[#757575]  font-medium font-secondary text-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Yuvabe is not just another agency. We rethink and rebuild how creative
          and digital work is done. Our multidisciplinary expertise combines
          storytelling, design, analytics, strategy, and advanced technology.
        </motion.p>
      </div>

      {/* Services Section */}
      <div className="w-full flex justify-center px-2 mt-[80px] mb-8">
        {" "}
        {/* Reduced center space with negative margin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start text-start space-y-10 p-4 pr-2 shadow-lg bg-white w-[300px] h-[320px] rounded-xl border border-r border-b border-yellow-500 border-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={50}
                height={50}
              />
              <h3 className="text-lg font-extrabold font-secondary">
                {service.title}
              </h3>
              <p className="text-gray-600 font-secondary font-semibold">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
