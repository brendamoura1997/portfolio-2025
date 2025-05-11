import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RESUME_URL } from "../../utils/constants";
import SocialMedia from "../../components/SocialMedia";
import heroVideo from "../../assets/video/hero.mp4";
import NeonButton from "../../components/ButtonNeon";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({ id }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id={id}
      ref={containerRef}
      className="relative flex flex-col pt-25 sm:pt-0 sm:justify-center bg-transparent text-white overflow-hidden min-h-screen"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b090a] via-[#0b090a] to-[#000] opacity-50 sm:opacity-30 pointer-events-none"></div>

      <div className="w-full flex flex-col justify-center items-center relative ">
        <div
          ref={textRef}
          className="px-5 py-20 md:py-15 md:px-15 text-center items-center bg-[#000000]/10 backdrop-blur-sm 
          rounded-xl shadow-[-0px_-0px_20px_5px_#013880] sm:shadow-[-0px_-0px_20px_0px_#013880]"
        >
          <button
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex w-full cursor-pointer justify-center text-center items-center my-name-font text-[#ceffff] neon-text-glow-cyan 
            text-4xl md:text-5xl lg:text-6xl py-2 hover:animate-[pulse-glow-text_1s_ease-in-out_infinite] transition-colors 
            duration-100 "
          >
            BRENDA MOURA
          </button>
          <h2
            className="flex flex-row elegant-font-subtitle justify-center text-sm md:text-lg lg:text-md w-full
           text-[var(--text-gray)] pb-10"
          >
            Software Developer
            {"\u00A0"} {"\u00A0"}
            <span> |</span>
            {"\u00A0"} {"\u00A0"}
            UX/UI Designer
          </h2>
          <h1 className="flex justify-center text-[var(--text-cyan)] elegant-font text-center text-sm md:text-lg font-extralight pb-5">
            Construo experiências digitais com o olhar técnico da Ciência{" "}
            <br className="hidden sm:inline" /> da Computação e a criatividade
            de quem desafia limites.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center text-lg sm:text-sm md:text-md gap-7 elegant-font">
            <NeonButton
              width="w-full md:w-52"
              paddingY="py-3"
              text="Ver projetos"
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />

            <NeonButton
              width="w-full md:w-52"
              paddingY="py-3"
              text="Download do Currículo"
              onClick={() => {
                const link = document.createElement("a");
                link.href = RESUME_URL;
                link.download = "";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Intro;
