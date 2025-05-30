import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "./ContactForm";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ id }) => {
  const headingRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate right section (ContactRight)
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id={id} className="px-4 sm:px-6 md:px-10 pt-30 pb-30">
      {/* Section Heading */}
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-10 lg:pb-15 text-center"
      >
        CONTATO
      </h3>

      {/* Contact Content */}
      <div className="flex justify-center items-center" ref={rightRef}>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
