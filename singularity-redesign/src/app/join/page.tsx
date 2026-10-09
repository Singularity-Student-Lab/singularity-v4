import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { joinSteps, labs, recruitment, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Join the Lab",
  description: "How recruitment works at the Singularity Research Lab, and the current status of applications.",
};

export default function Join() {
  return (
    <>
      <PageHeader
        title="Join the Lab"
        eyebrow="Get Involved"
        intro="Singularity does not run open enrolment. We recruit through dedicated drives: a defined window in which students apply, are evaluated, and join the laboratory that best fits their interests."
      />

      <section className="section" aria-labelledby="status-heading">
        <div className="container">
          <h2 id="status-heading" className="section-head">Current Status</h2>
          <div className="status" role="status">
            <div>
              <h3>{recruitment.status}</h3>
              <p>{recruitment.detail}</p>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <a className="btn" href={site.instagram} target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
            <a className="btn btn--outline" href={site.linkedin} target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>
          </div>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Process</p>
            <h2 id="process-heading">How Recruitment Works</h2>
          </div>
          <ol className="numbered">
            {joinSteps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="choose-heading">
        <div className="container feature" style={{ alignItems: "start" }}>
          <div>
            <p className="eyebrow">Laboratories</p>
            <h2 id="choose-heading">Choose Your Laboratory</h2>
            <p>
              Read about each laboratory&rsquo;s focus before applying. For questions about recruitment, write to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <ul className="link-list">
            {labs.map((lab) => (
              <li key={lab.slug}>
                <Link href={`/labs/${lab.slug}`}>
                  {lab.name}: {lab.field}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
