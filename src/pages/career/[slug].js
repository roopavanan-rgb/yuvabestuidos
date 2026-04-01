import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { jobs } from "../../../data/jobs";
import { slugify } from "../../../utils/slugify";

export async function getStaticPaths() {
  const paths = jobs.map((job) => ({
    params: { slug: slugify(job.title) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const job = jobs.find((j) => slugify(j.title) === params.slug);
  if (!job) return { notFound: true };
  return { props: { job } };
}

export default function JobDetail({ job }) {
  return (
    <>
      <Head>
        <title>{job.title} | Careers at Yuvabe</title>
        <meta
          name="description"
          content={
            job.description?.slice(0, 160) || `${job.title} at Yuvabe Studios`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/profile/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: job.title,
              description: job.description,
              hiringOrganization: {
                "@type": "Organization",
                name: "Yuvabe Studios",
                sameAs: "https://yuvabestudios.com",
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Auroville",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              employmentType: "FULL_TIME",
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-[#ffffff] to-[#ffffff] via-[#d9d0df]/20 p-6 md:p-10">
        {/* Back Link */}
        <Link
          href="/career"
          className="inline-flex items-center gap-2 text-[#5829C7] font-medium hover:underline mb-6"
        >
          <HiArrowLeft className="text-lg" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-[#5829C7] to-[#5829C7]/60 p-6 md:p-10 rounded-xl mb-8"
        >
          <p className="text-white/70 text-sm font-medium">{job.category}</p>
          <h1 className="text-2xl md:text-4xl font-semibold text-[#FFD53E] mt-2">
            {job.title}
          </h1>
          {job.focus && (
            <p className="text-white mt-2 font-secondary">
              Focus: {job.focus.trim()}
            </p>
          )}
          <p className="text-[#FFCA2D] font-semibold mt-1">
            Minimum Experience: {job.experience}
          </p>
        </motion.div>

        <div className="space-y-8  max-w-6xl mx-auto">
          {/* Description */}
          {job.description && (
            <div>
              <SectionTitle>About the Role</SectionTitle>
              <p className="text-gray-700 font-secondary leading-relaxed">
                {job.description}
              </p>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities?.length > 0 && (
            <div>
              <SectionTitle>Key Responsibilities</SectionTitle>
              <BulletList items={job.responsibilities} />
            </div>
          )}

          {/* Requirements */}
          {job.requirements?.length > 0 && (
            <div>
              <SectionTitle>Requirements</SectionTitle>
              <BulletList items={job.requirements} />
            </div>
          )}

          {/* Portfolio Requirement */}
          {job.portfolioRequirement && (
            <div>
              <SectionTitle>Portfolio Requirement</SectionTitle>
              <p className="text-gray-700 font-secondary leading-relaxed">
                {job.portfolioRequirement}
              </p>
            </div>
          )}

          {/* Nice-to-Haves */}
          {(job["Nice-to-Haves"]?.length > 0 ||
            job.niceToHaves?.length > 0) && (
            <div>
              <SectionTitle>Nice to Have</SectionTitle>
              <BulletList items={job["Nice-to-Haves"] || job.niceToHaves} />
            </div>
          )}


          {/* Benefits */}
          {job.benefits && (
            <div>
              <SectionTitle>Benefits</SectionTitle>
              {Array.isArray(job.benefits) ? (
                <BulletList items={job.benefits} />
              ) : (
                <>
                  <p className="text-[#5829C7] font-semibold mb-1">Remote:</p>
                  <BulletList items={job.benefits.remote} />
                  <p className="text-[#5829C7] font-semibold mt-3 mb-1">
                    In-Person (Auroville):
                  </p>
                  <BulletList items={job.benefits.inPerson} />
                </>
              )}
            </div>
          )}

          {/* How to Apply */}
          <div className="flex flex-col md:flex-row items-start md:items-center bg-[#eae4f8] border-2 border-[#5829c7] p-4 rounded-lg">
            <div className="mb-4 md:mb-0 w-full md:w-2/3">
              <p className="text-[#5829c7] font-semibold mb-1 font-primary">
                How To Apply?
              </p>
              <p className="text-black text-sm md:text-base font-secondary font-medium">
                If you&apos;re interested in this role and are willing to commit
                to staying in Auroville for a minimum of 12 months
              </p>
            </div>
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
        </div>
      </div>
    </>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-[#5829C7] font-semibold text-base md:text-lg mb-3 font-primary">
      {children}
    </h2>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc list-inside text-gray-700 space-y-1 font-secondary ml-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
