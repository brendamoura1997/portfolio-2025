import React, { useRef } from "react";
import moreIcon from "../assets/images/social-media/more.png";

const CertificateCard = ({ title, issuer, date, imageSrc, onClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // X coordinate within the card
      const y = e.clientY - rect.top; // Y coordinate within the card
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      // Reset the transform to default
      card.style.transform = "scale(1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-around w-full max-w-[28rem] h-auto bg-[#000]/20 backdrop-blur-sm px-4 pb-3 
      mb-5 rounded-xl group pt-3 hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] md:h-90
      overflow-hidden  md:max-w-[28rem] border border-transparent 
      hover:border-[var(--neon-cyan)]/55 transition-all duration-300 
      shadow-[-0px_-0px_20px_5px_#013880] sm:shadow-[-0px_-0px_15px_5px_#013880] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-[13rem]">
        {/* Imagem */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[13rem] object-cover rounded-md transition-transform 
    duration-500 group-hover:scale-110 border border-[#252525]"
        />

        {/* Overlay por cima da imagem */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#478ce6]/0 to-[#013880]/50 
    group-hover:to-[#013880]/30 z-10 rounded-md pointer-events-none transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Neon Green Holographic Glow Effect */}
      <div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            300px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            rgba(0,243,243,0.3),
            transparent 50%
          )`,
        }}
      ></div>

      {/* Glowing Border Effect */}
      <div
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 
        pointer-events-none"
        style={{
          mask: `radial-gradient(
            200px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            white,
            transparent 80%
          )`,
          WebkitMask: `radial-gradient(
            200px circle at var(--mouse-x, 0) var(--mouse-y, 0),
            white,
            transparent 80%
          )`,
          border: `1px solid var(--neon-cyan)`,
        }}
      ></div>

      {/* <div className="py-2 relative z-10 pointer-events-auto bg-[var(--bg-dark-cyber)]"></div> */}

      {/* Title Overlay */}

      <div className="flex flex-col justify-center items-center z-10 pointer-events-auto md:pt-1 pt-5">
        <h3 className="md:text-md lg:text-lg text-center font-bold text-[var(--light-cyan-title)]">
          {title}
        </h3>
        <p
          className="flex px-2 pt-1 text-[var(--text-light-gray)] BODY1
        text-sm md:text-md BODY1 text-center"
        >
          Por: {issuer}
        </p>
        <p
          className="flex px-2 pb-1 text-gray-500 BODY1
        text-sm md:text-md BODY1 text-center leading-relaxed"
        >
          Data: {date}
        </p>
      </div>

      {/* Ícone fixo no canto inferior direito */}
      <div className="absolute bottom-2 right-2 z-20">
        <a
          rel="noopener noreferrer"
          className="inline-block text-[var(--neon-cyan)] hover:text-white transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={moreIcon}
            alt="Veja Mais"
            onClick={onClick}
            title="Veja Mais"
            className="w-8 h-8 sm:w-8 sm:h-8 transition duration-300 shadow hover:border-[var(--light-cyan)] rounded-full
        hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] cursor-pointer
        active:scale-90 ease-in-out border border-[var(--neon-cyan)]/50"
          />
        </a>
        <span
          className="absolute bottom-[7.5px] left-1/2 w-full h-[0.7px] -translate-x-1/2 bg-gradient-to-r from-transparent 
      via-[var(--neon-cyan)] to-transparent opacity-100 hover:via-[#b8ffff]"
        />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-[#1da519] rounded-full"
          style={{
            top: "var(--mouse-y, 0)",
            left: "var(--mouse-x, 0)",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 150, 0.6), 0 0 30px rgba(0, 150, 255, 0.6)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CertificateCard;
