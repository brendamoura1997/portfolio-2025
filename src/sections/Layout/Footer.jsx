import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialMedia from "../../components/SocialMedia";
import email from "../../assets/images/social-media/email.png";
import phone from "../../assets/images/footer/phone.png";
import local from "../../assets/images/footer/local.png";
import bgImage from "../../assets/images/footer/bg3.png";
import play from "../../assets/images/footer/play.png";
import useScreenSize from "../../hooks/useScreenSize";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [copiedMsg, setCopiedMsg] = useState("");
  const screenWidth = useScreenSize();

  useEffect(() => {
    const checkMobilePortrait = () => {
      if (screenWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobilePortrait();
    window.addEventListener("resize", checkMobilePortrait);
    return () => window.removeEventListener("resize", checkMobilePortrait);
  }, [screenWidth]);

  const handleCopy = (text) => {
    const selection = window.getSelection();
    if (selection && selection.toString().length === 0) {
      navigator.clipboard.writeText(text);

      setCopiedMsg(text);
      setTimeout(() => {
        setCopiedMsg("");
      }, 2000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="text-white w-full h-auto bg-[#000]/50 backdrop-blur-sm shadow-[0px_-20px_30px_5px_#09090d]
      overflow-hidden flex md:justify-center"
    >
      <img
        src={bgImage}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-[0]"
      />
      <div
        className="w-full h-full bg-gradient-to-t from-[#00132b]/80 to-[#060608]/70 
      opacity-100 py-10 md:py-20 z-[1]"
      >
        {/* Footer Content */}
        <div
          className="content relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 lg:max-w-5xl md:mx-auto 
        backdrop-blur-sm px-5 md:px-15"
        >
          {/* COLUNA 1 */}
          <div className="flex flex-col items-start text-start lg:pl-10 ">
            {/* Neon Line */}
            {isMobile ? (
              <span
                className="relative top-7 md:top-[1.8rem] left-0 w-full h-[2px] bg-gradient-to-r from-[#00ffff]/70 
          to-transparent opacity-100"
              />
            ) : null}

            <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md mb-5">
              Redes Sociais
            </p>

            <SocialMedia
              addClassNameDiv={"gap-3 lg:gap-2 flex-col"}
              addClassName={"w-6 h-6 sm:w-6 sm:h-6 brightness-[0.8]"}
              showLabel={true}
            />
          </div>

          {isMobile ? null : (
            <span
              className="hidden md:block absolute left-[29%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent 
          via-[#00ffff] to-transparent opacity-60"
            />
          )}

          {/* COLUNA 2 */}
          <div className="flex flex-col items-start text-start gap-3 ">
            <div className="flex flex-col items-start text-start w-full mb-2 ">
              {isMobile ? (
                <span
                  className="relative top-7 md:top-[1.8rem] left-0 w-full h-[2px] lg:h-[1px] bg-gradient-to-r from-[#00ffff]/70 
          to-transparent opacity-100"
                />
              ) : null}
              <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md">
                {/* Contato */}
                Informações Pessoais
              </p>
            </div>

            <div
              className="flex justify-start gap-1 cursor-default relative
            active:scale-90 transition duration-150 ease-in-out group"
              title="Clique para copiar"
              onClick={() => handleCopy("11 94300-0131")}
            >
              <img
                src={phone}
                alt="telephone"
                title="Clique para copiar"
                className="w-5 h-auto md:w-6 md:h-auto opacity-80 group-hover:brightness-[2] group-hover:opacity-100 
              active:scale-90 transition duration-150 ease-in-out"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm transition duration-150 ease-in-out
           group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc]"
              >
                11 94300-0131
              </p>

              {copiedMsg === "11 94300-0131" && (
                <span
                  className="absolute -top-7 right-1 text-xs text-[var(--light-cyan)] bg-black px-2 py-1 
              rounded-lg shadow-lg border border-[var(--light-cyan)]"
                >
                  Copiado!
                </span>
              )}
            </div>

            <div
              className="flex justify-start gap-1 cursor-default relative
  active:scale-90 transition duration-150 ease-in-out group"
              title="Clique para copiar"
              onClick={() => handleCopy("brendamoura857@gmail.com")}
            >
              <img
                src={email}
                alt="email"
                title="Clique para copiar"
                className="w-5 h-auto sm:w-6 sm:h-auto opacity-80 rounded-full 
    group-hover:brightness-[2] group-hover:opacity-100 active:scale-90 transition duration-150 ease-in-out"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm pb-[0.15rem] 
     group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc] transition"
              >
                brendamoura857@gmail.com
              </p>
              {copiedMsg === "brendamoura857@gmail.com" && (
                <span
                  className="absolute -top-7 right-1 text-xs text-[var(--light-cyan)] bg-black px-2 py-1 
      rounded-lg shadow-lg border border-[var(--light-cyan)]"
                >
                  Copiado!
                </span>
              )}
            </div>

            <div
              className="flex justify-start gap-1 cursor-default relative
  active:scale-90 transition duration-150 ease-in-out group"
              title="Clique para copiar"
              onClick={() => handleCopy("Barueri, São Paulo")}
            >
              <img
                src={local}
                alt="local"
                title="Clique para copiar"
                className="w-5 h-auto md:w-6 md:h-auto opacity-80 
    group-hover:brightness-[2] group-hover:opacity-100 active:scale-90 transition duration-150 ease-in-out"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm 
     group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc] transition"
              >
                Barueri, São Paulo
              </p>
              {copiedMsg === "Barueri, São Paulo" && (
                <span
                  className="absolute -top-7 right-1 text-xs text-[var(--light-cyan)] bg-black px-2 py-1 
      rounded-lg shadow-lg border border-[var(--light-cyan)]"
                >
                  Copiado!
                </span>
              )}
            </div>
          </div>

          {isMobile ? null : (
            <span
              className="hidden md:block absolute left-[62.66%] top-0 h-full w-[1px] bg-gradient-to-b 
          from-transparent via-[#00ffff] to-transparent opacity-60"
            />
          )}

          {/* COLUNA 3 */}
          <div className="flex flex-col md:items-start text-start gap-3 md:pl-15 lg:pl-6">
            <div className="flex flex-col items-start text-start w-full mb-2">
              {isMobile ? (
                <span
                  className="relative top-7 md:top-[1.8rem] left-0 w-full h-[2px] bg-gradient-to-r from-[#00ffff]/70 
        to-transparent opacity-100"
                />
              ) : null}

              <p className="T2 text-[var(--neon-cyan)]/80 font-semibold text-md">
                Disponibilidade
              </p>
            </div>

            {/* LINHA 1 */}
            <div className="flex justify-start md:justify-center items-center gap-1 cursor-default relative group">
              <img
                src={play}
                alt="CLT ou PJ"
                title="CLT ou PJ"
                className="w-5 h-auto md:w-4 md:h-auto opacity-90 transition group-hover:brightness-[2] group-hover:opacity-100"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm transition 
      group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc]"
              >
                Disponível para CLT ou PJ
              </p>
            </div>

            {/* LINHA 2 */}
            <div className="flex justify-start md:justify-center items-center gap-1 cursor-default relative group">
              <img
                src={play}
                alt="Remoto"
                title="Remoto"
                className="w-5 h-auto md:w-4 md:h-auto opacity-90 transition group-hover:brightness-[2] group-hover:opacity-100"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm transition 
      group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc]"
              >
                Apenas remoto
              </p>
            </div>

            {/* LINHA 3 */}
            <div className="flex justify-start md:justify-center items-center gap-1 cursor-default relative group">
              <img
                src={play}
                alt="Horário"
                title="Horário"
                className="w-5 h-auto md:w-4 md:h-auto opacity-90 transition group-hover:brightness-[2] group-hover:opacity-100"
              />
              <p
                className="text-[var(--neon-cyan)]/75 BODY1 font-bold text-sm transition 
      group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc]"
              >
                Horário e valores à combinar
              </p>
            </div>
          </div>
          {/* Neon Line */}
          {/* <span
          className="absolute bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#00ffff] to-transparent opacity-50 hover:via-[#b8ffff]"
        /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
