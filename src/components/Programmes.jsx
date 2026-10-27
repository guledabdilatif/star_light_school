import { Check } from "lucide-react";
import { GROUPS, PROGRAMMES } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

export default function Programmes({ group, setGroup, highlight, onEnrol }) {
  const items = PROGRAMMES.filter((p) => p.group === group);

  const onKey = (e) => {
    const i = GROUPS.findIndex((g) => g.id === group);
    if (e.key === "ArrowRight") setGroup(GROUPS[(i + 1) % GROUPS.length].id);
    if (e.key === "ArrowLeft") setGroup(GROUPS[(i - 1 + GROUPS.length) % GROUPS.length].id);
  };

  return (
    <section className="section" id="programmes">
      <div className="container">
        <SectionHeading title="What we teach" sub="Choose a stage to see what each programme covers." />
        <Reveal className="tabs" role="tablist" aria-label="Programme stages" onKeyDown={onKey}>
          {GROUPS.map((g) => (
            <button key={g.id} role="tab" id={`tab-${g.id}`} aria-selected={group === g.id} aria-controls="panel" tabIndex={group === g.id ? 0 : -1}
              className={`tab ${group === g.id ? "on" : ""}`} onClick={() => setGroup(g.id)}>
              {g.label}
            </button>
          ))}
        </Reveal>
        <div id="panel" role="tabpanel" aria-labelledby={`tab-${group}`} className="panel" key={group}>
          {items.map(({ id, icon: Icon, title, detail, points }) => (
            <article key={id} className={`prog ${highlight === id ? "flash" : ""}`}>
              <span className="icon"><Icon size={24} /></span>
              <div>
                <h3>{title}</h3>
                <p className="muted">{detail}</p>
                <ul className="points">
                  {points.map((pt) => <li key={pt}><Check size={16} /> {pt}</li>)}
                </ul>
              </div>
              <Button variant="navy" className="prog-btn" onClick={() => onEnrol(title)}>Enrol</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
