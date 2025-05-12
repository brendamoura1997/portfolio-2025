import React from "react";

const NeonButton = ({ width, paddingY, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group ${width} cursor-pointer text-center ${paddingY} bg-[#000]/20 backdrop-blur-xl border-[0.5px] 
    border-[#00ffff]/50 rounded-lg text-[var(--neon-cyan)] hover:border-[var(--light-cyan)] hover:text-[var(--light-cyan)] 
    hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] hover:neon-text-glow-cyan
    active:scale-95 transition duration-150 ease-in-out`}
    >
      <span className="relative z-10">{text}</span>

      <span
        className="absolute bottom-0 left-1/2 w-full h-[0.7px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#00ffff] to-transparent opacity-100 hover:via-[#b8ffff]"
      />
    </button>
  );
};

export default NeonButton;
