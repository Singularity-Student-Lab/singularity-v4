import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Singularity — Research Fellowship & Project Tracks",
  description:
    "Apply to join Singularity Student Research Lab at SRM University-AP. Work on frontier projects across AI/ML, Quantum Computing, AR/VR, Cybersecurity, Cloud, Robotics, and Interdisciplinary Sciences.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Join Singularity — Student Research Fellowship | SRM AP",
    description:
      "Join the elite student research community building the future of deep technology at SRM University-AP.",
    url: "https://singularity-v4.vercel.app/join",
    type: "website",
    images: [
      {
        url: "/images/group-discussion-scene.webp",
        width: 1200,
        height: 630,
        alt: "Join Singularity Student Research Fellowship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Singularity — Research Fellowship",
    description: "Apply to join Singularity Student Research Lab at SRM University-AP.",
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
      "name": "Join Lab",
      "item": "https://singularity-v4.vercel.app/join"
    }
  ]
};

export default function JoinLayout({
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
