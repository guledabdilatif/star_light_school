import { Phone } from "lucide-react";
import { SCHOOL, PROGRAMMES } from "../data/content";
import { scrollToId } from "../utils/scroll";
import Button from "./Button";

export default function Hero({ onPick }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <h1 aria-label="From lower primary to A-Level, under one roof.">
            {["From lower primary", "to A-Level,", "under one roof."].map((line, i) => (
              <span className="line" key={line} aria-hidden="true"><span style={{ "--i": i }}>{line}</span></span>
            ))}
          </h1>
          <p className="lead rise" style={{ "--i": 3 }}>
            Star Light Schools teaches primary grades, O-Level, A-Level, languages and IELTS. Come and visit us at Daraja Tower.
          </p>
          <div className="actions rise" style={{ "--i": 4 }}>
            <Button as="a" href="#enrol" onClick={(e) => { e.preventDefault(); scrollToId("enrol"); }}>Enrol now</Button>
            <Button as="a" variant="outline" href={`tel:${SCHOOL.tel}`}><Phone size={18} /> {SCHOOL.phone}</Button>
          </div>
          <div className="finder rise" style={{ "--i": 5 }}>
            <p id="finder-label">What is your child studying?</p>
            <div className="chips" role="group" aria-labelledby="finder-label">
              {PROGRAMMES.map((p) => (
                <button key={p.id} className="chip" onClick={() => onPick(p.id)}>{p.chip}</button>
              ))}
            </div>
          </div>
        </div>
        <img className="hero-logo" src="/logo-dark.png" alt="Star Light Schools crest" />
      </div>
    </section>
  );
}
