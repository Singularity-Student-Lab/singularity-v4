import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prajna Kritrima Lab — Artificial Intelligence & Machine Learning",
  description:
    "Prajna Kritrima Lab is the AI/ML research division of Singularity at SRM University-AP, pioneering deep neural networks, LLMs, computer vision, and cognitive architectures.",
  alternates: {
    canonical: "/labs/prajna-kritrima",
  },
  openGraph: {
    title: "Prajna Kritrima Lab — AI/ML & GenAI Research | Singularity",
    description:
      "Explore cutting-edge student research in Deep Learning, Large Language Models, and Autonomous AI systems.",
    url: "https://singularity-v4.vercel.app/labs/prajna-kritrima",
    type: "article",
    images: [
      {
        url: "/images/aiml_lab_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Prajna Kritrima Lab Artificial Intelligence Research",
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
      "name": "Prajna Kritrima Lab",
      "item": "https://singularity-v4.vercel.app/labs/prajna-kritrima"
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
