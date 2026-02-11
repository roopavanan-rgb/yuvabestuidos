// pages/blog.js
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "/data/blogs";
import BlogSlider from "@/components/BlogSlider";
import { NextSeo } from "next-seo";

export default function Blog() {
  const [latest, ...others] = blogs;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON LD SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "@id":
                  "https://yuvabestudios.com/blog/security-flaw-in-animations#blogposting",
                url: "https://yuvabestudios.com/blog/security-flaw-in-animations",
                headline:
                  "The Overlooked Security Flaw in Front-End Animations You Need to Know",
                description:
                  "Motion design makes interfaces feel alive — but if implemented carelessly, it can also expose user behavior, states, and data. Here's how to secure your animations and build safer UIs.",
                image: "https://yuvabestudios.com/public/blog/dev/banner.png",
                datePublished: "2025-11-20T09:00:00+05:30",
                dateModified: "2025-11-20T09:00:00+05:30",
                author: {
                  "@type": "Person",
                  name: "Roopan R",
                },
                publisher: {
                  "@id": "https://yuvabestudios.com/#organization",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://yuvabestudios.com/blog/security-flaw-in-animations",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://yuvabestudios.com/blog/security-flaw-in-animations#breadcrumb",
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
                    name: "Blog",
                    item: "https://yuvabestudios.com/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "The Overlooked Security Flaw in Front-End Animations You Need to Know",
                    item: "https://yuvabestudios.com/blog/security-flaw-in-animations",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <NextSeo
        title="Yuvabe Studios Blog | AI, Design, Digital Marketing & Market Research Insights"
        description="Explore Yuvabe Studios’ blog for insights on AI/ML, design thinking, digital marketing strategies, and market research. Stay updated with trends, case studies, and expert tips from our human-centric studio in Auroville, India."
        canonical="https://yuvabestudios.com/blogs"
        openGraph={{
          url: "https://yuvabestudios.com/blogs",
          title:
            "Yuvabe Studios Blog | AI, Design, Digital Marketing & Market Research Insights",
          description:
            "Explore Yuvabe Studios’ blog for insights on AI/ML, design thinking, digital marketing strategies, and market research. Stay updated with trends, case studies, and expert tips from our human-centric studio in Auroville, India.",
          images: [
            {
              url: "https://yuvabestudios.com/images/profile/icon.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios Blog Open Graph Image",
            },
          ],
          site_name: "Yuvabe Studios",
        }}
        twitter={{
          handle: "@YuvabeStudios",
          site: "@YuvabeStudios",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Yuvabe Studios Blog, AI and Machine Learning, Design Thinking, Digital Marketing, Market Research, Case Studies, Industry Insights, Auroville India",
          },
        ]}
      />

      {/* HEADER SECTION */}
      <div className="relative w-full bg-gradient-to-r from-[#5829C7] to-[#7f51d8] py-20">
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#FFCA2D]  mb-20">
          Blogs and Articles
        </h1>
      </div>

      {/* FEATURED SECTION */}
      <section className="relative max-w-[1400px] mx-auto -mt-28 mb-20 px-4 sm:px-6 lg:px-16 py-10 bg-white rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Featured Blog */}
          <motion.div
            className="lg:col-span-2 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <Link href={`/blog/${latest.slug}`}>
              <div className="relative w-full md:w-[840px] h-[250px] sm:h-[350px] lg:h-[515px] cursor-pointer">
                <Image
                  src={latest.image}
                  alt={latest.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Link>

            <div className="pt-6 sm:pt-8 px-2">
              <Link href={`/blog/${latest.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-3 hover:text-indigo-600 transition">
                  {latest.title}
                </h2>
              </Link>
              <Link href={`/blog/${latest.slug}`}>
                <p className="text-black mb-4 text-sm sm:text-base hover:text-indigo-500 transition max-w-3xl">
                  {latest.subheading}
                </p>
              </Link>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {latest.author}
                </span>{" "}
                • {latest.readingTime}
              </p>
            </div>
          </motion.div>

          {/* Right side: Other Latest Blogs */}
          <div className="flex flex-col gap-6">
            {others.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.slug}
                className="flex gap-4 items-end rounded-xl overflow-hidden transition"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Small Preview Image */}
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative w-[150px] h-[120px] sm:w-[180px] sm:h-[120px] lg:w-[270px] lg:h-[160px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-col justify-between h-full">
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 line-clamp-2 hover:text-indigo-600 transition">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-500">{blog.readingTime}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BlogSlider />
    </div>
  );
}
