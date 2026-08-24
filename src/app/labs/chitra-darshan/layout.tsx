import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chitra Darshan Lab — AR/VR, Spatial Computing & Game Dev",
  description:
    "Chitra Darshan Lab explores Spatial Computing, Virtual Reality, Augmented Reality, Real-time Graphics, and Game Engine architecture at SRM University-AP.",
  alternates: {
    canonical: "/labs/chitra-darshan",
  },
  openGraph: {
    title: "Chitra Darshan Lab — Spatial Computing & Game Dev | Singularity",
    description: "Immersive virtual realities, augmented interfaces, and procedural graphics engines.",
    url: "https://singularity-v4.vercel.app/labs/chitra-darshan",
    type: "article",
    images: [
      {
        url: "/images/gamedev_lab_bg.png",
        width: 1200,
        height: 630,
        alt: "Chitra Darshan Lab Spatial Computing and Game Development",
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
      "name": "Chitra Darshan Lab",
      "item": "https://singularity-v4.vercel.app/labs/chitra-darshan"
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
