import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wetrio.dev"),
  title: "WeTrio Development Lab — IT & SaaS Product Development",
  description:
    "An IT & SaaS product development agency. We take digital products from idea to production — architecture, design, engineering, and launch.",
  openGraph: {
    title: "WeTrio Development Lab — IT & SaaS Product Development",
    description:
      "An IT & SaaS product development agency. We take digital products from idea to production — architecture, design, engineering, and launch.",
    url: "https://wetrio.dev",
    siteName: "WeTrio Development Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
