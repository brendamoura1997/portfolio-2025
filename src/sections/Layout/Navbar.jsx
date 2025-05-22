import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    // Fechar menu ao clicar fora
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Intro", target: "intro" },
    { label: "Sobre Mim", target: "about" },
    { label: "Carreira", target: "career" },
    // { label: "Projetos", target: "projects" },
    { label: "Habilidades", target: "skills" },
    { label: "Certificados", target: "certificates" },
    { label: "Contato", target: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isMounted ? 1 : 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-[#010a16]/50 backdrop-blur-3xl flex justify-end lg:justify-center px-4 
      shadow-[0_10px_15px_rgba(1,10,22,0.7)]"
    >
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:flex items-center justify-center w-full clip-diagonal 
         transition-all duration-500 BODY1 text-sm"
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={item.target}>
            {index > 0 && <p className="text-gray-300">|</p>}{" "}
            <motion.button
              onClick={() => scrollToSection(item.target)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMounted ? 1 : 0, x: 0 }}
              transition={{
                duration: 0.6,
                delay: isMounted ? index * 0.2 : 0,
                ease: "easeOut",
              }}
              className="w-40 py-5 whitespace-nowrap rounded-sm cursor-pointer relative active:scale-90 transition-transform 
              duration-150 ease-in-out text-[var(--light-gray)] hover:neon-text-glow-cyan hover:text-white after:absolute 
              after:left-0 after:bottom-0 after:h-[2px] after:w-full after:opacity-0 hover:after:opacity-100 
              after:transition-opacity after:duration-300 after:bg-gradient-to-r after:from-transparent after:via-[var(--neon-cyan)] 
              after:to-transparent"
            >
              {item.label}
            </motion.button>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile & Tablet Navbar */}
      <div className="lg:hidden flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-[#111] cursor-pointer border border-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] 
          rounded-md active:scale-90 transition-transform duration-150 ease-in-out"
        >
          {isOpen ? (
            <X size={24} color="var(--light-cyan)" />
          ) : (
            <Menu size={24} color="var(--neon-cyan)" />
          )}
        </button>
      </div>

      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex flex-col absolute right-4 top-12 w-44 bg-[#010a16]/85 backdrop-blur-xl border border-[var(--light-cyan)] 
          py-3 gap-1 text-center text-sm overflow-hidden origin-top rounded-xl T2
          animate-[pulse-glow-button_1.5s_ease-in-out_infinite] transition-colors duration-100`}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.target}
            onClick={() => scrollToSection(item.target)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
            transition={{ duration: 0.4, delay: isOpen ? index * 0.1 : 0 }}
            className="relative block cursor-pointer w-full py-3 whitespace-nowrap rounded-md
             border-1 border-transparent hover:shadow-[0_0_10px_3px_#7cffe5] hover:text-[#e4ffff] hover:neon-text-glow-cyan
             active:scale-90 transition-transform duration-150 ease-in-out"
          >
            {item.label}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent" />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
