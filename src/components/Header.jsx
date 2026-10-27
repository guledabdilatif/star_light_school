import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToId } from "../utils/scroll";
import Button from "./Button";

const IDS = NAV.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const scrolled = useScrolled();

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); scrollToId(id); };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-row">
        <a href="#top" className="brand" onClick={(e) => { e.preventDefault(); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} aria-label="Star Light Schools, back to top">
          <img src="/logo-light.png" alt="" />
        </a>
        <nav id="main-nav" className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={go(n.id)} className={active === n.id ? "active" : ""} aria-current={active === n.id ? "true" : undefined}>
              {n.label}
            </a>
          ))}
          <Button as="a" href="#enrol" className="nav-cta" onClick={go("enrol")}>Enrol now</Button>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
