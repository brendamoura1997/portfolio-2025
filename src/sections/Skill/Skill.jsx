import React, { useState, useRef, useLayoutEffect } from "react";
import ProgressCircle from "../../components/ProgressCircle";
import { skills } from "../../utils/skillData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "../../components/ButtonNeon";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";

gsap.registerPlugin(ScrollTrigger);

const Skill = ({ id }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Desenvolvimento Web");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const skillGridRef = useRef(null);
  const headingRef = useRef(null);
  const { ref: sectionInViewRef, inView: sectionIsVisible } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const screenWidth = useScreenSize();

  let originalMaxSkills;

  if (screenWidth < 768) {
    originalMaxSkills = 4;
  } else if (screenWidth < 1024) {
    originalMaxSkills = 6;
  } else {
    originalMaxSkills = 8;
  }

  const maxVisibleSkills = showAllSkills
    ? skills[activeCategory].length
    : originalMaxSkills;

  useLayoutEffect(() => {
    if (skillGridRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(skillGridRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.3,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillGridRef.current,
            start: "top 100%",
            toggleActions: "restart none none none",
          },
        });
      }, skillGridRef);

      return () => ctx.revert(); // limpa a animação anterior
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id={id}
      ref={(el) => {
        sectionRef.current = el;
        sectionInViewRef(el);
      }}
      className="relative text-white md:pt-30 pb-50 md:pb-20 px-10"
    >
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-5 md:pb-15 text-center"
      >
        HABILIDADES
      </h3>

      {/* Abas de Categoria */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-0 md:mt-5 pt-5 pb-10 overflow-hidden whitespace-nowrap px-4">
        {Object.keys(skills).map((category) => (
          <NeonButton
            key={category}
            width={`w-full text-sm md:text-md px-6 py-2 sm:w-auto sm:h-[45px] relative ${
              activeCategory === category
                ? "bg-[var(--neon-cyan)] text-black hover:text-black"
                : ""
            }`}
            paddingY="py-3"
            text={category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>

      {/* Skills Grid */}
      <div
        ref={skillGridRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-16 md:gap-12 lg:gap-6
  justify-center justify-items-center items-center px-4 mx-auto lg:max-w-[800px]"
      >
        {(showAllSkills
          ? skills[activeCategory]
          : skills[activeCategory].slice(0, maxVisibleSkills)
        ).map((skill, index) => (
          <div
            key={skill.name}
            className="relative flex justify-center items-center mx-auto p-4 border skill-border transition-all duration-500 
    w-32 h-32 sm:w-28 sm:h-28 md:w-42 md:h-42 tablet:w-36 tablet:h-36"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Efeito Holografico no ícone */}
            <div className="absolute w-20 h-20 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className={`absolute w-20 h-20 transition-all duration-700 ${
                  hoveredSkill === skill.name
                    ? "holo-glitch opacity-100"
                    : "opacity-0"
                }`}
              />
              <div
                className={`absolute w-20 h-20 rounded-full border border-[var(--neon-cyan)] transition-all duration-700 ${
                  hoveredSkill === skill.name
                    ? "holo-ring opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>

            {/* Círculo de progresso (escondido quando hover) */}
            <div
              className={`transition-opacity duration-700 ${
                hoveredSkill === skill.name ? "opacity-0" : "opacity-100"
              }`}
            >
              <ProgressCircle
                label={skill.name}
                percent={skill.level}
                color={skill.color}
                skillName={skill.skillName}
                colorTitle={skill.colorTitle}
                isVisible={sectionIsVisible}
              />
            </div>
          </div>
        ))}
      </div>

      {skills[activeCategory].length > originalMaxSkills && (
        <div className="relative flex justify-center mt-10">
          <motion.div
            className="flex items-center justify-center w-10 h-10 border-2 cursor-pointer"
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: showAllSkills ? 180 : 0,
              y: showAllSkills ? 10 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <NeonButton
              width="text-lg md:text-lg px-6 sm:w-[140px] sm:h-[45px] h-5 relative border border-[var(--neon-cyan)]/70 animate-[pulse-glow-button_1.5s_ease-in-out_infinite]"
              paddingY="pt-2 pb-10"
              text="↓"
              onClick={() => {
                if (showAllSkills && sectionRef.current) {
                  sectionRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setShowAllSkills(!showAllSkills);
              }}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Skill;
