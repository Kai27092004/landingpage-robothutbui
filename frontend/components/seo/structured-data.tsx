export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Robot Vacuum",
    url: "https://robotvacuum.com",
    logo: "https://robotvacuum.com/logo.png",
    description: "Premium AI-powered robot vacuum cleaners",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-RVC-0001",
      contactType: "Customer Service",
      email: "support@robotvacuum.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://facebook.com/robotvacuum",
      "https://twitter.com/robotvacuum",
      "https://instagram.com/robotvacuum",
      "https://youtube.com/robotvacuum",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Robot Vacuum Cleaner",
    description: "AI Powered Robot Vacuum with LiDAR Navigation, 5000Pa suction, and intelligent obstacle avoidance",
    brand: {
      "@type": "Brand",
      name: "Robot Vacuum",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "599.00",
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      url: "https://robotvacuum.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
    image: "https://robotvacuum.com/robot-hero.png",
    sku: "RVC-001",
    mpn: "RVC-2026",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does the battery last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Robot Vacuum Cleaner runs for up to 180 minutes (3 hours) on a single charge, which is enough to clean most homes up to 2500 sq ft.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on carpets and hardwood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! It automatically adjusts suction power and brush height based on floor type. It works excellently on hardwood, tile, laminate, and carpets up to 20mm thick.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe for pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! It is designed with pets in mind. It avoids pet waste, handles pet hair efficiently with its tangle-free brush, and operates quietly to avoid startling your pets.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://robotvacuum.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Robot Vacuum Cleaner",
        item: "https://robotvacuum.com/#product",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Robot Vacuum",
    url: "https://robotvacuum.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://robotvacuum.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
