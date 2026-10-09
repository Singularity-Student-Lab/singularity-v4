"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import { nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <nav aria-label="Utility">
            <ul className="utility-links">
              <li><Link href="/people#faculty">Faculty Mentors</Link></li>
              <li><Link href="/labs">Laboratories</Link></li>
              <li><a href={`mailto:${site.email}`}>Contact</a></li>
              <li><Link className="utility-cta" href="/join">Join the Lab</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="masthead">
        <div className="container masthead-inner">
          <Link href="/" className="wordmark" aria-label={`${site.fullName}, home`}>
            <Mark className="wordmark-mark" />
            <span className="wordmark-text">
              <span className="wordmark-name">Singularity</span>
              <span className="wordmark-sub">Research Lab</span>
            </span>
          </Link>

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav id="primary-nav" aria-label="Primary" className={open ? "primary-nav is-open" : "primary-nav"}>
            <ul>
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
