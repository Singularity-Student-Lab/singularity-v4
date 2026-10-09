import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PersonCard } from "@/components/People";
import { faculty, founder, mission, principles, site, vision } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "The vision, mission, mentorship and principles of the Singularity Research Lab.",
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About Singularity"
        eyebrow="About"
        intro="Singularity Research Lab is a research laboratory organised into seven laboratories and guided by faculty mentors."
      />

      <section className="section">
        <div className="container article">
          <div>
            <h2>Who We Are</h2>
            <p className="lede">
              Singularity brings together undergraduates who want to study emerging technologies in depth. Members
              join one of seven laboratories, each with its own field, student executives and research directions.
            </p>
            <p>
              The lab was founded by students, with the support of the School of Applied Science and Engineering and
              the Department of Computer Science and Engineering. It is run entirely by
              students, and faculty provide mentorship and advice.
            </p>
            <p>
              Each laboratory is named in Sanskrit or after a figure from India&rsquo;s scientific heritage, such as
              Varahamihira, Bhaskaracharya and Agastya. The names reflect a long tradition of inquiry that the lab
              hopes to continue.
            </p>
          </div>
          <aside className="aside-box" aria-label="At a glance">
            <h2>At a Glance</h2>
            <dl>
              <dt>Location</dt>
              <dd>SR-209, Academic Block, Amaravati</dd>
              <dt>Laboratories</dt>
              <dd>Seven</dd>
              <dt>Student researchers</dt>
              <dd>{site.researchers}</dd>
              <dt>Supported by</dt>
              <dd>Microsoft Student Community</dd>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--stone" id="vision" aria-labelledby="vision-heading">
        <div className="container">
          <h2 id="vision-heading" className="section-head">Vision and Mission</h2>
          <div className="feature" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">Vision</p>
              <blockquote className="quote">{vision}</blockquote>
            </div>
            <div>
              <p className="eyebrow">Mission</p>
              <blockquote className="quote">{mission}</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Principles</p>
            <h2 id="principles-heading">How We Work</h2>
          </div>
          <ol className="numbered">
            {principles.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="leadership-heading">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <p className="eyebrow">Mentorship</p>
              <h2 id="leadership-heading" style={{ margin: 0 }}>Founder and Faculty</h2>
            </div>
            <Link className="text-link" href="/people">All people</Link>
          </div>
          <div className="person-grid">
            <PersonCard person={founder} />
            {faculty.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
