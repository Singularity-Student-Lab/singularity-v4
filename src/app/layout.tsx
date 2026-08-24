import type { Metadata, Viewport } from "next";
import PageTransition from "@/components/PageTransition";

const SITE_URL = "https://singularity-v4.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Singularity — Student Research & Innovation Lab | SRM AP",
    template: "%s | Singularity Lab",
  },
  description:
    "Singularity is the premier student research and deep-technology innovation lab at SRM University-AP. We engineer frontier technologies across AI/ML, Quantum Computing, AR/VR, Cybersecurity, Cloud Systems, Robotics, and Interdisciplinary Sciences.",
  keywords: [
    "Singularity",
    "Singularity Lab",
    "Singularity SRM AP",
    "Student Research Lab",
    "SRM University AP",
    "Artificial Intelligence",
    "Quantum Computing",
    "Machine Learning",
    "Robotics",
    "Cybersecurity",
    "Deep Tech",
    "Prajna Kritrima",
    "Aanu Tattva",
    "Chitra Darshan",
    "Varahamihira",
    "Bhaskaracharya",
    "Agastya",
    "Navya Vigyan",
  ],
  authors: [{ name: "Singularity Student Research Lab", url: SITE_URL }],
  creator: "Singularity Student Lab",
  publisher: "SRM University-AP",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Singularity",
    title: "Singularity — Student Research & Innovation Lab | SRM AP",
    description:
      "Premier student research and deep-technology innovation laboratory at SRM University-AP. 7 research labs, 25+ student researchers, 100% student-driven.",
    images: [
      {
        url: "/images/group-discussion-scene.webp",
        width: 1200,
        height: 630,
        alt: "Singularity Student Research Lab at SRM University-AP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singularity — Student Research & Innovation Lab",
    description:
      "Premier student research and deep-technology innovation laboratory at SRM University-AP.",
    images: ["/images/group-discussion-scene.webp"],
    creator: "@thesingularity",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/singularity_logo.webp",
    apple: "/images/singularity_logo.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

const JSON_LD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: "Singularity Student Research Lab",
      alternateName: ["Singularity SRM AP", "The Singularity Lab"],
      url: SITE_URL,
      logo: `${SITE_URL}/images/singularity_logo.webp`,
      image: `${SITE_URL}/images/group-discussion-scene.webp`,
      description:
        "Singularity is a premier student research and deep-technology innovation laboratory at SRM University-AP across AI/ML, Quantum Computing, Game Dev, Cybersecurity, Cloud, Robotics, and Interdisciplinary Sciences.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SR-209 Lab, Academic Block, SRM University-AP",
        addressLocality: "Amaravati",
        addressRegion: "Andhra Pradesh",
        postalCode: "522240",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/thesingularity.srmap",
        "https://www.linkedin.com/company/singularity-student-lab-srmap/",
      ],
      email: "contact@thesingularity.in",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Singularity",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@type": "ItemList",
      name: "Singularity Research Labs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Prajna Kritrima Lab — AI/ML & GenAI",
          url: `${SITE_URL}/labs/prajna-kritrima`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Aanu Tattva Lab — Quantum Computing",
          url: `${SITE_URL}/labs/aanu-tattva`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chitra Darshan Lab — AR/VR & Game Dev",
          url: `${SITE_URL}/labs/chitra-darshan`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Varahamihira Lab — Cybersecurity & Blockchain",
          url: `${SITE_URL}/labs/varahamihira`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Bhaskaracharya Lab — Cloud & Web Systems",
          url: `${SITE_URL}/labs/bhaskaracharya`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Agastya Lab — Robotics & Embedded IoT",
          url: `${SITE_URL}/labs/agastya`,
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Navya Vigyan Lab — Interdisciplinary Tech",
          url: `${SITE_URL}/labs/navya-vigyan`,
        },
      ],
    },
  ],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Michroma&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/fonts/Lastik-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/singularity_scene-1-.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/images/singularity_logo.webp" as="image" type="image/webp" fetchPriority="high" />
        <link href="/css/singularity-theme.css" rel="stylesheet" type="text/css" />
        <link href="/css/editorial-styles.css" rel="stylesheet" type="text/css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
        />
      </head>
      <body suppressHydrationWarning>
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
