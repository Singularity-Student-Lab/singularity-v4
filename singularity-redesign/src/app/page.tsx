import Image from "next/image";
import Link from "next/link";
import { PersonCard } from "@/components/People";
import { faculty, labImage, labs, site } from "@/data/site";
import { versioned } from "@/lib/image-version";

const executives = labs.reduce((n, lab) => n + lab.executives.length, 0);

const stats = [
  { value: String(labs.length), label: "Laboratories", note: "Each devoted to a single field, from artificial intelligence to robotics." },
  { value: site.researchers, label: "Student researchers", note: "Undergraduates working across all seven laboratories." },
  { value: String(executives), label: "Student executives", note: "Leading the day-to-day work of each laboratory." },
  { value: String(faculty.length), label: "Faculty mentors", note: "Guiding the lab's direction and research practice." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Image src={versioned("/images/home/hero.jpg")} alt="" fill priority sizes="100vw" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Amaravati, India</p>
            <h1>Singularity Research Lab</h1>
            <hr className="hero-rule" />
            <p>
              A student research community of seven laboratories working across artificial intelligence, quantum
              computing, immersive technologies, cybersecurity, cloud systems, robotics and interdisciplinary science.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/labs">Explore the laboratories</Link>
              <Link className="btn btn--ghost" href="/about">About Singularity</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section glance" aria-labelledby="glance-heading">
        <div className="container">
          <div className="glance-head">
            <p className="eyebrow">At a Glance</p>
            <h2 id="glance-heading" className="glance-statement">
              Seven laboratories under one roof, each devoted to a single field and guided by faculty mentors.
            </h2>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat-label">{s.label}</dt>
                <dd className="stat-value">{s.value}</dd>
                <dd className="stat-note">{s.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="what-heading">
        <div className="container">
          <div className="feature">
            <div>
              <p className="eyebrow">About</p>
              <h2 id="what-heading">What is Singularity?</h2>
              <p>
                Singularity Research Lab is based in Amaravati, Andhra Pradesh. It brings together undergraduates who want to go beyond the curriculum and study emerging
                technologies in depth, under the guidance of experienced faculty mentors.
              </p>
              <p>
                The lab is organised into seven laboratories, each led by student executives and focused on a single
                field. Members learn by building, reading and testing ideas together, and cross-laboratory work is
                encouraged.
              </p>
              <Link className="text-link" href="/about">Learn more about Singularity</Link>
            </div>
            <div className="feature-media">
              <Image src={versioned("/images/home/about.jpg")} alt="" fill sizes="(max-width: 960px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="partners-heading">
        <div className="container feature">
          <div>
            <p className="eyebrow">Mentorship and Support</p>
            <h2 id="partners-heading">Our Mentors and Partners</h2>
            <p>
              Singularity is mentored by faculty from the School of Applied Science and Engineering and the
              Department of Computer Science and Engineering, and is supported by the Microsoft Student Community.
            </p>
          </div>
          <ul className="link-list">
            <li><Link href="/people#faculty">Faculty mentors and advisors</Link></li>
            <li><Link href="/about#vision">Our vision and mission</Link></li>
            <li><a href={`mailto:${site.email}`}>Partner with Singularity</a></li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="research-heading">
        <div className="container feature feature--reverse">
          <div>
            <p className="eyebrow">Research</p>
            <h2 id="research-heading">
              <Link href="/research">Research at Singularity</Link>
            </h2>
            <p>
              Our members study questions that cross traditional boundaries, from quantum algorithms and machine
              learning to secure protocols and autonomous hardware.
            </p>
            <p>
              Five themes run through our work: quantum horizons, scalable systems, cyber defence and decentralised
              trust, immersive realities, and inclusive progress.
            </p>
            <Link className="text-link" href="/research">Explore research areas</Link>
          </div>
          <div className="feature-media">
            <Image src={versioned("/images/home/research.jpg")} alt="" fill sizes="(max-width: 960px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section section--rule" aria-labelledby="labs-heading">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <p className="eyebrow">Laboratories</p>
              <h2 id="labs-heading" style={{ margin: 0 }}>Explore Our Seven Laboratories</h2>
            </div>
            <Link className="text-link" href="/labs">All laboratories</Link>
          </div>
          <ul className="lab-grid">
            {labs.map((lab) => (
              <li key={lab.slug} className="lab-card">
                <Link href={`/labs/${lab.slug}`}>
                  <div className="lab-card-media">
                    <Image src={versioned(labImage(lab))} alt="" fill sizes="(max-width: 600px) 100vw, 380px" />
                  </div>
                  <span className="lab-card-num">LAB {lab.number}</span>
                  <h3>{lab.name}</h3>
                  <p className="lab-card-field">{lab.field}</p>
                  <p>{lab.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="people-heading">
        <div className="container">
          <div className="section-head section-head--split">
            <div>
              <p className="eyebrow">People</p>
              <h2 id="people-heading" style={{ margin: 0 }}>Our Faculty Mentors</h2>
            </div>
            <Link className="text-link" href="/people">Meet the team</Link>
          </div>
          <div className="person-grid">
            {faculty.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="involved-heading">
        <div className="container feature">
          <div>
            <p className="eyebrow">Get Involved</p>
            <h2 id="involved-heading">Learn More About Singularity</h2>
            <p>
              Singularity recruits through dedicated recruitment drives. Find out how the process works, or
              follow us for announcements.
            </p>
          </div>
          <ul className="link-list">
            <li><Link href="/join">How to join the lab</Link></li>
            <li><Link href="/research">Research themes</Link></li>
            <li><Link href="/people">Executives and members</Link></li>
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Follow us on Instagram</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">Follow us on LinkedIn</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
