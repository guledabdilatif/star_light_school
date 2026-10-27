import { Phone, Sparkles } from "lucide-react";
import { PROGRAMMES, FEES, SCHOOL } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

const fmt = new Intl.NumberFormat("en-KE");

export default function Fees({ onEnrol }) {
  return (
    <section className="section fees" id="fees">
      <div className="container ">
        <SectionHeading
          title="Tuition & Fees"
          sub="Transparent pricing designed to fit your schedule. Choose per-term or monthly options."
        />
        <div className="fees-grid">
          {FEES.map((f, i) => {
            const p = PROGRAMMES.find((x) => x.id === f.id);
            if (!p) return null;
            const Icon = p.icon;
            
            // Optional: Highlight a specific fee card as popular/featured (e.g., index 0 or 1)
            const isFeatured = i === 0;

            return (
              <Reveal 
                key={f.id} 
                delay={i * 70} 
                className={`fee-card ${isFeatured ? "featured" : ""}`}
              >
                {isFeatured && (
                  <span className="fee-badge">
                    Popular
                  </span>
                )}

                <div className="fee-icon-wrap">
                  <Icon size={22} />
                </div>

                <h3>{p.title}</h3>
                <p className="fee-description">
                  {p.subtitle || "Comprehensive module focused on practical mastery and guided learning."}
                </p>

                <div className="fee-pricing">
                  {f.price ? (
                    <div className="fee-amount">
                      <span className="fee-currency">KES</span>
                      {fmt.format(f.price)}
                      <span className="fee-period">/ {f.per}</span>
                    </div>
                  ) : (
                    <div className="fee-amount ask">
                      Custom Pricing
                    </div>
                  )}
                </div>

                {f.price ? (
                  <Button onClick={() => onEnrol(p.title)}>Enrol Now</Button>
                ) : (
                  <Button as="a" variant="outline" href={`tel:${SCHOOL.tel}`}>
                    <Phone size={16} /> Contact Admissions
                  </Button>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}