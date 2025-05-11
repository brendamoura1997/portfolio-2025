import React from "react";

const NeonButton = ({ width, paddingY, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={`relative ${width} cursor-pointer text-center ${paddingY} backdrop-blur-xl border rounded-lg 
        border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:border-[var(--light-cyan)] hover:text-[var(--light-cyan)] 
        hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] transition-colors duration-100`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default NeonButton;
