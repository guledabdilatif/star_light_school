import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SCHOOL } from "../data/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-inner">
        <SectionHeading title="Visit or call us" sub="We are on the ground floor, so you can walk straight in." />
        <Reveal delay={120} className="contact-card">
          <p><MapPin size={22} /> {SCHOOL.address}</p>
          <p><Phone size={22} color="white"/> <a href={`tel:${SCHOOL.tel}`}>{SCHOOL.phone2}</a> || <a href={`tel:${SCHOOL.tel}`}>{SCHOOL.phone}</a></p>
          <div className="actions">
            <Button as="a" href={`tel:${SCHOOL.tel}`}><Phone size={18} color="black"/> Call now</Button>
            <Button as="a" variant="outline" href={`https://wa.me/${SCHOOL.whatsapp}`} target="_blank" rel="noopener"><MessageCircle size={18} /> WhatsApp</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
