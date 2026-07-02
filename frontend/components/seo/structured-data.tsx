export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Robot Hút Bụi Thông Minh",
    url: "https://robothutbui.vercel.app",
    logo: "https://robothutbui.vercel.app/android-chrome-192x192.png",
    description: "Robot hút bụi thông minh cao cấp với công nghệ AI và điều hướng LiDAR",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-800-RVC-0001",
      contactType: "Dịch Vụ Khách Hàng",
      email: "support@robothutbui.vn",
      availableLanguage: ["Vietnamese", "Tiếng Việt"],
    },
    sameAs: [
      "https://facebook.com/robothutbui",
      "https://twitter.com/robothutbui",
      "https://instagram.com/robothutbui",
      "https://youtube.com/robothutbui",
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Robot Hút Bụi Thông Minh",
    description: "Robot hút bụi AI với điều hướng LiDAR, lực hút 5000Pa, và tránh vật cản thông minh. Làm sạch tự động hoàn hảo cho ngôi nhà Việt.",
    brand: {
      "@type": "Brand",
      name: "Robot Hút Bụi Thông Minh",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "12990000",
      priceCurrency: "VND",
      priceValidUntil: "2026-12-31",
      url: "https://robothutbui.vercel.app",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
    image: "https://robothutbui.vercel.app/robot-hero.png",
    sku: "RHB-VN-001",
    mpn: "RHB-2026",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Pin sử dụng được bao lâu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Robot Hút Bụi Thông Minh hoạt động liên tục lên đến 180 phút (3 giờ) với một lần sạc đầy, đủ để làm sạch hầu hết các ngôi nhà lên đến 230m².",
        },
      },
      {
        "@type": "Question",
        name: "Robot có hoạt động tốt trên thảm và sàn gỗ không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hoàn toàn được! Robot tự động điều chỉnh lực hút và độ cao bàn chải dựa trên loại sàn nhà. Hoạt động xuất sắc trên sàn gỗ, gạch, laminate và thảm dày đến 20mm.",
        },
      },
      {
        "@type": "Question",
        name: "Robot có an toàn cho thú cưng không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chắc chắn rồi! Robot được thiết kế đặc biệt cho gia đình có thú cưng. Nó tránh chất thải của thú cưng, xử lý lông động vật hiệu quả với bàn chải chống rối, và hoạt động êm ái không làm giật mình thú cưng.",
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
        name: "Trang Chủ",
        item: "https://robothutbui.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Robot Hút Bụi Thông Minh",
        item: "https://robothutbui.vercel.app/#product",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Robot Hút Bụi Thông Minh",
    url: "https://robothutbui.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://robothutbui.vercel.app/search?q={search_term_string}",
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
