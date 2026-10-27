import { ArrowUp, MessageCircle } from "lucide-react";
import { SCHOOL } from "../data/content";
import { useScrolled } from "../hooks/useScrolled";

export default function FloatingActions() {
  const show = useScrolled(500);
  return (
    <div className={`fab-wrap ${show ? "show" : ""}`}>
      <button className="fab fab-up" aria-label="Back to top" tabIndex={show ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={20} /></button>
      <a className="fab fab-wa" href={`https://wa.me/${SCHOOL.whatsapp}`} target="_blank" rel="noopener" tabIndex={show ? 0 : -1}><MessageCircle size={20} /> Chat with us</a>
    </div>
  );
}
