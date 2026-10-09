import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = EB_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.fullName,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.fullName,
    title: site.fullName,
    description: site.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${sans.variable} ${serif.variable}`}>
      <body id="top">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
