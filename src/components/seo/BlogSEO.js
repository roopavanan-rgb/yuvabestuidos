import { NextSeo } from "next-seo";

export default function BlogSEO({
  title,
  description,
  slug,
  image,
  author,
  role,
  date,
  readTime,
}) {
  const url = `https://yuvabestudios.com/blog/${slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yuvabestudios.com",
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
        name: title,
        item: url,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: author,
      jobTitle: role,
      worksFor: {
        "@type": "Organization",
        name: "Yuvabe Studios",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Yuvabe Studios",
      logo: {
        "@type": "ImageObject",
        url: "https://yuvabestudios.com/images/profile/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    datePublished: date,
    dateModified: date,
    timeRequired: `PT${readTime}M`,
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
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

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </>
  );
}
