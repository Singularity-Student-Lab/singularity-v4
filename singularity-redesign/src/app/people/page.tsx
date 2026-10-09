import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { MemberList, PersonCard } from "@/components/People";
import { faculty, founder, labs } from "@/data/site";

export const metadata: Metadata = {
  title: "People",
  description: "Faculty mentors, founder, laboratory executives and members of the Singularity Research Lab.",
};

export default function People() {
  return (
    <>
      <PageHeader
        title="People"
        eyebrow="People"
        intro="The faculty mentors, student executives and members who make up Singularity's seven laboratories."
      />

      <section className="section" id="faculty" aria-labelledby="faculty-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Mentorship</p>
            <h2 id="faculty-heading">Faculty and Founder</h2>
          </div>
          <div className="person-grid">
            {faculty.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
            <PersonCard person={founder} />
          </div>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="labs-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Laboratories</p>
            <h2 id="labs-heading">Executives and Members</h2>
          </div>
          {labs.map((lab) => (
            <div key={lab.slug} className="lab-team" id={lab.slug}>
              <div className="lab-team-head">
                <h3>
                  <span className="lab-card-num" style={{ display: "block", marginBottom: 4 }}>LAB {lab.number}</span>
                  {lab.name}
                </h3>
                <Link className="text-link" href={`/labs/${lab.slug}`}>{lab.field}</Link>
              </div>
              <div className="person-grid">
                {lab.executives.map((p) => (
                  <PersonCard key={p.name} person={p} />
                ))}
              </div>
              {lab.members.length > 0 && (
                <>
                  <h4 className="subhead">Members</h4>
                  <MemberList members={lab.members} />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
