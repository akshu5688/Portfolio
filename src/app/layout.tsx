import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Akshat Mehra — AI & Full Stack Developer",
    template: "%s · Akshat Mehra",
  },
  description:
    "Portfolio of Akshat Mehra — AI Developer and Full Stack Developer building production-ready web applications with React, Next.js, Supabase, and modern AI workflows.",
  keywords: [
    "Akshat Mehra",
    "AI Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Supabase",
    "TypeScript",
    "Software Developer",
    "Himachal Pradesh",
  ],
  authors: [{ name: "Akshat Mehra" }],
  creator: "Akshat Mehra",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Akshat Mehra — AI & Full Stack Developer",
    description:
      "Building production-ready AI-powered web apps and full-stack SaaS products.",
    siteName: "Akshat Mehra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Mehra — AI & Full Stack Developer",
    description:
      "Building production-ready AI-powered web apps and full-stack SaaS products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <BackgroundGraphics />
        <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
