import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robot Vacuum Cleaner - AI Robot Vacuum with LiDAR Navigation",
  description: "Experience the future of smart cleaning with Robot Vacuum Cleaner. AI-powered robot vacuum with advanced LiDAR navigation, 5000Pa suction, and intelligent obstacle avoidance.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  keywords: [
    "robot vacuum",
    "AI vacuum",
    "LiDAR navigation",
    "smart home",
    "automated cleaning",
    "pet hair vacuum",
    "Robot Vacuum Cleaner",
  ],
  authors: [{ name: "HELIO" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robotvacuum.com",
    title: "Robot Vacuum Cleaner - The Future of Smart Cleaning",
    description: "AI Powered Robot Vacuum with LiDAR Navigation, 5000Pa suction, and intelligent obstacle avoidance.",
    siteName: "Robot Vacuum",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robot Vacuum Cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Vacuum Cleaner - AI Robot Vacuum",
    description: "Experience the future of smart cleaning with advanced AI and LiDAR technology.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
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
