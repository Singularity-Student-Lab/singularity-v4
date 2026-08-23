import type { Metadata } from "next";
import "./mobile-device-gate.css";
import MobileDeviceGate from "@/components/MobileDeviceGate";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Singularity - Student Research & Innovation Lab | SRM AP",
  description: "Singularity is a premier student research and innovation lab at SRM University-AP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-wf-page="697344b93b0e03014bb988f6"
      data-wf-site="697344b93b0e03014bb98903"
      lang="en"
      className="w-mod-js"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Michroma&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preload" href="/fonts/Lastik-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link href="/css/singularity-theme.css" rel="stylesheet" type="text/css" />
        <link href="/css/editorial-styles.css" rel="stylesheet" type="text/css" />
      </head>
      <body suppressHydrationWarning>
        <MobileDeviceGate>
          <PageTransition />
          {children}
        </MobileDeviceGate>
      </body>
    </html>
  );
}
