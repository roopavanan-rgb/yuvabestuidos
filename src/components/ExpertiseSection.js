import { motion } from "framer-motion";
import Image from "next/image";

export default function ExpertiseSection() {
  return (
    <section className="relative w-full bg-white p-8">
      {/* Section Title */}
      <div className="text-left mb-16 pl-6 sm:pl-12 mt-10">
        <h2 className="sm:text-5xl text-3xl font-medium font-primary text-gray-800 pl-0 sm:pl-14">
          Our Expertise Is Diverse
        </h2>
        <p className="text-xl sm:text-2xl font-secondary font-semibold text-[#3500F0] mt-2 pl-0 sm:pl-14">
          The Tools to Transform Your Business
        </p>
      </div>

      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-screen-xl px-4 relative isolate">
        <div className="relative">
          <Image
            src="/images/logo/line11.png"
            alt="Connection between Card 1 and Card 2"
            width={340}
            height={100}
            className="absolute top-[-80px] left-[53%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="Visual Design & Brand Identity"
            category="Design & Brand"
            details="Graphic design, branding & identity systems, Colour theory & typography, visual design systems, video editing, motion graphics."
          />
        </div>

        <div className="relative">
          <Image
            src="/images/logo/line22.png"
            alt="Connection between Card 1 and Card 4"
            width={200}
            height={100}
            className="absolute top-[160px] left-[-90%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="UI/UX & Web Design"
            category="Design & Brand"
            details="User flows, wireframes, prototyping (Figma, Adobe XD), accessibility design, responsive web design, interaction design."
          />
        </div>

        <div className="relative">
          <Image
            src="/images/logo/line3.png"
            alt="Connection next to Card 4"
            width={200}
            height={100}
            className="absolute top-[360px] left-[-150%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="Consumer & Cultural Insights"
            category="Market Research"
            details="Behaviour analysis, segmentation, semiotics, custom research reports."
          />
        </div>

        {/* Row 2 */}
        <div className="relative">
          <Image
            src="/images/logo/line4.png"
            alt="Connection left of Card 6"
            width={200}
            height={100}
            className="absolute top-[calc(50%+250px)] left-[188%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="Marketing Campaigns"
            category="Digital Marketing"
            details="Social media marketing, SEO, PPC, email marketing, influencer marketing, campaign creatives, copywriting."
          />
        </div>

        <div className="col-span-1 sm:col-span-0"></div>

        <div className="relative">
          <Image
            src="/images/logo/line33.png"
            alt="Connection between Card 8 and Card 9"
            width={300}
            height={2}
            className="absolute top-[calc(40%)] left-[-55%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="Market Landscape & Trend Forecasting"
            category="Market Research"
            details="Competitive analysis, brand health evaluation, trend tracking, financial insights."
          />
        </div>

        {/* Row 3 */}
        <div className="relative">
          <ExpertiseCard
            title="Visual Design & Brand Identity"
            category="Digital Marketing"
            details="Graphic design, branding & identity systems, Colour theory & typography, visual design systems, video editing, motion graphics."
          />
        </div>

        <div className="relative">
          <Image
            src="/images/logo/line6.png"
            alt="Connection above Card 8"
            width={80}
            height={2}
            className="absolute top-[calc(-50%)] left-[22%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="AI & ML Development"
            category="AI/ML & Development"
            details="Computer vision, NLP, generative AI, predictive analytics, recommendation systems."
          />
        </div>

        <div className="relative">
          <Image
            src="/images/logo/line44.png"
            alt="Connection above Card 9"
            width={80}
            height={2}
            className="absolute lg:top-[calc(-255%)] lg:left-[10%] hidden md:block z-[-1]"
          />
          <ExpertiseCard
            title="Full-Stack Development & Infrastructure"
            category="AI/ML & Development"
            details="Frontend (Vue, React/Next.js), backend (Python, FastAPI), data processing, cloud deployment (AWS/GCP), Git integration."
          />
        </div>
      </div>
    </section>
  );
}

/* 🧠 Card Component with Category-based Colors */
function ExpertiseCard({ title, category, details }) {
  const colorMap = {
    "Market Research": {
      border: "border-green-600",
      bg: "bg-green-100",
      text: "text-green-600",
    },
    "Design & Brand": {
      border: "border-blue-600",
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    "Digital Marketing": {
      border: "border-violet-600",
      bg: "bg-violet-100",
      text: "text-violet-600",
    },
    "AI/ML & Development": {
      border: "border-red-600",
      bg: "bg-red-100",
      text: "text-red-600",
    },
  };

  const color = colorMap[category] || colorMap["Design & Brand"];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-full lg:w-[344px] h-[246px] p-4 bg-white bg-opacity-20 backdrop-blur-lg shadow-md rounded-lg border ${color.border}`}
    >
      <span
        className={`inline-block px-2 py-1 rounded text-sm font-semibold font-primary mb-2 ${color.bg} ${color.text} border ${color.border}`}
      >
        {category}
      </span>

      <h3 className="text-lg sm:text-xl font-primary font-semibold mb-4 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 font-secondary mt-2">{details}</p>
    </motion.div>
  );
}
