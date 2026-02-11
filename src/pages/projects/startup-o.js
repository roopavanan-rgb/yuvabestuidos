import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const startupO = () => {
  return (
    <>
      <Head>
        <title>
          Startup-O - Smarter Startup Funding with Data-Driven Insights
        </title>
        <meta
          name="description"
          content="Startup-O connects bold startups with smart capital through data-driven evaluations."
        />
        <meta
          name="keywords"
          content="Startup-O, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
            <span> MarketResearch </span>
            <span className=" sm:inline">{">"}</span>
            <span className="font-medium text-gray-900 whitespace-nowrap">
              Startup-O
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
              Smarter Startup Funding with <br></br>Data-Driven Insights:
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 mt-8">
              Leverage the power of data to connect high-potential startups with
              strategic capital.Our insights-driven approach ensures
              faster,smarter funding decisions—fueling innovation and scaling
              bold ideas.
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
              src="/images/work/startup-o/logooo.svg"
              alt="startup-o"
              width={500} // Set a larger width
              height={500} // Set a larger height
              className="object-contain rounded-3xl w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
            />
          </motion.div>
        </header>

        <section className="px-6 md:px-12 py-6 border-b border-gray-200 items-center justify-items-center w-full overflow-hidden">
          {/* Row with Title and Services */}
          <motion.div
            className="flex flex-wrap items-start md:items-center justify-center md:justify-start space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 50 }} // Start hidden and slide in from below
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
          >
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800 border-b-4 border-gray-800 pb-1 mr-4 md:mr-8 w-full md:w-auto text-center md:text-left">
              What We Did
            </h3>

            {/* Services List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#027d82] rounded-full"></span>
                <span className="text-sm text-gray-700">Generative AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#027d82] rounded-full"></span>
                <span className="text-sm text-gray-700">
                  Data Preprocessing
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#027d82] rounded-full"></span>
                <span className="text-sm text-gray-700">Image Refinement</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px] border-b-8 border-[#027d82]">
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
            <p className="text-lg text-gray-700">
              Startup-O connects bold startups with smart capital through
              data-driven evaluations.
              <br />
              <br />
              We identify high-potential opportunities, crafting investment
              memos, thought leadership, and market insights to drive strategic
              decisions. With expertise in financial analysis and industry
              benchmarking, we make startup funding faster, smarter, and more
              accessible—because great ideas deserve great backing.
            </p>
          </motion.div>
        </section>

        {/* Poster Designs Section */}
        <section className="bg-[#EFA135] py-12 px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">
            <span className="text-[#027d82]">●</span> Some images of our work
          </h2>

          {/* Poster Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* First Row */}
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/startup-o/image(1).png"
                alt="PoSH Poster"
                width={524}
                height={254}
                className="object-fill w-full h-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/startup-o/image(2).png" // Replace with actual path
                alt="We're Hiring Poster"
                width={524}
                height={254}
                className="object-fill w-full h-cover rounded-lg"
              />
            </motion.div>

            {/* Second Row */}
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/startup-o/image(3).png" // Replace with actual path
                alt="Thank You Poster"
                width={524}
                height={254}
                className="object-fill w-full h-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              className="flex justify-center items-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/work/startup-o/image(4).png" // Replace with actual path
                alt="Makar Sankranti Poster"
                width={524}
                height={254}
                className="object-fill w-full h-cover rounded-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Process & Key Points Section */}
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[654px] mt-10 sm:mt-24">
          <motion.div
            className="max-w-6xl w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center md:text-left">
              Process & Key Points:
            </h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Key Point 1 */}
                <div>
                  <strong className="text-lg font-semibold text-gray-900">
                    1. Data Analysis & Benchmarking:
                  </strong>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 mt-2 space-y-2">
                    <li>
                      Collect and structure financial data from diverse sources,
                      including reports, government documents, and real-time
                      market information.
                    </li>
                    <li>
                      Research market conditions, risks, and returns to pinpoint
                      promising investment opportunities.
                    </li>
                    <li>
                      Study market trends, economic data, and competitor
                      performance to support financial decision-making.
                    </li>
                    <li>
                      Compare company performance within the industry, analyzing
                      competitor strategies, strengths, and weaknesses.
                    </li>
                    <li>
                      Monitor industry shifts, economic trends, and emerging
                      technologies, delivering insights through reports, charts,
                      and data-driven visuals.
                    </li>
                  </ul>
                </div>

                {/* Key Point 2 */}
                <div>
                  <strong className="text-lg font-semibold text-gray-900">
                    2. Investment Memo Development:
                  </strong>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 mt-2 space-y-2">
                    <li>
                      Conduct in-depth company assessments, including business
                      models, key offerings, and value propositions.
                    </li>
                    <li>
                      Evaluate founding teams based on expertise, leadership
                      experience, and company growth trajectory.
                    </li>
                    <li>
                      Analyze industry trends, market potential, and
                      macroeconomic influences to determine growth
                      opportunities.
                    </li>
                    <li>
                      Perform competitive landscape studies, assessing key
                      players, market positioning, and differentiators.
                    </li>
                    <li>
                      Provide comprehensive financial projections, risk
                      assessments, and strategic growth plans.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Key Point 3 */}
                <div>
                  <strong className="text-lg font-semibold text-gray-900">
                    3. Research & Thought Leadership:
                  </strong>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 mt-2 space-y-2">
                    <li>
                      Produce in-depth articles on the Indian Tech landscape
                      (2023 - 2030), exploring industry trends, GDP
                      contributions, and comparative insights from global
                      markets.
                    </li>
                    <li>
                      Build and maintain a database of listed and unlisted
                      technology companies in the USA, China, and India.
                    </li>
                    <li>
                      Analyze equity market trends within the tech sector,
                      documenting insights into market performance and
                      investment potential.
                    </li>
                  </ul>
                </div>

                {/* Key Point 4 */}
                <div>
                  <strong className="text-lg font-semibold text-gray-900">
                    4. Investment Thesis - Indian Defense Tech Industry:
                  </strong>
                  <ul className="list-disc pl-5 text-base md:text-lg text-gray-700 mt-2 space-y-2">
                    <li>
                      Develop an investment thesis outlining the landscape of
                      India&apos;s defense technology sector.
                    </li>
                    <li>
                      Provide a global and domestic industry overview,
                      highlighting market opportunities and growth potential.
                    </li>
                    <li>
                      Examine government policies, initiatives, risks,
                      vulnerabilities, and key investment areas.
                    </li>
                    <li>
                      Maintain a detailed database of Indian defense startups,
                      supplemented with case studies offering deep sector
                      insights.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Challenges & Wins Section */}
        <section className="px-6 md:px-12 lg:px-32 py-12 bg-[#EFA135] flex flex-col lg:flex-row items-center justify-between mt-10 sm:mt-40">
          {/* Left Content */}
          <motion.div
            className="lg:w-2/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Challenges & Wins:
            </h2>
            <div className="space-y-4">
              <div>
                <strong className="text-lg font-semibold text-white">
                  Challenges:
                </strong>
                <ul className="list-disc pl-5 text-lg text-white">
                  <li>
                    Navigating the complexities of dynamic markets with
                    fluctuating trends and regulatory shifts.
                  </li>
                  <li>
                    Distilling vast amounts of data into actionable insights
                    while maintaining accuracy and clarity.
                  </li>
                  <li>
                    Differentiating emerging startups with true potential from
                    saturated markets.
                  </li>
                  <li>
                    Aligning investment recommendations with evolving client
                    objectives and market conditions.
                  </li>
                </ul>
              </div>
              <div>
                <strong className="text-lg font-semibold text-white">
                  Wins:
                </strong>
                <ul className="list-disc pl-5 text-lg text-white">
                  <li>
                    Successfully delivered investment memos that enabled clients
                    to make informed and strategic investment decisions.
                  </li>
                  <li>
                    Published thought leadership articles that provided clarity
                    on tech market evolution and investment landscapes.
                  </li>
                  <li>
                    Developed robust databases that enhanced investor
                    decision-making processes.
                  </li>
                  <li>
                    Created a detailed and insightful investment thesis that
                    highlighted promising opportunities in the Indian defence
                    tech sector.
                  </li>
                </ul>
              </div>
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
              src="/images/work/startup-o/logooo.svg"
              alt="startup-o"
              width={400}
              height={400}
              className="object-contain"
            />
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-32 py-12 bg-white flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Testimonials
          </h2>

          {/* Row Layout for Testimonials */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg text-gray-700">
                &quot;The depth of analysis and clarity in the investment memos
                provided us with a clear vision of potential opportunities. The
                insights were invaluable in our decision-making process!&quot;
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                — Senior Investment Analyst
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg text-gray-700">
                &quot;Their research on the Indian tech sector was truly eye-opening.
                The ability to break down complex trends into actionable
                strategies made all the difference for us.&quot;
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                — Tech Sector Investor
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="max-w-sm p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg text-gray-700">
                &quot;The defence tech investment thesis was a game-changer! The
                comprehensive analysis, from government policies to key
                investment areas, helped us confidently navigate the sector.&quot;
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                — Venture Capital Partner
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <Call />
      </div>
    </>
  );
};

export default startupO;
