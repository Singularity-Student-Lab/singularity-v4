import Link from "next/link";
import Mark from "./Mark";
import { labs, nav, site } from "@/data/site";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="wordmark wordmark--inverse wordmark--large" aria-label={`${site.fullName}, home`}>
            <Mark className="wordmark-mark" />
            <span className="wordmark-text">
              <span className="wordmark-name">Singularity</span>
              <span className="wordmark-sub">Research Lab</span>
            </span>
          </Link>
          <p className="footer-tagline">Seven laboratories, one research community</p>
        </div>
        <div className="footer-actions">
          <a className="btn btn--ghost" href={`mailto:${site.email}`}>Contact Us</a>
          <Link className="btn" href="/join">Join the Lab</Link>
        </div>
      </div>
      <div className="container">
        <hr className="footer-rule" />
      </div>

      <div className="container footer-grid">
        <section aria-labelledby="f-visit">
          <h2 className="footer-heading" id="f-visit">Visit</h2>
          <address className="footer-address">
            {site.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </section>

        <section aria-labelledby="f-contact">
          <h2 className="footer-heading" id="f-contact">Contact</h2>
          <ul className="footer-links">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
          <ul className="footer-social" aria-label="Social media">
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Singularity on Instagram">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Singularity on LinkedIn">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="f-labs">
          <h2 className="footer-heading" id="f-labs">Laboratories</h2>
          <ul className="footer-links">
            {labs.map((lab) => (
              <li key={lab.slug}>
                <Link href={`/labs/${lab.slug}`}>{lab.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="f-explore">
          <h2 className="footer-heading" id="f-explore">Explore</h2>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="footer-legal">
        <div className="container footer-legal-inner">
          <span>
            © {new Date().getFullYear()} {site.fullName}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
