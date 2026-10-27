import { STEPS } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Admissions() {
  return (
    <section className="section" id="admissions">
      <div className="container">
        <SectionHeading title="Joining us takes three steps" sub="No long forms. Start with a call, a message or a visit." />
        <ol className="steps">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="step">
              <span className="step-no">{i + 1}</span>
              <Icon size={26} className="step-icon" />
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
