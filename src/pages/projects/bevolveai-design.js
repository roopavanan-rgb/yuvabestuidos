import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const Bevolveai = () => {
  return (
    <>
      <Head>
        <title>Bevolve.ai | AI-Enhanced Web Design & Digital Strategy</title>
        <meta
          name="description"
          content="Yuvabe Studios revamped Bevolve.ai’s website with AI-generated visuals, structured content, and SEO optimization—creating a tech-forward digital presence that reflects innovation, ESG expertise, and AI-driven solutions."
        />
        <meta
          name="keywords"
          content="website design, futuristic website design, tech-savvy website, AI-generated visuals, AI image integration, intelligent web design, digital experience"
        />
        <meta name="author" content="Yuvabe Studio" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900  overflow-x-hidden ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 px-6 md:px-12 lg:px-32 py-4 border-b border-gray-200  overflow-x-hidden">
          <div className="flex flex-wrap items-center space-x-2">
            <Link href="/work">
              <button className="hover:underline text-gray-500 whitespace-nowrap">
                Work
              </button>
            </Link>
            <span className=" sm:inline">{">"}</span>
            <span> AI/ML </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Bevolve
            </span>
          </div>
        </nav>

        <header className="px-6 md:px-16 lg:px-32 py-10 border-b border-gray-200 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
              Bevolve.ai
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Redefining Digital Presence with AI-Enhanced Web Design and Strategy.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Crafting a tech-savvy, visually engaging website with AI-generated imagery and structured
              content to reflect Bevolve&apos;s innovation and advanced capabilities in the ESG reporting, impact 
              communications and consulting space.
            </p>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/bevolve/logo.svg"
              alt="bmh"
              width={400}
              height={400}
              className="object-contain rounded-3xl sm:w-[500px] sm:h-[500px]"
            />
          </motion.div>
        </header>

        <section className="px-6 md:px-12 py-6 border-b border-gray-200 items-center justify-items-center w-full overflow-hidden">
          {/* Row with Title and Services */}
          <motion.div
            className="flex flex-wrap items-start md:items-center justify-center md:justify-start space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Audit & Revamp</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Information Architecture
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Content Strategy & SEO Optimization
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design & Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">AI-Generated Visuals</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12  border-b-8 border-[#5ec838]">
          <motion.div
            className="max-w-xl md:max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-lg text-gray-700 font-secondary">
              Bevolve partnered with us to completely revamp their website, creating a tech-forward digital
               presence that communicates innovation, intelligence, and AI-driven solutions. From auditing the
                existing platform to redesigning the information architecture, we structured content for clarity
                 and accessibility while integrating SEO strategies for better visibility.<br />
              <br />
              Using AI tools like Hugging Face, we generated high-quality visuals tailored for the website,
               enhancing the futuristic and professional feel. Every design choice—from layout to content flow—was 
               aligned with Bevolve&apos;s identity as a leader of ESG solutions, creating a seamless, modern, and
                immersive user experience.
            </p>
          </motion.div>
        </section>

        {/* Snapshot Section */}
        <section className="h-auto bg-[#908EBF]/50 px-6 md:px-16 lg:px-32 py-12 flex items-center justify-center relative overflow-hidden">
          <div className="w-full max-w-screen-lg flex flex-col items-center">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-12 text-center">
              <span className="text-[#5ec838]">●</span> Take a look at the{" "}
              <Link
                href="https://www.bevolve.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#000] "
              >
                Bevolve.ai
              </Link>{" "}
              website
            </h2>

            {/* Positioned Images */}
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/bevolve/snapshot-1.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/bevolve/snapshot-2.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
            <div className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-4 my-6">
              {/* First Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/bevolve/snapshot-3.png"
                  alt="Mockup 1"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Second Image */}
              <motion.div
                className="w-[80%] md:w-[546px] h-auto  overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/work/bevolve/snapshot-4.png"
                  alt="Mockup 2"
                  width={546}
                  height={362}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center   px-6 md:px-12 lg:px-32 py-16 ">
          <motion.div
            className="max-w-xl md:max-w-3xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Key Points List */}
            <ul className="space-y-4 md:space-y-6">
              {/* Key Point 1 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Audit & Revamp:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Evaluated the existing site for UX gaps, performance issues, and SEO opportunities to inform the redesign strategy.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Information Architecture:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Structured complex content into clear, navigable sections, making technical and AI-driven offerings intuitive for all users.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Content Strategy & SEO Optimization:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Curated and organized content for readability, engagement, and discoverability, incorporating high-search-volume keywords.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  AI-Generated Visuals:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Developed custom, high-quality images using Hugging Face and other AI tools to reinforce the futuristic and professional brand identity.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Website Design & Development:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Delivered a responsive, performance-optimized, and visually striking platform that balances aesthetics with functionality.
                </span>
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Challenges & Wins Section */}
        <section className="px-6 md:px-12 lg:px-32 py-12 bg-white flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Challenges & Wins:
            </h2>
            <div className="space-y-4">
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Challenge:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Transforming a content-heavy, technical website into a clean, futuristic experience while integrating AI visuals and optimizing for SEO.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered a modern, tech-focused website with AI-generated imagery, structured content, and SEO enhancements—showcasing Bevolve’s advanced capabilities and establishing a digital identity that reflects innovation and professionalism.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/bevolve/logo.svg"
              alt="bevolve logo"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default Bevolveai;
