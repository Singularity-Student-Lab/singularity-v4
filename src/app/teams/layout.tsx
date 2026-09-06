import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams — Current Executives & Advisory Panel",
  description:
    "Meet the current executives and advisory panel of Singularity Student Research Lab at SRM University-AP. Discover the leadership driving innovation across our 7 research labs.",
  alternates: {
    canonical: "/teams",
  },
  openGraph: {
    title: "Singularity Teams — Leadership & Advisory",
    description:
      "Explore the leadership team and advisory panel behind Singularity Student Research Lab at SRM University-AP.",
    url: "https://singularity-v4.vercel.app/teams",
    type: "website",
    images: [
      {
        url: "/images/group-discussion-scene.webp",
        width: 1200,
        height: 630,
        alt: "Singularity Student Research Lab Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singularity Teams — Leadership & Advisory",
    description: "Meet the leaders and advisors behind Singularity Lab at SRM University-AP.",
    images: ["/images/group-discussion-scene.webp"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://singularity-v4.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Teams",
      item: "https://singularity-v4.vercel.app/teams",
    },
  ],
};

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      {children}
    </>
  );
}
