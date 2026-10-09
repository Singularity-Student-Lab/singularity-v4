import Link from "next/link";

type Crumb = { href: string; label: string };

export default function PageHeader({
  title,
  intro,
  crumbs = [],
  eyebrow,
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  eyebrow?: string;
}) {
  return (
    <div className="page-header">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumbs">
            <li><Link href="/">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.href}><Link href={c.href}>{c.label}</Link></li>
            ))}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-intro">{intro}</p>}
      </div>
    </div>
  );
}
