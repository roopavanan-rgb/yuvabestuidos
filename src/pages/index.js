import Head from "next/head";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Principles from "@/components/Principles";
import Call from "@/components/Call";
import CoreValues from "@/components/CoreValues";
import Timeline from "@/components/Timeline";
import ProjectCarousel from "@/components/ProjectCarousel";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import ServiceCard from "@/components/ServiceCard";
import VideoCarousel from "@/components/VideoCarousel";
import FaqSection from "@/components/FaqSection";

const homeFaqs = [
  {
    question: "What does Yuvabe Studios do?",
    answer:
      "Yuvabe Studios is a human-centric creative studio offering digital marketing, design & branding, AI/ML development, and market research services.",
  },
  {
    question: "Where is Yuvabe based?",
    answer:
      "We are based in Auroville, India, and work with clients across India and internationally.",
  },
  {
    question: "Who does Yuvabe work with?",
    answer:
      "We partner with nonprofits, tech companies, sustainability organisations, startups, educational institutions, and mission-driven brands.",
  },
  {
    question: "What makes Yuvabe different from other agencies?",
    answer:
      "We combine design, technology, AI, and research under one roof—delivering integrated, human-centred, purpose-driven solutions.",
  },
  {
    question: "Do you work with organisations outside Auroville?",
    answer: "Yes, most of our clients are from India and global markets.",
  },
];

export default function Home() {
  return (
    <>
      {/* Add Next SEO configuration */}
      <NextSeo
        title="Yuvabe Studios | Digital Marketing, AI/ML, Design & Research in Auroville"
        description="Transform your business with Yuvabe Studios—offering digital marketing, AI/ML solutions, brand design, UI/UX, and market research. Human-centric innovation from Auroville, India."
        canonical="https://yuvabestudios.com/"
        openGraph={{
          url: "https://yuvabestudios.com/",
          title: "Yuvabe Studios | Digital, AI, Design & Research | Auroville",
          description:
            "Transform your business with Yuvabe Studios: digital marketing, AI/ML solutions, brand design, and research services. Human-centric innovation from Auroville, India.",
          images: [
            {
              url: "https://yuvabestudios.com/images/profile/logo.png",
              width: 1200,
              height: 630,
              alt: "Yuvabe Studios Open Graph Image",
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
              "Yuvabe Studios, Human-centric creative studio, India, digital marketing agency India, AI and machine learning solutions, brand design and UI/UX design, market research services, Digital marketing campaigns, Auroville creative studio",
          },
        ]}
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
                  "@type": "Organization",
                  "@id": "https://yuvabestudios.com/#organization",
                  name: "Yuvabe Studios",
                  url: "https://yuvabestudios.com",
                  logo: "https://yuvabestudios.com/images/profile/logo.png",
                  description:
                    "Yuvabe Studios is a human-centric creative agency based in Auroville, offering digital marketing, design, AI/ML solutions, and research services to help organizations build meaningful, future-ready digital experiences.",
                  email: ["sales@yuvabe.com", "info@yuvabe.com"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Kottakarai Road",
                    addressLocality: "Puducherry",
                    addressRegion: "Tamil Nadu",
                    postalCode: "605111",
                    addressCountry: "India",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      contactType: "Sales",
                      email: "sales@yuvabe.com",
                      availableLanguage: ["English, Tamil, Hindi"],
                      hoursAvailable: "Mon–Fri 09:30–17:00 IST",
                    },
                  ],
                  foundingDate: "2020-09-12",
                  founder: {
                    "@type": "Person",
                    "@id": "https://yuvabestudios.com/#founder",
                    name: "Sriman Kota",
                  },
                  brand: {
                    "@type": "Brand",
                    logo: "https://yuvabestudios.com/images/profile/logo.png",
                    brandColor: ["#5829c7", "#ffca2d"],
                    alternateName: "Yuvabe",
                    image: "https://yuvabestudios.com/images/profile/logo.png",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/yuvabe-studios/",
                    "https://www.facebook.com/profile.php?id=61582211932650",
                    "https://instagram.com/yuvabe.studios",
                  ],
                },

                {
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": "https://yuvabestudios.com/#localbusiness",
                  name: "Yuvabe Studios",
                  url: "https://yuvabestudios.com",
                  image: "https://yuvabestudios.com/images/profile/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Kottakarai Road",
                    addressLocality: "Puducherry",
                    addressRegion: "Tamil Nadu",
                    postalCode: "605111",
                    addressCountry: "India",
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
                    opens: "09:30",
                    closes: "17:00",
                  },
                  parentOrganization: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                },

                {
                  "@type": "Service",
                  name: "Digital Marketing Services",
                  description:
                    "how to choose a digital marketing studio for nonprofits and social enterprises",
                  provider: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                  areaServed: "Worldwide",
                },
                {
                  "@type": "Service",
                  name: "Design & Branding",
                  description:
                    "who can design a modern brand identity for purpose-driven organisations",
                  provider: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                  areaServed: "Worldwide",
                },
                {
                  "@type": "Service",
                  name: "AI & Machine Learning Solutions",
                  description:
                    "which studio builds custom AI and machine learning solutions for businesses",
                  provider: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                  areaServed: "Worldwide",
                },
                {
                  "@type": "Service",
                  name: "Research & Strategy",
                  description:
                    "who provides consumer insights and market research for emerging brands",
                  provider: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                  areaServed: "Worldwide",
                },

                {
                  "@type": "Person",
                  "@id": "https://yuvabestudios.com/#founder",
                  name: "Sriman Kota",
                  jobTitle: "Founder & CEO",
                  worksFor: {
                    "@id": "https://yuvabestudios.com/#organization",
                  },
                },

                {
                  "@type": "BreadcrumbList",
                  "@id": "https://yuvabestudios.com/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://yuvabestudios.com/",
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
          <Hero />
        </header>

        {/* Services Section */}
        <section id="services">
          <ServiceCard />
        </section>

        {/* Project Carousel Section */}
        <section id="projects">
          <ProjectCarousel />
        </section>

        {/* Client Logo Slider Section */}
        <section id="clients">
          <ClientLogoSlider />
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <Timeline />
        </section>

        {/* Core Values Section */}
        <section id="core-values">
          <CoreValues />
        </section>

        {/* Principles Section */}
        <section id="principles">
          <Principles />
        </section>

        <section id="video-testimonials">
          <VideoCarousel />
        </section>

        {/* Call to Action Section */}
        <section id="call-to-action">
          <Call />
        </section>

        <FaqSection
          title="Frequently Asked Questions (FAQ)"
          description="Here’s everything you need to know about how we work and what makes us different."
          faqs={homeFaqs}
        />
      </main>
    </>
  );
}
