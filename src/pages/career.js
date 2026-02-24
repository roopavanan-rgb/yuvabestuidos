import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";
import { jobs } from "../../data/jobs";

export default function Careers() {
  const [selectedFilter, setSelectedFilter] = useState("All Jobs");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = [
    "All Jobs",
    "Design & Marketing",
    "AI/ML & Development",
    "Analytics & Management",
    "Sales & Business Development",
  ];

  const filteredJobs = jobs.filter((job) => {
    const categoryMatch =
      selectedFilter === "All Jobs" || job.category === selectedFilter;
    return categoryMatch;
  });

  return (
    <>
      <Head>
        <title>Careers at Yuvabe</title>
        <meta
          name="description"
          content="Join our team and create, collaborate, and make an impact with us at Yuvabe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/profile/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "CollectionPage",
                  "@id": "https://yuvabestudios.com/careers#careerspage",
                  url: "https://yuvabestudios.com/careers",
                  name: "Careers at Yuvabe Studios",
                  description:
                    "Join Yuvabe Studios, a human-centric creative agency in Auroville, and work across digital marketing, design, AI/ML, and research projects.",
                  publisher: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                },

                // Example of one open role – duplicate & edit per job
                {
                  "@type": "JobPosting",
                  "@id":
                    "https://yuvabestudios.com/careers#job-digital-marketing-strategist",
                  title: "Digital Marketing Strategist",
                  description:
                    "Yuvabe Studios is looking for a Digital Marketing Strategist to plan and execute performance campaigns, SEO, and content strategies for purpose-driven brands.",
                  hiringOrganization: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                  employmentType: "FULL_TIME",
                  jobLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Kottakarai Road",
                      addressLocality: "Puducherry",
                      addressRegion: "Tamil Nadu",
                      postalCode: "605111",
                      addressCountry: "IN",
                    },
                  },
                  validThrough: "2025-12-31T23:59:59+05:30",
                },

                {
                  "@type": "BreadcrumbList",
                  "@id": "https://yuvabestudios.com/careers#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://yuvabestudios.com/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Careers",
                      item: "https://yuvabestudios.com/careers",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#ffffff] via-[#d9d0df]/20 p-6 md:p-10">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-medium text-[#371B34]">
            Join Our Incredible Team
          </h1>
          <p className="text-lg md:text-xl text-[#5829C7] mt-2 font-secondary font-semibold">
            Create, Collaborate, and Make an Impact with Us
          </p>
          <p className="text-lg md:text-xl text-[#757575] mt-2 font-medium font-secondary">
            At Yuvabe, we&apos;re building a passionate team dedicated to
            transforming ideas into impactful experiences.
            <br />
            We value diverse perspectives, collaboration, and a commitment to
            growth.
          </p>
        </header>

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 mx-2 md:mx-24 gap-4 relative">
          {/* Mobile Filter Button */}
          <div className="md:hidden w-full relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 font-medium"
            >
              <span>{selectedFilter}</span>
              <FiFilter className="text-xl" />
            </button>

            {/* Mobile Dropdown */}
            {isFilterOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilter(filter);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      selectedFilter === filter
                        ? "bg-[#5829c7]/10 text-[#5829c7]"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Category Filters */}
          <div className="hidden md:flex md:space-x-2 flex-wrap justify-start w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm md:text-base font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-[#5829c7] to-[#5829c7]/20 via-[#5829c7]/80 text-white"
                    : "bg-white border border-gray-400 text-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* "How to Apply" Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-[#eae4f8] border-2 border-[#5829c7] p-4 rounded-lg mb-8 mx-4 md:mx-8 lg:mx-24">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 w-full md:w-2/3">
            <p className="text-[#5829c7] font-semibold mb-1 font-primary">
              How To Apply?
            </p>
            <p className="text-black text-sm md:text-base font-secondary font-medium">
              If you&apos;re interested in a role and are willing to commit to
              staying in Auroville for a minimum of 12 months
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 text-left md:text-right">
            <Link
              href="mailto:info@yuvabe.com"
              className="text-[#5829c7] font-semibold text-sm md:text-lg hover:underline font-primary"
            >
              info@yuvabe.com
            </Link>
            <p className="text-[#8462D5] text-sm md:text-base font-secondary font-medium">
              Share Your CV, Portfolio, and a Cover Letter
            </p>
          </div>
        </div>

        {/* Job Listings with Accordion Structure */}
        <div className="space-y-4 px-2 md:px-8 lg:px-24">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <AccordionItem key={index} job={job} />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-lg md:text-xl text-[#5829C7] font-secondary font-semibold">
                Currently no openings in {selectedFilter}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function AccordionItem({ job }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 ${
        isOpen ? "bg-gradient-to-br from-[#5829C7] to-[#5829C7]/60" : "bg-white"
      }`}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1 min-w-[200px] mb-2 md:mb-0">
          <p
            className={`${
              isOpen ? "text-white" : "text-violet-700"
            } text-sm font-medium`}
          >
            {job.category}
          </p>
          <h3
            className={`text-lg md:text-2xl font-semibold mt-2 ${
              isOpen ? "text-[#FFD53E]" : "text-gray-900"
            }`}
          >
            {job.title}
          </h3>
          {!isOpen && (
            <p className="text-sm text-gray-600 mt-1">Focus: {job.focus}</p>
          )}
        </div>
        <div className="text-end md:text-start ">
          <div className="flex flex-col items-end">
            <BsArrowUpRightCircle
              className={`text-lg md:text-2xl ${
                isOpen ? "text-[#FFCA2D]" : "text-[#757575]"
              }`}
            />
          </div>

          <p
            className={`text-xs md:text-sm mt-1 ${
              isOpen ? "text-[#FFCA2D]" : "text-[#757575]"
            }`}
          >
            Minimum Experience
          </p>
          <p
            className={`font-semibold ${
              isOpen ? "text-[#FFCA2D]" : "text-[#5829C7]"
            }`}
          >
            {job.experience}
          </p>
        </div>
      </div>

      {/* Expanded View */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <p className="text-white mb-4 md:mb-6 tracking-wide text-sm md:text-base font-secondary font-medium">
            {" "}
            <p className="font-semibold text-[#FFCA2D] mb-2">Description:</p>
            {job.description}
          </p>
          <div className="space-y-10">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <p className="font-semibold text-[#FFCA2D] mb-2 ">
                  Key Responsibilities:
                </p>
                <ul className="list-disc list-inside text-white ml-4 font-secondary">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/2">
                <p className="font-semibold text-[#FFCA2D] mb-2">
                  Requirements:
                </p>
                <ul className="list-disc list-inside text-white ml-4 font-secondary">
                  {job.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* LEFT always = Benefits */}
              <div className="lg:w-1/2">
                <p className="font-semibold text-[#FFCA2D] mb-2">Benefits:</p>
                <ul className="list-disc list-inside text-white ml-4 font-secondary">
                  {job.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT = Nice to Have (only if exists) */}
              {job["Nice-to-Haves"]?.length > 0 && (
                <div className="lg:w-1/2">
                  <p className="font-semibold text-[#FFCA2D] mb-2">
                    Nice to Have:
                  </p>
                  <ul className="list-disc list-inside text-white ml-4 font-secondary">
                    {job["Nice-to-Haves"].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
