import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "../../components/ImageCard";
import profileImage from "../../assets/images/profile.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const generateRandomCharacters = (count) => {
  const characters = "@#/$%^:/&*";
  return Array.from({ length: count }, () => ({
    id: Math.random().toString(36).substr(2, 9),
    char: characters[Math.floor(Math.random() * characters.length)],
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    delay: Math.random() * 1,
  }));
};

const AboutTop = () => {
  const [showMore, setShowMore] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const [characters, setCharacters] = useState(generateRandomCharacters(20));
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkTabletPortrait = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width >= 769 && width <= 1024 && height > width) {
        setIsTabletPortrait(true);
      } else {
        setIsTabletPortrait(false);
      }
    };

    checkTabletPortrait();
    window.addEventListener("resize", checkTabletPortrait);
    return () => window.removeEventListener("resize", checkTabletPortrait);
  }, []);

  useEffect(() => {
    setCharacters(showMore ? [] : generateRandomCharacters(20));
  }, [showMore]);

  // GSAP Scroll Animation
  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative">
      <AnimatePresence>
        {characters.map(({ id, char, x, y, delay }) => (
          <motion.span
            key={id}
            initial={{ opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay }}
            className="absolute text-[#00ffcc] text-2xl font-bold pointer-events-none"
            style={{ left: x, top: y }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.div
        animate={{
          maxWidth: showMore ? "1200px" : "900px",
          borderWidth: showMore ? "6px" : "0px",
          borderColor: showMore ? "#00ffcc" : "#000000",
          height: isTabletPortrait && showMore ? "600px" : "fit-content",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`px-5 p-0 md:p-4 h-auto md:h-80 bg-[#161616] transition-all duration-500 clip-diagonal-top-right relative flex flex-col md:flex-row mx-auto ${
          showMore ? "tablet-expand" : ""
        }`}
      >
        <div className="flex justify-center items-center py-6 md:py-0">
          <ImageCard imageSrc={profileImage} title="Brenda Moura" />
        </div>

        <div className="flex items-center md:ml-5 w-full pb-20 md:pb-0">
          <div className="flex-1 flex flex-col text-sm md:text-lg text-justify leading-relaxed gap-4">
            <p>
              Bacharel em Ciência da Computação com foco em Desenvolvimento Web
              Full Stack e Design de Interfaces. Minha experiência abrange
              tecnologias de frontend e backend, além de princípios de UI/UX,
              permitindo-me criar aplicações web completas com foco em
              desempenho e usabilidade. Atuei como desenvolvedor freelancer para
              empresas de médio porte, desenvolvendo interfaces responsivas,
              APIs escaláveis e sistemas integrados.
            </p>
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: -20, width: "100%" }}
                  animate={{ opacity: 1, y: 0, width: "100%", height: "auto" }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-auto"
                >
                  <p>
                    Tenho uma base sólida em engenharia de software, com prática
                    em frameworks modernos como React, Node.js e Next.js. Minhas
                    habilidades incluem arquitetura de sistemas, integração com
                    bancos de dados e desenvolvimento de interfaces intuitivas.
                    A combinação de competências técnicas e sensibilidade para
                    design me permite entregar soluções web que aliam
                    funcionalidade, estética e ótima experiência do usuário.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 right-4"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 w-[140px] h-[45px] text-xs relative bg-[#0b090a] border-2 border-[#00ffcc] text-[#00ffcc] clip-diagonal overflow-hidden transition-all duration-300"
          >
            <span>{showMore ? "Minimizar" : "Veja mais"}</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutTop;
