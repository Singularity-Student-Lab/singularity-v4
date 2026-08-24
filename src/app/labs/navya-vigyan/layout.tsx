import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navya Vigyan Lab — Interdisciplinary Deep Technology",
  description:
    "Navya Vigyan Lab is the cross-domain frontier laboratory exploring Bio-Computation, Neurotechnology, Computational Physics, and Novel Materials at Singularity, SRM University-AP.",
  alternates: {
    canonical: "/labs/navya-vigyan",
  },
  openGraph: {
    title: "Navya Vigyan Lab — Interdisciplinary Science | Singularity",
    description: "Cross-domain scientific inquiry combining physics, biology, computation, and hardware.",
    url: "https://singularity-v4.vercel.app/labs/navya-vigyan",
    type: "article",
    images: [
      {
        url: "/images/interdisciplinary_lab_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Navya Vigyan Lab Interdisciplinary Research",
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
      "name": "Navya Vigyan Lab",
      "item": "https://singularity-v4.vercel.app/labs/navya-vigyan"
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
