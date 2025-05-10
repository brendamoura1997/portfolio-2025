import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headImage from "../../assets/images/head.png";
import { RESUME_URL } from "../../utils/constants";
import SocialMedia from "../../components/SocialMedia";
import heroVideo from "../../assets/video/hero.mp4";

gsap.registerPlugin(ScrollTrigger);

const Intro = ({ id }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
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
          className="py-10 px-10 text-center lg:text-left lg:order-1 md:mt-20 lg:mt-0 bg-[#000000]/70 shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-xl"
          //   className="py-10 px-10 text-center lg:text-left lg:order-1 md:mt-20 lg:mt-0 bg-blue-900/50 shadow-[0_0_20px_rgba(0,0,0,0.6)] rounded-xl"
        >
          <p className="flex justify-center text-3xl sm:text-3xl md:text-5xl lg:text-3xl pb-3">
            Seja Bem-vindo!
          </p>
          <h1 className="flex justify-center text-3xl sm:text-3xl md:text-5xl lg:text-5xl pb-8">
            Meu nome é&nbsp;
            {/* <span className="text-light-lime-green neon-text">BRENDA</span> */}
            <span className="text-[#ceffff] neon-text-glow-cyan">BRENDA</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center text-md sm:text-md md:text-xl text-gray-300 pb-4 space-x-0 sm:space-x-2">
            <h2>Software Developer |</h2>
            <h2>UX/UI Designer </h2>
          </div>
          <h1 className="flex justify-center text-center text-md font-bold pb-4">
            Construo experiências digitais com o olhar técnico da <br />
            Ciência da Computação e a criatividade de quem desafia limites.
          </h1>
          <div className="flex justify-center gap-10 pt-12 ">
            <a
              href={RESUME_URL}
              download
              className="relative w-56 text-center  py-2 border border-[var(--neon-cyan)] text-[var(--neon-cyan)] group clip-diagonal"
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
