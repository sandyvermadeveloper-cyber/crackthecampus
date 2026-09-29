import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Complete Placement Preparation System | Crack The Campus",
  description:
    "Crack The Campus (CTC) is India's campus-to-career platform: AI-proctored assessments, aptitude and coding practice, CTC Score credentialing, and job opportunities for engineering students.",
  keywords: [
    "premium assessment platform",
    "placement success",
    "placement preparation",
    "aptitude tests",
    "coding tests",
    "AI-driven learning",
    "campus placements",
    "internship opportunities",
    "career readiness",
    "engineering students",
    "CTC Score",
  ],
  authors: [{ name: "Crack The Campus" }],
  creator: "Crack The Campus",
  publisher: "Crack The Campus",
  metadataBase: new URL("https://crackthecampus.com"),
  openGraph: {
    title: "India's Premium Assessment Platform for Placement Success",
    description:
      "India's first campus-to-career transformation platform, delivering industry-style assessments, AI-driven learning, and exclusive job opportunities.",
    url: "https://crackthecampus.com",
    siteName: "Crack The Campus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "India's Premium Assessment Platform for Placement Success",
    description:
      "India's first campus-to-career transformation platform, delivering industry-style assessments, AI-driven learning, and exclusive job opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0B0E] text-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}
