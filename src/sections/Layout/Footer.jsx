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
      className="text-white w-full h-auto pt-8 md:p-5 pb-10 px-6 bg-[#000000]/50 backdrop-blur-sm  overflow-hidden 
      flex flex-col justify-center text-center"
    >
      {/* Footer Content */}
      <div className="">
        {/* Left Section: Social Links */}
        <div className="flex flex-col justify-center text-center">
          <SocialMedia
            addClassName={"w-10 h-10 sm:w-11 sm:h-11 brightness-[0.8]"}
            gap={"gap-3 lg:gap-10"}
          />

          {/* Footer Text */}

          <p className="text-gray-300 text-sm mt-5">
            © 2025 BRENDA MOURA | All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Animated Neon Line */}
      <span
        className="absolute bottom-1 left-1/2 w-full h-[2px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#00ffff] to-transparent opacity-100 hover:via-[#b8ffff]"
      />
    </footer>
  );
};

export default Footer;
