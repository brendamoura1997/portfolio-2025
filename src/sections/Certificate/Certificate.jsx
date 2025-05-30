import React, { useState, useRef, useEffect } from "react";
import CertificateCard from "../../components/CertificateCard";
import CertificateModal from "./CertificateModal";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "../../utils/certificateData";
import NeonButton from "../../components/ButtonNeon";

gsap.registerPlugin(ScrollTrigger);

const Certificate = ({ id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      }
    });
  }, [showAll]);

  const handleShowAllClick = () => {
    setShowAll((prev) => !prev);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const visibleCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="text-white pt-15 md:pt-30 pb-12 px-4 sm:px-6 md:px-10 flex flex-col
      justify-center items-center"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"
      ></div>

      <h3
        ref={headingRef}
        className="text-3xl md:text-4xl T1 font-bold text-[var(--light-cyan-title)] neon-text-glow-cyan pb-5 md:pb-15 text-center"
      >
        CERTIFICADOS
      </h3>

      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-6 md:mt-10 
          relative justify-center ${showAll ? "mb-0" : "mb-15"}`}
      >
        <AnimatePresence>
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.title + index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="certificate-card"
            >
              <CertificateCard
                {...cert}
                onClick={() => setSelectedCertificate(cert)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative flex justify-center">
        <motion.div
          className="absolute  bottom-0 flex items-center justify-center w-8 h-8
          sm:w-10 sm:h-10 border-2 text-lg sm:text-xl cursor-pointer"
          initial={{ rotate: 0, y: 0 }}
          animate={{ rotate: showAll ? 180 : 0, y: showAll ? 50 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <NeonButton
            width="text-lg md:text-lg px-6 sm:w-[140px] sm:h-[45px] h-5 relative border border-[var(--neon-cyan)]/70
            animate-[pulse-glow-button_1.5s_ease-in-out_infinite]"
            paddingY="pt-2 pb-10"
            text="↓"
            onClick={() => handleShowAllClick()}
          />
        </motion.div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] p-2 sm:p-4 bg-[#050d1a]/80 backdrop-blur-lg"
          onClick={() => setSelectedCertificate(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="relative">
            <CertificateModal
              {...selectedCertificate}
              onClose={() => setSelectedCertificate(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
