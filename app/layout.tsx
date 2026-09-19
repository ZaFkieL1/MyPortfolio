import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { portfolioContent } from "@/content/portfolio";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Henry Gonzalez — Full-Stack Product Engineer",
    template: "%s — Henry Gonzalez",
  },
  description: "Full-stack product engineering for SaaS platforms, internal tools, and custom web applications.",
  applicationName: "Henry Gonzalez Portfolio",
  authors: [{ name: portfolioContent.person.name }],
  keywords: ["Full-stack developer", "Product engineer", "SaaS development", "Custom web applications"],
  robots: {
    index: portfolioContent.indexable,
    follow: portfolioContent.indexable,
    googleBot: { index: portfolioContent.indexable, follow: portfolioContent.indexable },
  },
  openGraph: {
    title: "Henry Gonzalez — Full-Stack Product Engineer",
    description: "Digital products built from requirements through production.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Gonzalez — Full-Stack Product Engineer",
    description: "Digital products built from requirements through production.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Next 16 only forces instant scroll-to-top on route changes when this attribute is present;
    // without it, the global `scroll-behavior: smooth` leaves navigation mid-page.
    <html lang="en" className={geist.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
