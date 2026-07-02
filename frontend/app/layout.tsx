import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { StructuredData } from "@/components/seo/structured-data";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Robot Hút Bụi Thông Minh - AI Điều Hướng LiDAR 5000Pa",
  description: "Trải nghiệm tương lai của việc dọn dẹp thông minh với Robot Hút Bụi AI. Điều hướng LiDAR tiên tiến, lực hút 5000Pa, tránh vật cản thông minh và tự động làm sạch hoàn hảo.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://robothutbui.vercel.app'),
  keywords: [
    "robot hút bụi",
    "robot hút bụi thông minh",
    "robot hút bụi AI",
    "LiDAR navigation",
    "nhà thông minh",
    "dọn dẹp tự động",
    "hút lông thú cưng",
    "robot vacuum",
    "máy hút bụi tự động",
  ],
  authors: [{ name: "Robot Hút Bụi Việt Nam" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://robothutbui.vercel.app",
    title: "Robot Hút Bụi Thông Minh - Tương Lai Của Dọn Dẹp AI",
    description: "Robot Hút Bụi AI với điều hướng LiDAR, lực hút 5000Pa, tránh vật cản thông minh. Làm sạch tự động hoàn hảo cho ngôi nhà Việt.",
    siteName: "Robot Hút Bụi Thông Minh",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robot Hút Bụi Thông Minh - AI Điều Hướng LiDAR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Hút Bụi Thông Minh - AI Điều Hướng LiDAR 5000Pa",
    description: "Trải nghiệm tương lai dọn dẹp thông minh với công nghệ AI và LiDAR tiên tiến. Lực hút 5000Pa, tự động hoàn toàn.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/android-chrome-192x192.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className={plusJakartaSans.variable}>
      <head>
        <StructuredData />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
