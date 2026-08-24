import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varahamihira Lab — Cybersecurity, Cryptography & Blockchain",
  description:
    "Varahamihira Lab investigates Offensive Security, Cryptographic Protocols, Zero-Knowledge Proofs, and Distributed Ledger architectures at Singularity, SRM University-AP.",
  alternates: {
    canonical: "/labs/varahamihira",
  },
  openGraph: {
    title: "Varahamihira Lab — Cybersecurity & Blockchain Research | Singularity",
    description: "Cryptographic protocol engineering, threat modeling, and blockchain security.",
    url: "https://singularity-v4.vercel.app/labs/varahamihira",
    type: "article",
    images: [
      {
        url: "/images/cybersec_lab_bg.png",
        width: 1200,
        height: 630,
        alt: "Varahamihira Lab Cybersecurity Research",
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
      "name": "Varahamihira Lab",
      "item": "https://singularity-v4.vercel.app/labs/varahamihira"
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
