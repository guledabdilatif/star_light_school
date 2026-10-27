import { WHY } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section className="section band" id="why-us">
      <div className="container">
        <SectionHeading title="Why families choose Star Light" sub="A simple promise: clear programmes, close to home, easy to reach." />
        <div className="why-grid">
          {WHY.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} className="why">
              <span className="icon icon-navy"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
