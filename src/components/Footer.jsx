import { SCHOOL, NAV } from "../data/content";
import { scrollToId } from "../utils/scroll";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <img src="/logo-dark.png" alt="" height="64" />
        <nav aria-label="Footer">
          {NAV.map((n) => <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}>{n.label}</a>)}
        </nav>
        <p>© {new Date().getFullYear()} {SCHOOL.name}</p>
      </div>
    </footer>
  );
}
