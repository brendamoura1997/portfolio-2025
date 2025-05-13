import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../../utils/experienceData";
import { education } from "../../utils/educationData";
import ModalCard from "./ModalCard";
import CareerCard from "../../components/CareerCard";

gsap.registerPlugin(ScrollTrigger);

const AboutBottom = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const experienceHeadingRef = useRef(null);
  const educationHeadingRef = useRef(null);
  const experienceCardsRef = useRef([]);
  const educationCardsRef = useRef([]);
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

    // Animate Experiência (E para D)
    gsap.fromTo(
      experienceHeadingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: experienceHeadingRef.current,
          start: "top 85%",
          //   toggleActions: "restart none none none",
          //   invalidateOnRefresh: true,
        },
      }
    );

    // Animate Formação (D para E)
    gsap.fromTo(
      educationHeadingRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationHeadingRef.current,
          start: "top 85%",
          //   toggleActions: "restart none none none",
          //   invalidateOnRefresh: true,
        },
      }
    );

    // Animate Experiência cards (E para D)
    experienceCardsRef.current
      .filter(Boolean) // remove elementos null/undefined
      .forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              toggleActions: "restart none none none",
              invalidateOnRefresh: true,
            },
          }
        );
      });
    // Animate Formação cards (D to E)
    educationCardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            toggleActions: "restart none none none",
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-10 pt-20">
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-5 md:pb-15 text-center"
      >
        CARREIRA
      </h3>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3
            ref={experienceHeadingRef}
            className="text-2xl font-bold text-center sm:text-left text-[var(--neon-cyan)] T2 pb-5 md:pb-5 neon-text-glow-cyan"
          >
            EXPERIÊNCIA
          </h3>
          <div className="flex flex-col gap-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceCardsRef.current[index] = el)}
              >
                <CareerCard
                  {...exp}
                  onClick={() => setSelectedExperience(exp)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            ref={educationHeadingRef}
            className="text-2xl font-bold text-center sm:text-left text-[var(--neon-cyan)] T2 pb-5 md:pb-5 neon-text-glow-cyan"
          >
            FORMAÇÃO
          </h3>
          <div className="flex flex-col gap-6 ">
            {education.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (educationCardsRef.current[index] = el)}
              >
                <CareerCard
                  {...edu}
                  onClick={() => setSelectedEducation(edu)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedExperience && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90%] md:max-w-[70%]"
          >
            <ModalCard
              {...selectedExperience}
              onClose={() => setSelectedExperience(null)}
            />
          </div>
        </div>
      )}

      {selectedEducation && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50"
          onClick={() => setSelectedEducation(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90%] md:max-w-[70%]"
          >
            <ModalCard
              {...selectedEducation}
              onClose={() => setSelectedEducation(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutBottom;
