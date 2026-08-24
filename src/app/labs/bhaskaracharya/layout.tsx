import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhaskaracharya Lab — Cloud Systems & Distributed Architecture",
  description:
    "Bhaskaracharya Lab pioneers Distributed Computing, Cloud-Native Infrastructures, High-Concurrency Microservices, and Edge Computing at SRM University-AP.",
  alternates: {
    canonical: "/labs/bhaskaracharya",
  },
  openGraph: {
    title: "Bhaskaracharya Lab — Cloud & Web Systems | Singularity",
    description: "High-scale distributed infrastructure, edge mesh systems, and cloud architectures.",
    url: "https://singularity-v4.vercel.app/labs/bhaskaracharya",
    type: "article",
    images: [
      {
        url: "/images/cloud_lab_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Bhaskaracharya Lab Cloud Architecture Research",
      },
    ],
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
      "name": "Research Labs",
      "item": "https://singularity-v4.vercel.app/#First"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bhaskaracharya Lab",
      "item": "https://singularity-v4.vercel.app/labs/bhaskaracharya"
    }
  ]
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
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
