import Link from "next/link";
import Image from "next/image";
import Call from "@/components/Call";
import Head from "next/head";
import { motion } from "framer-motion";

const quiltAi = () => {
  return (
    <>
      <Head>
        <title>Quilt.ai - Human Insights with AI-Driven Precision</title>
        <meta
          name="description"
          content="Quilt.AI combines cutting-edge AI with anthropological expertise to analyse digital conversations through a cultural lens. We don’t just track online behaviour—we decode the why behind it. Our insights help brands, businesses, and NGOs understand evolving narratives, identify emerging trends, and craft strategic, data-driven decisions with authenticity and precision."
        />
        <meta
          name="keywords"
          content="QuiltAI, Hemp Products, Sustainability, Social Media Marketing, Eco-Friendly Solutions, Hemp Paper Workshop"
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
              Quilt.AI
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
              Human Insights with AI-Driven Precision
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 mt-8">
              Decode consumer behaviour to predict emerging trends and craft
              culturally relevant content that resonates. Empower your brand
              with insights that shape the future.
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
              src="/images/work/quilt-ai/logo.png"
              alt="bmh"
              width={400} // Adjusted for mobile view
              height={400} // Adjusted for mobile view
              className="object-contain rounded-3xl sm:w-[500px] sm:h-[500px]"
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
                <span className="w-2 h-2 bg-[#9a1fcb] rounded-full"></span>
                <span className="text-sm text-gray-700">AI Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9a1fcb] rounded-full"></span>
                <span className="text-sm text-gray-700">Website Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#9a1fcb] rounded-full"></span>
                <span className="text-sm text-gray-700">Cloud Deployment</span>
              </div>
            </div>
          </motion.div>
        </section>

      
        <section className="flex items-center justify-center px-4 md:px-8 py-12 h-auto md:h-[408px]">
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
              Quilt.AI combines cutting-edge AI with anthropological expertise
              to analyse digital conversations through a cultural lens. We don’t
              just track online behaviour—we decode the why behind it. <br />
              <br />
              Our insights help brands, businesses, and NGOs understand evolving
              narratives, identify emerging trends, and craft strategic,
              data-driven decisions with authenticity and precision.
            </p>
          </motion.div>
        </section>

       {/* Process & Key Points Section */}
<section className="flex items-center justify-center px-4 md:px-8 pt-12 sm:pt-52 pb-12 sm:pb-72 h-auto md:h-[654px] border-b-8 border-[#9a1fcb]">
  <motion.div
    className="max-w-xl md:max-w-2xl w-full"
    initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
    whileInView={{ opacity: 1, y: 0 }} // When in view: fade in and slide up
    viewport={{ once: true }} // Animation triggers only once
    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
  >
    {/* Section Title */}
    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center sm:text-left">
      Process & Key Points:
    </h2>

    {/* Key Points List */}
    <ul className="space-y-6">
      {/* Key Point 1 */}
      <li>
        <strong className="text-lg font-semibold text-gray-900 text-center sm:text-left">
          Market Research & Consumer Insights:
        </strong>
        <ul className="list-disc pl-5 text-lg text-gray-700 mt-2 ">
          <li>
            Conduct in-depth analysis of consumer behavior, market trends, and competitive landscapes to empower businesses with data-driven strategies.
          </li>
          <li>
            Help companies adapt to shifting digital narratives and emerging industry trends.
          </li>
        </ul>
      </li>

      {/* Key Point 2 */}
      <li>
        <strong className="text-lg font-semibold text-gray-900">
          Digital Ecosystem Analysis:
        </strong>
        <ul className="list-disc pl-5 text-lg text-gray-700 mt-2">
          <li>
            Generate research reports and interactive dashboards by analyzing social media conversations, search trends, news cycles, blogs, and forums.
          </li>
          <li>
            Track emerging topics and translate complex data into actionable insights for brands and organizations.
          </li>
        </ul>
      </li>

      {/* Key Point 3 */}
      <li>
        <strong className="text-lg font-semibold text-gray-900">
          Collaborations & Clients:
        </strong>
        <ul className="list-disc pl-5 text-lg text-gray-700 mt-2">
          <li>
            Worked with global brands and NGOs to decode digital culture and consumer sentiment.
          </li>
          <li>
          Partnered with consumer brands and fashion influencers to create trend reports and dashboards on beauty, fashion, and personal care.
          </li>
          <li>
          Conducted patient journey analyses and healthcare trend reports for Health insights companies, focusing on disease-specific insights.
          </li>
          <li>
          Supported large foundations by analyzing their reputation and social media impact through discourse reports.
          </li>
        </ul>
      </li>
    </ul>
  </motion.div>
</section>


        <section className="w-full bg-purple-900 px-12 py-12 flex justify-center">
          <div className="max-w-[1200px] w-full">
            {/* Section Title */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#a13cc9] mr-2">●</span> Some images of our
              work
            </motion.h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto">
              {[
                "/images/work/quilt-ai/img1.png",
                "/images/work/quilt-ai/img2.png",
                "/images/work/quilt-ai/img3.png",
                "/images/work/quilt-ai/img4.png",
                "/images/work/quilt-ai/img5.jpeg",
                "/images/work/quilt-ai/img6.jpeg",
                "/images/work/quilt-ai/img7.png",
                "/images/work/quilt-ai/img8.png",
                "/images/work/quilt-ai/img9.jpeg",
              ].map((src, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden"
                  style={{ width: "100%", height: "100%" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 + index * 0.1 }}
                >
                  <Image
                    src={src}
                    alt={`Workshop Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-fill"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


{/* Challenges & Wins Section */}
<section className="px-6 md:px-12 lg:px-32 py-12 bg-white flex flex-col lg:flex-row items-center justify-between mt-18">
      {/* Left Content */}
      <motion.div
        className="lg:w-2/3 mb-8 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-semibold text-black mb-6 text-left">
          Challenges & Wins:
        </h2>
        <div className="space-y-6">
          <div>
            <strong className="text-lg font-semibold text-black">
            Trend Portal for Leading Cosmetics brand:
            </strong>
            <ul className="list-disc pl-5 text-lg text-black mt-2 justify-center">
              <li>
                Identified, analysed, and quantified 2,500+ trends across 18 global markets to pinpoint future industry shifts.
              </li>
              <li>
                Managed the end-to-end trend-tracking process, including hashtag relevance assessment and impact measurement.
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-lg font-semibold text-black">
            Brand Profiles for a leading  Fashion Insights company:
            </strong>
            <ul className="list-disc pl-5 text-lg text-black mt-2 justify-center">
              <li>
                Developed 50+ detailed social media brand profiles, offering deep insights into audience engagement, brand perception, and online performance.
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-lg font-semibold text-black">
            Healthcare Insights:
            </strong>
            <ul className="list-disc pl-5 text-lg text-black mt-2 justify-center">
              <li>
                Produced comprehensive patient journey reports across various diseases.
              </li>
              <li>
                Transformed raw insights into impactful visual representations on the Sphere platform.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>


          {/* Right Image */}
          <motion.div
            className="lg:w-1/3 flex justify-center mt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/work/quilt-ai/logo.png"
              alt="quilt.ai"
              width={350}
              height={350}
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

export default quiltAi;
