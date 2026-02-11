import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const tvam = () => {
  return (
    <>
      <Head>
        <title>Bevolve.ai | AI-Powered ESG Data Management & Sustainability</title>
        <meta
          name="description"
          content="Bevolve.ai transforms ESG and sustainability data management with AI and machine learning, enabling automated reporting, predictive analytics, natural language insights, and benchmarking for informed, evidence-based decisions."
        />
        <meta
          name="keywords"
          content="machine learning, esg reporting, esg compliance, environmental social and governance report, ghg emissions, ai in sustainability, ai sustainability, esg performance, natural language processing ai, ghg"
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
              Transforming ESG Data Management with Advanced AI and Machine
              Learning Solutions.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0">
              Empowering sustainable decision-making with intelligent
              automation, predictive analytics, and AI-driven ESG reporting for
              measurable impact.
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
                <span className="text-sm text-gray-700">AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Machine Learning (ML)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Natural Language Processing (NLP)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#5ec838] rounded-full"></span>
                <span className="text-sm text-gray-700">Data Benchmarking</span>
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
              <strong>Bevolve.ai </strong> is our flagship{" "}
              <strong>AI sustainability platform </strong> designed to
              revolutionize how organizations manage{" "}
              <strong> Environmental, Social, and Governance (ESG) </strong>{" "}
              data. The system seamlessly integrates structured and unstructured
              data from multiple sources, automating{" "}
              <strong> ESG reporting</strong>, validation, and compliance
              monitoring through advanced <strong> machine learning</strong> and
              <strong> natural language processing AI</strong>. <br />
              <br />
              Powered by GPT-4.0 and AI-driven heat maps, Bevolve.ai ensures
              transparency, accuracy, and traceability in sustainability and{" "}
              <strong> ESG compliance</strong> processes. With natural language
              querying, users can generate instant insights without technical
              expertise, while the intelligent benchmarking engine enables
              organizations to compare <strong> ESG performance</strong> across
              industries and geographies—fostering informed decisions and
              measurable progress.
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
                className="hover:underline text-[#5ec838] "
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
                  Data Integration & Automation:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Unified diverse ESG and GHG emissions data sources using
                  AI-based connectors for reliable and consistent reporting.
                </span>
              </li>

              {/* Key Point 2 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Quality Assurance:{" "}
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Applied advanced machine learning models to verify data
                  accuracy, traceability, and compliance with global ESG and
                  environmental social and governance report standards.
                </span>
              </li>

              {/* Key Point 3 */}
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Regulatory Reporting:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Automated ESG reporting and compliance workflows for
                  sustainability metrics and GHG emissions calculations.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  AI Copilot for Review:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Enhanced review processes with GPT-powered assistance for
                  faster, more reliable evaluations.
                </span>
              </li>
              <li>
                <strong className="text-lg font-semibold text-gray-900">
                  Benchmarking System:
                </strong>{" "}
                <span className="text-base md:text-lg text-gray-700">
                  Built a smart AI benchmarking module that enables comparison
                  of ESG performance by sector, region, and industry peers.
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
                  Integrating complex ESG and sustainability data from multiple
                  sources while maintaining accuracy, transparency, and
                  alignment with evolving ESG compliance standards.
                </span>
              </p>
              <p>
                <strong className="text-lg font-semibold text-gray-900">
                  Win:
                </strong>{" "}
                <span className="text-lg text-gray-700">
                  Delivered an AI in sustainability solution that automated ESG
                  reporting, improved data quality, and accelerated GHG
                  emissions tracking—empowering organizations to make faster,
                  evidence-based decisions and enhance stakeholder trust.
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

export default tvam;
