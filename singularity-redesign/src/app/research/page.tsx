import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { labs, themes } from "@/data/site";

export const metadata: Metadata = {
  title: "Research",
  description: "Research themes and areas of study across the seven laboratories of the Singularity Research Lab.",
};

export default function Research() {
  return (
    <>
      <PageHeader
        title="Research"
        eyebrow="Research"
        intro="Five themes run through the work of our seven laboratories, from quantum computation to inclusive access to technology."
      />

      <section className="section" aria-labelledby="themes-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Themes</p>
            <h2 id="themes-heading">Research Themes</h2>
          </div>
          <ol className="theme-rows">
            {themes.map((t) => (
              <li key={t.title}>
                <p className="eyebrow">{t.category}</p>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="areas-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">By laboratory</p>
            <h2 id="areas-heading">Areas of Study</h2>
          </div>
          <ol className="theme-rows">
            {labs.map((lab) => (
              <li key={lab.slug}>
                <div>
                  <p className="eyebrow">Lab {lab.number}</p>
                  <p style={{ margin: 0, color: "var(--muted)" }}>{lab.field}</p>
                </div>
                <div>
                  <h3>
                    <Link href={`/labs/${lab.slug}`} style={{ color: "inherit" }}>{lab.name}</Link>
                  </h3>
                  <p>{lab.areas.map((a) => a.title).join(" · ")}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
