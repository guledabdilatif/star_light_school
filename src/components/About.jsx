import { ArrowRight } from "lucide-react";
import { ABOUT } from "../data/content";
import { scrollToId } from "../utils/scroll";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section band about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-head">
            <p className="eyebrow">{ABOUT.eyebrow}</p>
            <h2>Every learner has a light. We help it <span className="hl">shine</span>.</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="about-lead">{ABOUT.lead}</p>
            <p className="about-body">{ABOUT.body}</p>
            <button className="text-link" onClick={() => scrollToId("contact")}>
              Visit us at Daraja Tower <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>

        <ul className="about-values">
          {ABOUT.values.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="value">
              <Icon size={24} />
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}