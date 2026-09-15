import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <strong>{portfolioContent.person.name}</strong>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <div>
          <span>{portfolioContent.person.location}</span>
          <p>Available worldwide</p>
        </div>
        <div className="site-footer__links">
          <span aria-label="LinkedIn URL pending">LinkedIn pending</span>
          <span aria-label="GitHub URL pending">GitHub pending</span>
          <Link href={`mailto:${portfolioContent.person.email}`}>Email preview</Link>
        </div>
      </div>
    </footer>
  );
}
