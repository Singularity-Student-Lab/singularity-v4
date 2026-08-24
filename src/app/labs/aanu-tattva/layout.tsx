import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aanu Tattva Lab — Quantum Computing & Physics",
  description:
    "Aanu Tattva Lab leads Quantum Information, Quantum Algorithms, and Quantum Simulation research at Singularity, SRM University-AP.",
  alternates: {
    canonical: "/labs/aanu-tattva",
  },
  openGraph: {
    title: "Aanu Tattva Lab — Quantum Computing Research | Singularity",
    description: "Frontier quantum algorithms and quantum computational simulations.",
    url: "https://singularity-v4.vercel.app/labs/aanu-tattva",
    type: "article",
    images: [
      {
        url: "/images/quantum_lab_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Aanu Tattva Lab Quantum Computing Research",
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
      "name": "Aanu Tattva Lab",
      "item": "https://singularity-v4.vercel.app/labs/aanu-tattva"
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
