import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agastya Lab — Robotics, Autonomous Systems & Embedded IoT",
  description:
    "Agastya Lab drives hardware engineering, micro-robotics, autonomous navigation, and IoT sensor mesh networks at Singularity, SRM University-AP.",
  alternates: {
    canonical: "/labs/agastya",
  },
  openGraph: {
    title: "Agastya Lab — Robotics & Embedded Systems | Singularity",
    description: "Autonomous robotics, embedded systems, and mesh communication nodes.",
    url: "https://singularity-v4.vercel.app/labs/agastya",
    type: "article",
    images: [
      {
        url: "/images/iot_lab_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Agastya Lab Robotics Research",
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
      "name": "Agastya Lab",
      "item": "https://singularity-v4.vercel.app/labs/agastya"
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
