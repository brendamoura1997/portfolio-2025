import React from "react";

const NeonBlueButton = ({ width, paddingY, onClick, text, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative group ${width} cursor-pointer text-center ${paddingY} bg-[#000]/20 backdrop-blur-xl border-[0.5px] 
    border-[#13bcea] rounded-lg text-[#87e5ff] hover:border-[var(--light-cyan)] hover:text-[var(--light-cyan)] 
    hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] hover:neon-text-glow-cyan flex justify-center items-center
    active:scale-90 transition-all duration-150 ease-in-out`}
    >
      <span className="relative z-10">{text}</span>

      <span
        className="absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#2dd1ff] to-transparent opacity-100 hover:via-[#006eff]"
      />
    </button>
  );
};

export default NeonBlueButton;
