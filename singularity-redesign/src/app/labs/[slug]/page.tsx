import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { MemberList, PersonCard } from "@/components/People";
import { getLab, labImage, labs } from "@/data/site";
import { versioned } from "@/lib/image-version";

export const dynamicParams = false;

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const lab = getLab((await params).slug);
  if (!lab) return {};
  return { title: lab.name, description: `${lab.name}: ${lab.fieldLong}. ${lab.summary}` };
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const lab = getLab((await params).slug);
  if (!lab) notFound();

  const index = labs.indexOf(lab);
  const next = labs[(index + 1) % labs.length];
  const teamSize = lab.executives.length + lab.members.length;

  return (
    <>
      <PageHeader
        title={lab.name}
        eyebrow={`Lab ${lab.number} · ${lab.field}`}
        intro={lab.fieldLong}
        crumbs={[{ href: "/labs", label: "Laboratories" }]}
      />

      <section className="section">
        <div className="container article">
          <div>
            <div className="feature-media" style={{ marginBottom: 40 }}>
              <Image src={versioned(labImage(lab))} alt="" fill priority sizes="(max-width: 960px) 100vw, 800px" />
            </div>
            <h2>Overview</h2>
            <p className="lede">{lab.overview}</p>
            <h2 style={{ marginTop: 48 }}>Mission</h2>
            <blockquote className="quote">{lab.mission}</blockquote>
          </div>
          <aside className="aside-box" aria-label="Laboratory details">
            <h2>Laboratory Details</h2>
            <dl>
              <dt>Field</dt>
              <dd>{lab.field}</dd>
              <dt>Name</dt>
              <dd>{lab.meaning}</dd>
              <dt>Team</dt>
              <dd>
                {lab.executives.length} {lab.executives.length === 1 ? "executive" : "executives"}
                {lab.members.length > 0 && `, ${lab.members.length} members`} ({teamSize} in total)
              </dd>
              <dt>Topics</dt>
              <dd>
                <ul className="tags">
                  {lab.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="areas-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Research</p>
            <h2 id="areas-heading">Areas of Study</h2>
          </div>
          <ol className="numbered">
            {lab.areas.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">People</p>
            <h2 id="team-heading">Laboratory Team</h2>
          </div>
          <h3 className="subhead">{lab.executives.length === 1 ? "Executive" : "Executives"}</h3>
          <div className="person-grid">
            {lab.executives.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
          {lab.members.length > 0 && (
            <>
              <h3 className="subhead" style={{ marginTop: 56 }}>Members</h3>
              <MemberList members={lab.members} />
            </>
          )}
        </div>
      </section>

      <section className="section section--rule">
        <div className="container">
          <div className="section-head section-head--split" style={{ marginBottom: 0 }}>
            <Link className="text-link" href="/labs">All laboratories</Link>
            <Link className="text-link" href={`/labs/${next.slug}`}>Next: {next.name}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
