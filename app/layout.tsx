import type { Metadata } from "next";
import { Krub } from "next/font/google";
import "./globals.css";

const krub = Krub({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-krub",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wetrio.dev"),
  title: "WeTrio Development Lab",
  description:
    "The engineering arm of WeTrio. We prototype, build, and ship web products, dashboards, and automations — every project live at its own *.wetrio.dev address.",
  openGraph: {
    title: "WeTrio Development Lab",
    description:
      "The engineering arm of WeTrio. We prototype, build, and ship web products, dashboards, and automations.",
    url: "https://wetrio.dev",
    siteName: "WeTrio Development Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={krub.variable}>
      <body>{children}</body>
    </html>
  );
}
