import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 100%",
        },
      }
    );
  }, []);

  return (
    <section
      id={id}
      className="relative border-amber-300 text-white pt-15 md:pt-25 pb-5 md:pb-20 px-10 overflow-hidden"
    >
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl font-bold text-[#72fc3c] pb-5 md:pb-20 ml-[-25px] md:ml-0"
      >
        SOBRE MIM
      </h3>
      <AboutTop />
      <AboutBottom />
    </section>
  );
};

export default About;
