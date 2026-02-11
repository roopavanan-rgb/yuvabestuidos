import { NextSeo } from "next-seo";
import AboutHeroSection from "@/components/AboutHeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExpertiseSection from "@/components/ExpertiseSection";
import TeamSection from "@/components/TeamSection";
import Head from "next/head";
import FaqSection from "@/components/FaqSection";

const serviceFaqs = [
  {
    question: " What inspired the creation of Yuvabe Studios?",
    answer:
      "Yuvabe began in Auroville with a mission to combine creativity, technology, and community development. The studio was built to empower youth and help organisations communicate with clarity, purpose, and innovation.",
  },
  {
    question: "How has Yuvabe evolved since its foundation?",
    answer:
      "We started with design and digital marketing, and over the years expanded into AI/ML development, market research, and full-stack digital solutions. We became a multidisciplinary creative and technology studio.",
  },
  {
    question: "What values shape the work Yuvabe does?",
    answer:
      "Our work is grounded in care, creativity, and courage. These values guide our human-centred approach to design, technology, and problem-solving.",
  },
  {
    question: "What values shape the work Yuvabe does?",
    answer:
      "Our team brings together young creators, experienced strategists, designers, developers, and researchers, combining diverse talent to deliver holistic solutions.",
  },
  {
    question: "What kinds of organisations does Yuvabe collaborate with?",
    answer:
      "We work with mission-driven organisations, NGOs, tech companies, sustainability-focused brands, social enterprises, and startups seeking purposeful digital transformation.",
  },
  {
    question: "Does Yuvabe offer customised solutions?",
    answer:
      "Yes. Every project is tailored to the client’s goals, whether it’s branding, UI/UX design, AI integration, digital marketing, or research-led strategy.",
  },
];

const AboutPage = () => {
  return (
    <>
      {/* Next SEO configuration for About Page */}
      <NextSeo
        title="About Us | Yuvabe Studios"
        description="Learn more about Yuvabe Studios, a digital agency based in Auroville, specializing in AI/ML, web development, and digital marketing solutions."
        canonical="https://yuvabestudios.com/about"
        openGraph={{
          url: "https://yuvabestudios.com/about",
          title: "About Us | Yuvabe Studios",
          description:
            "Learn more about Yuvabe Studios, a digital agency that combines innovation and sustainability to create impactful solutions.",
          images: [
            {
              url: "https://yuvabestudios.com/images/profile/logo.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios About Us",
            },
          ],
          site_name: "Yuvabe Studios",
        }}
        twitter={{
          handle: "@YuvabeStudios",
          site: "@YuvabeStudios",
          cardType: "summary_large_image",
        }}
      />

      {/* Add favicon and page metadata */}
      <Head>
        <link rel="icon" href="/yb-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "AboutPage",
                  "@id": "https://yuvabestudios.com/about#aboutpage",
                  url: "https://yuvabestudios.com/about",
                  name: "About Yuvabe Studios",
                  description:
                    "Learn more about Yuvabe Studios, a human-centric creative agency based in Auroville, blending digital marketing, design, AI/ML, and research to build meaningful digital experiences.",
                  publisher: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://yuvabestudios.com/about#breadcrumb",
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
                      name: "About",
                      item: "https://yuvabestudios.com/about",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <header>
          <AboutHeroSection />
        </header>

        {/* What We Do Section */}
        <section id="what-we-do">
          <WhatWeDo />
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        {/* Expertise Section */}
        <section id="expertise">
          <ExpertiseSection />
        </section>

        {/* Team Section */}
        <section id="team">
          <TeamSection />
        </section>

        <FaqSection
          title="Frequently Asked Questions — About Yuvabe Studios"
          faqs={serviceFaqs}
        />
      </main>
    </>
  );
};

export default AboutPage;
