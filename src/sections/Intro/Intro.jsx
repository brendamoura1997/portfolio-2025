import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RESUME_URL } from "../../utils/constants";
import SocialMedia from "../../components/SocialMedia";
import heroVideo from "../../assets/video/hero.mp4";

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
      className="relative flex flex-col justify-center bg-transparent text-white overflow-hidden min-h-screen"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b090a] via-[#0b090a] to-[#000] opacity-30 pointer-events-none"></div>

      <div className=" w-full flex flex-col lg:flex-row justify-center items-center relative">
        <div
          ref={textRef}
          className="py-15 px-15 text-center lg:text-left lg:order-1 md:mt-20 lg:mt-0 bg-[#000000]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-xl"
        >
          <h1
            className="flex justify-center my-name-font text-[#ceffff] neon-text-glow-cyan text-3xl sm:text-3xl
           md:text-5xl lg:text-6xl pb-4"
          >
            BRENDA MOURA
          </h1>
          <h2 className="flex flex-col elegant-font-subtitle sm:flex-row justify-center text-md sm:text-md md:text-xl text-gray-300 pb-7 sm:space-x-2">
            Software Developer
            {"\u00A0"} {"\u00A0"}
            <span className="text-[var(--neon-cyan)]  "> |</span>
            {"\u00A0"} {"\u00A0"}
            UX/UI Designer
          </h2>
          <h1 className="flex justify-center text-[#b4eef1] elegant-font text-center text-md font-extralight pb-7">
            Construo experiências digitais com o olhar técnico da Ciência <br />{" "}
            da Computação e a criatividade de quem desafia limites.
          </h1>
          <div className="flex justify-center gap-7">
            <a
              href={RESUME_URL}
              download
              className="relative w-56 text-center py-2 border border-[var(--neon-cyan)] text-[var(--neon-cyan)] group clip-diagonal"
            >
              <span className="absolute inset-0 bg-[var(--neon-cyan)] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black">
                Ver projetos
              </span>
            </a>
            <a
              href={RESUME_URL}
              download
              className="relative w-56 text-center py-2 border border-[var(--neon-cyan)] text-[var(--neon-cyan)] group clip-diagonal"
            >
              <span className="absolute inset-0 bg-[var(--neon-cyan)] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              <span className="relative z-10 group-hover:text-black">
                Download do Currículo
              </span>
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Intro;
