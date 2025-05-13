import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCard from "../../components/ImageCard";
import profileImage from "../../assets/images/profile2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "../../components/ButtonNeon";

gsap.registerPlugin(ScrollTrigger);

const AboutTop = () => {
  const [showMore, setShowMore] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const sectionRef = useRef(null);
  const [clipActive, setClipActive] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

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
    setIsMounted(true);
    const timeout = setTimeout(() => {
      setClipActive(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

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
      <motion.div
        animate={{
          maxWidth: showMore ? "1200px" : "700px",
          borderWidth: showMore ? "1px" : "0px",
          borderColor: showMore ? "var(--neon-cyan)" : "#000000",
          height: isTabletPortrait && showMore ? "600px" : "fit-content",
        }}
        style={{
          boxShadow: "0 0 20px 5px #013880",
          padding: "25px 35px",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`md:p-4 h-auto md:h-80 bg-[#000]/20 backdrop-blur-sm transition-all duration-500 relative rounded-lg flex
          flex-col md:flex-row mx-auto ${showMore ? "tablet-expand" : ""}
            ${clipActive ? "clip-diagonal-top-right" : ""}`}
      >
        {isMounted ? (
          <>
            <div className="flex justify-center items-center py-1 md:py-0">
              <ImageCard imageSrc={profileImage} title="BRENDA MOURA" />
            </div>

            <div className="flex md:ml-5 w-full sm:pb-20 md:pb-0 ">
              <div
                className="flex-1 flex flex-col text-sm md:text-md BODY1 text-justify leading-relaxed gap-4
          text-[var(--light-gray)] pb-10 justify-center"
              >
                <p>
                  Bacharel em Ciência da Computação com foco em Desenvolvimento
                  Web Full Stack e Design de Interfaces.
                </p>
                <p>
                  Minha experiência abrange tecnologias de frontend e backend,
                  além de princípios de UI/UX, permitindo-me criar aplicações
                  web completas com foco em desempenho e usabilidade.
                </p>
                <p>
                  Atuei como desenvolvedora freelancer, desenvolvendo interfaces
                  responsivas, APIs escaláveis e sistemas integrados.
                </p>
                <AnimatePresence>
                  {showMore && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, width: "100%" }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        width: "100%",
                        height: "auto",
                      }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="w-full md:w-auto flex flex-col gap-4"
                    >
                      <p>
                        Tenho uma base sólida em engenharia de software, com
                        prática em frameworks modernos como React, Node.js e
                        Next.js. Minhas habilidades incluem arquitetura de
                        sistemas, integração com bancos de dados e
                        desenvolvimento de interfaces intuitivas.
                      </p>
                      <p>
                        A combinação de competências técnicas e sensibilidade
                        para design me permite entregar soluções web que aliam
                        funcionalidade, estética e ótima experiência do usuário.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="sm:absolute sm:bottom-4 sm:right-6">
              <NeonButton
                width="w-full text-sm md:text-md px-6 py-2 sm:w-[140px] sm:h-[45px] relative"
                paddingY="py-3"
                text={showMore ? "Minimizar" : "Veja mais"}
                onClick={() => setShowMore(!showMore)}
              />
            </div>
          </>
        ) : null}
      </motion.div>
    </section>
  );
};

export default AboutTop;
