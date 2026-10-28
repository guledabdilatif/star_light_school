import { useState, useCallback } from "react";
import { PROGRAMMES } from "./data/content";
import { scrollToId } from "./utils/scroll";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programmes from "./components/Programmes";
import WhyUs from "./components/WhyUs";
import Admissions from "./components/Admissions";
import Faq from "./components/Faq";
import EnrolForm from "./components/EnrolForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Fees from "./components/Fees";
import About from "./components/About";

export default function App() {
  const [group, setGroup] = useState("primary");
  const [highlight, setHighlight] = useState("");
  const [level, setLevel] = useState(PROGRAMMES[0].title);

  // Hero chip: open the right tab, scroll to it, flash the programme.
  const pick = useCallback((id) => {
    const p = PROGRAMMES.find((x) => x.id === id);
    setGroup(p.group);
    setHighlight("");
    requestAnimationFrame(() => {
      setHighlight(id);
      scrollToId("programmes");
    });
    setTimeout(() => setHighlight(""), 2200);
  }, []);

  // Programme "Enrol" button: preselect it in the form.
  const enrolFor = useCallback((title) => {
    setLevel(title);
    scrollToId("enrol");
  }, []);

  return (
    <>
      <a href="#programmes" className="skip">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main>
        <Hero onPick={pick} />
        <About />
        <Programmes
          group={group}
          setGroup={setGroup}
          highlight={highlight}
          onEnrol={enrolFor}
        />
        <Fees onEnrol={enrolFor} />
        <WhyUs />
        <Admissions />
        <Faq />
        <EnrolForm level={level} setLevel={setLevel} />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
