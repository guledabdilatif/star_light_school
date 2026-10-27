import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section band" id="faq">
      <div className="container faq-wrap">
        <SectionHeading title="Questions parents ask" />
        <Reveal className="faq">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className={`faq-item ${on ? "on" : ""}`}>
                <h3>
                  <button id={`faq-b-${i}`} aria-expanded={on} aria-controls={`faq-p-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                    {f.q}
                    <ChevronDown size={20} />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className="faq-body">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
