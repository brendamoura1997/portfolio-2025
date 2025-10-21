import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../../utils/experienceData";
import { education } from "../../utils/educationData";
import CarrerModal from "./CarrerModal";
import CareerGrid from "../../components/CareerGrid";

gsap.registerPlugin(ScrollTrigger);

const Career = ({ id }) => {
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
    <section
      className="px-4 sm:px-6 md:px-10 pt-30 flex flex-col justify-center items-center"
      id={id}
    >
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-5 md:pb-15 text-center"
      >
        CARREIRA
      </h3>

      <div className="pt-5 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-15 sm:gap-40 max-w-max">
        <CareerGrid
          title="EXPERIÊNCIA"
          data={experience}
          setSelected={setSelectedExperience}
          cardsRef={experienceCardsRef}
          headingRef={experienceHeadingRef}
        />
        <CareerGrid
          title="FORMAÇÃO"
          data={education}
          setSelected={setSelectedEducation}
          cardsRef={educationCardsRef}
          headingRef={educationHeadingRef}
        />
      </div>

      {/* Modals */}
      {selectedExperience && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#080e17]/70 backdrop-blur-lg z-50"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[90%] md:max-w-[70%]"
          >
            <CarrerModal
              {...selectedExperience}
              onClose={() => setSelectedExperience(null)}
            />
          </div>
        </div>
      )}

      {selectedEducation && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#080e17]/70 backdrop-blur-lg z-50"
          onClick={() => setSelectedEducation(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full md:max-w-[70%]"
          >
            <CarrerModal
              {...selectedEducation}
              onClose={() => setSelectedEducation(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Career;
