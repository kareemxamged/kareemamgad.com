import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kareem Amged | Systems, E-Commerce & Growth Operator",
  description:
    "Bridging technical systems and scalable revenue. High-converting Next.js 16 platforms, automated Meta Ads operations, real-time data pipelines, and multi-tenant architectures.",
  keywords: [
    "Systems Operator",
    "Growth Operations",
    "E-Commerce Architect",
    "Meta Ads Automation",
    "Next.js 16",
    "Full-Stack Engineer",
    "Kareem Amged",
  ],
  authors: [{ name: "Kareem Amged", url: "https://kareemamgad.com" }],
  openGraph: {
    title: "Kareem Amged | Systems, E-Commerce & Growth Operator",
    description: "Bridging technical systems and scalable revenue with high-end architecture and marketing automation.",
    url: "https://kareemamgad.com",
    siteName: "Kareem Amged Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-[100dvh] bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-emerald-500/20 selection:text-emerald-400 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
