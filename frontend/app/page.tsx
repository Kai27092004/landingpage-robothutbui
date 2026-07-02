"use client"; // Cần thiết cho dynamic import

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/features/hero/hero-section";
import { BrandTrust } from "@/features/brands/brand-trust";
import { FeaturesGrid } from "@/features/features/features-grid";
import { ProductShowcase } from "@/features/showcase/product-showcase";
import { AiTechnology } from "@/features/technology/ai-technology";
import { Specifications } from "@/features/specifications/specifications";
import { InteractiveDemo } from "@/features/demo/interactive-demo";
import { VideoSection } from "@/features/video/video-section";
import { ProductGallery } from "@/features/gallery/product-gallery";
import { ReviewsCarousel } from "@/features/reviews/reviews-carousel";
import { ComparisonTable } from "@/features/comparison/comparison-table";
import { FaqSection } from "@/features/faq/faq-section";
import { NewsletterForm } from "@/features/newsletter/newsletter-form";

// Lazy load Chatbot để tăng điểm Performance
const ChatbotWrapper = dynamic(
  () => import("@/components/chatbot/chatbot-wrapper").then((mod) => mod.ChatbotWrapper),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandTrust />
      <FeaturesGrid />
      <ProductShowcase />
      <AiTechnology />
      <Specifications />
      <InteractiveDemo />
      <VideoSection />
      <ProductGallery />
      <ReviewsCarousel />
      <ComparisonTable />
      <FaqSection />
      <NewsletterForm />
      <Footer />
      <ChatbotWrapper />
    </main>
  );
}