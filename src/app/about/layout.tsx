import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Mission, Vision & 7 Research Pillars",
  description:
    "Discover the story, vision, and core philosophy of Singularity Student Research Lab at SRM University-AP. 100% student-driven, deep-technology innovation across 7 research tracks.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Singularity — Student Research & Deep Tech Innovation Lab",
    description:
      "Explore the mission, leadership, and 7 research pillars driving student-led innovation at SRM University-AP.",
    url: "https://singularity-v4.vercel.app/about",
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
    title: "About Singularity — Student Research & Deep Tech Lab",
    description: "Explore the mission and 7 research pillars of Singularity at SRM University-AP.",
    images: ["/images/group-discussion-scene.webp"],
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://singularity-v4.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About Us",
      "item": "https://singularity-v4.vercel.app/about"
    }
  ]
};

export default function AboutLayout({
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
