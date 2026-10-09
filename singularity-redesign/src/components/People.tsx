import Image from "next/image";
import type { Person } from "@/data/site";

const initials = (name: string) =>
  name
    .replace(/^(Prof\.|Dr\.)\s*/, "")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

function ProfileLinks({ person }: { person: Person }) {
  const links = [
    person.website && { href: person.website, label: "Website" },
    person.github && { href: person.github, label: "GitHub" },
    person.linkedin && { href: person.linkedin, label: "LinkedIn" },
  ].filter(Boolean) as { href: string; label: string }[];
  if (!links.length) return null;
  return (
    <ul className="profile-links">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${person.name} on ${l.label}`}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="person-card">
      <div className="person-photo">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill sizes="(max-width: 600px) 50vw, 220px" />
        ) : (
          <span className="person-initials" aria-hidden="true">{initials(person.name)}</span>
        )}
      </div>
      <h3 className="person-name">{person.name}</h3>
      {person.role && <p className="person-role">{person.role}</p>}
      <ProfileLinks person={person} />
    </article>
  );
}

export function MemberList({ members }: { members: Person[] }) {
  return (
    <ul className="member-list">
      {members.map((m) => (
        <li key={m.name}>
          <span className="member-name">{m.name}</span>
          <ProfileLinks person={m} />
        </li>
      ))}
    </ul>
  );
}
