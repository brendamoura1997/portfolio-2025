import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialMedia from "../../components/SocialMedia";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer
      ref={footerRef}
      className="text-white w-full h-auto pt-8 md:pt-13 pb-20 px-6 bg-[#000000]/50 backdrop-blur-sm overflow-hidden 
      flex flex-col justify-center text-center"
    >
      {/* Footer Content */}
      <div className="content grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-5xl mx-auto">
        {/* COLUNA 1 */}
        <div className="flex flex-col items-start text-start">
          <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md mb-2">
            Redes Sociais
          </p>
          <SocialMedia
            addClassNameDiv={"gap-3 lg:gap-2 flex-col"}
            addClassName={"w-10 h-10 sm:w-6 sm:h-6 brightness-[0.8]"}
            showLabel={true}
          />
        </div>

        {/* COLUNA 2 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2">
          <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md">
            Contato
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • brendamoura857@gmail.com
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • 11 94300-0131
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • Barueri, São Paulo
          </p>
        </div>

        {/* COLUNA 3 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-2">
          <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md">
            Disponibilidade
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • Disponível para CLT ou PJ
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • Apenas remoto
          </p>
          <p className="text-[var(--neon-cyan)]/75 BODY1 text-sm">
            • Horário e valores à combinar
          </p>
        </div>
        {/* Neon Line */}
        <span
          className="absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#00ffff] to-transparent opacity-50 hover:via-[#b8ffff]"
        />
      </div>
    </footer>
  );
};

export default Footer;
