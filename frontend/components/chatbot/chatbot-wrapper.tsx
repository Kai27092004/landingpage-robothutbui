"use client";

import dynamic from "next/dynamic";

// Lazy load Chatbot component để giảm JavaScript bundle size
// Chỉ load khi user tương tác hoặc sau khi page load xong
const Chatbot = dynamic(
  () => import("@/components/chatbot/chatbot").then((mod) => mod.Chatbot),
  {
    ssr: false,
    loading: () => null,
  }
);

export function ChatbotWrapper() {
  return <Chatbot />;
}
