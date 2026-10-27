import Reveal from "./Reveal";

export default function SectionHeading({ title, sub }) {
  return (
    <Reveal className="section-heading">
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}
