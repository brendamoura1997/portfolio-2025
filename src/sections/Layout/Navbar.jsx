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
    { label: "Projetos", target: "projects" },
    { label: "Habilidades", target: "skills" },
    { label: "Certificados", target: "certificates" },
    { label: "Contato", target: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isMounted ? 1 : 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-[#010a16]/50 backdrop-blur-3xl flex justify-center px-4 shadow-[0_10px_15px_rgba(1,10,22,0.7)]"
    >
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:flex items-center justify-center w-full clip-diagonal 
         transition-all duration-500 arcade-font text-sm"
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={item.target}>
            {index > 0 && <p>|</p>}{" "}
            {/* Mostra o separador apenas se não for o primeiro item */}
            <motion.button
              onClick={() => scrollToSection(item.target)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isMounted ? 1 : 0, x: 0 }}
              transition={{
                duration: 0.6,
                delay: isMounted ? index * 0.2 : 0,
                ease: "easeOut",
              }}
              className="w-40 py-5 whitespace-nowrap rounded-sm cursor-pointer transition duration-300 
           border-b-1 border-transparent hover:border-b-[#00ffff] hover:text-[#e4ffff] hover:neon-text-glow-cyan"
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
          className="p-2 bg-[#111] border border-[#00ffcc] hover:border-[#c3ff49] transition-all duration-300 rounded-md"
        >
          {isOpen ? (
            <X size={24} color="#00ffcc" />
          ) : (
            <Menu size={24} color="#00ffcc" />
          )}
        </button>
      </div>

      <motion.div
        ref={menuRef}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute right-4 top-12 w-44 bg-[#111] border border-[#00ffcc] p-3 space-y-2 text-center arcade-font text-sm overflow-hidden origin-top transition-all`}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.target}
            onClick={() => scrollToSection(item.target)}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 30 }}
            transition={{ duration: 0.4, delay: isOpen ? index * 0.1 : 0 }}
            className="block w-full py-2 whitespace-nowrap hover:shadow-md hover:shadow-[#c3ff49]"
          >
            [ {item.label} ]
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
