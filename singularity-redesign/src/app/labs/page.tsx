import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { labImage, labs } from "@/data/site";
import { versioned } from "@/lib/image-version";

export const metadata: Metadata = {
  title: "Laboratories",
  description: "The seven laboratories of the Singularity Research Lab.",
};

export default function Labs() {
  return (
    <>
      <PageHeader
        title="Laboratories"
        eyebrow="Laboratories"
        intro="Singularity is organised into seven laboratories. Each is led by student executives and focuses on a single field."
      />
      <section className="section">
        <div className="container">
          <ul className="lab-grid">
            {labs.map((lab) => (
              <li key={lab.slug} className="lab-card">
                <Link href={`/labs/${lab.slug}`}>
                  <div className="lab-card-media">
                    <Image src={versioned(labImage(lab))} alt="" fill sizes="(max-width: 600px) 100vw, 380px" />
                  </div>
                  <span className="lab-card-num">LAB {lab.number}</span>
                  <h3>{lab.name}</h3>
                  <p className="lab-card-field">{lab.fieldLong}</p>
                  <p>{lab.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
