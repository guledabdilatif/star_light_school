import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { SCHOOL, PROGRAMMES } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

const PHONE_RE = /^(?:\+?254|0)[17]\d{8}$/;
const validate = (v) => ({
  name: v.name.trim().length < 2 ? "Enter the parent or guardian's name." : "",
  phone: PHONE_RE.test(v.phone.replace(/\s/g, "")) ? "" : "Enter a valid Kenyan phone number, like 0723 691 610.",
});

export default function EnrolForm({ level, setLevel }) {
  const [values, setValues] = useState({ name: "", phone: "" });
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const errors = validate(values);
  const link = () => `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(
    `Hello Star Light Schools, I would like to enrol. Name: ${values.name.trim()}. Phone: ${values.phone.trim()}. Programme: ${level}.`)}`;

  const change = (k) => (e) => setValues({ ...values, [k]: e.target.value });
  const blur = (k) => () => setTouched({ ...touched, [k]: true });

  // Backend not wired yet: hand the enquiry to WhatsApp.
  const submit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (errors.name || errors.phone) return;
    window.open(link(), "_blank", "noopener");
    setSent(true);
  };

  const field = (k, label, props) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}</label>
      <input id={`f-${k}`} value={values[k]} onChange={change(k)} onBlur={blur(k)} aria-invalid={touched[k] && !!errors[k]} aria-describedby={`e-${k}`} {...props} />
      <p id={`e-${k}`} className="error" role="alert">{touched[k] ? errors[k] : ""}</p>
    </div>
  );

  return (
    <section className="section" id="enrol">
      <div className="container enrol-grid">
        <SectionHeading title="Enrol your child" sub="Send your details and we will reply about places, fees and start dates." />
        <Reveal delay={120}>
          {sent ? (
            <div className="success" role="status">
              <span className="success-icon"><Check size={28} /></span>
              <h3>Thank you, {values.name.trim().split(" ")[0]}</h3>
              <p className="muted">WhatsApp should have opened with your message. If it did not, use the button below.</p>
              <Button as="a" variant="navy" href={link()} target="_blank" rel="noopener"><MessageCircle size={18} /> Open WhatsApp</Button>
              <button className="link-btn" onClick={() => { setSent(false); setTouched({}); setValues({ name: "", phone: "" }); }}>Enrol another child</button>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              {field("name", "Parent or guardian name", { autoComplete: "name" })}
              {field("phone", "Phone number", { type: "tel", autoComplete: "tel", inputMode: "tel" })}
              <div className="field">
                <label htmlFor="f-level">Programme</label>
                <select id="f-level" value={level} onChange={(e) => setLevel(e.target.value)}>
                  {PROGRAMMES.map((p) => <option key={p.id}>{p.title}</option>)}
                </select>
              </div>
              <Button variant="navy" type="submit"><MessageCircle size={18} /> Send on WhatsApp</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
