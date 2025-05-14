import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import ImageCard from "../../components/ImageCard";
import profileImage from "../../assets/images/profile2.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NeonButton from "../../components/ButtonNeon";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
  const [showMore, setShowMore] = useState(false);
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);
  const [clipActive, setClipActive] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const headingRef = useRef(null);
  const divRef = useRef(null);

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
    const element = divRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
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
      className="relative text-white pt-20 sm:pt-30 pb-10 px-10 overflow-hidden"
    >
      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-10 md:pb-15 text-center"
      >
        SOBRE MIM
      </h3>
      <div ref={divRef} className="w-full relative">
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
            ${clipActive ? "clip-diagonal-top-right" : ""}
            border border-[var(--neon-cyan)]/70
            animate-[pulse-glow-about_3.0s_ease-in-out_infinite]`}
        >
          {isMounted ? (
            <>
              <div className="flex justify-center items-center py-1 md:py-0">
                <ImageCard imageSrc={profileImage} title="BRENDA MOURA" />
              </div>

              <div className="flex md:ml-5 w-full sm:pb-20 md:pb-0 ">
                <div
                  className="flex-1 flex flex-col text-sm md:text-md BODY1 text-justify leading-relaxed gap-4
          text-[var(--text-light-gray)]  pb-10 justify-center"
                >
                  <p>
                    Bacharel em Ciência da Computação com foco em
                    Desenvolvimento Web Full Stack e Design de Interfaces.
                  </p>
                  <p>
                    Minha experiência abrange tecnologias de frontend e backend,
                    além de princípios de UI/UX, permitindo-me criar aplicações
                    web completas com foco em desempenho e usabilidade.
                  </p>
                  <p>
                    Atuei como desenvolvedora freelancer, desenvolvendo
                    interfaces responsivas, APIs escaláveis e sistemas
                    integrados.
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
                          funcionalidade, estética e ótima experiência do
                          usuário.
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
      </div>
    </section>
  );
};

export default About;
