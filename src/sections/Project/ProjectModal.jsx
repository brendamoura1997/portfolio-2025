import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import codeIcon from "../../assets/images/social-media/github.png";
import webIcon from "../../assets/images/social-media/web-square.png";
import NeonButton from "../../components/ButtonNeon";

const ProjectModal = ({
  title,
  subtitle,
  description,
  websiteLink,
  githubLink,
  imageSrc,
  extraDetails,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollableRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsExpanded(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isExpanded && scrollableRef.current) {
      scrollableRef.current.scrollTo({
        top: scrollableRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isExpanded]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative px-6 md:px-8 pt-8 md:pt-6 max-w-4xl w-full max-h-[80vh] bg-[#000]/20 backdrop-blur-sm
         text-white rounded-lg shadow-[-0px_-0px_20px_5px_#013880] sm:shadow-[-0px_-0px_20px_0px_#013880] 
           animate-[pulse-glow-button_1.5s_ease-in-out_infinite] border-[0.5px] border-[var(--light-cyan)]/50 transition-all 
           duration-300 flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute sm:text-2xl top-1 right-2 text-[var(--neon-cyan)] hover:neon-text-glow-cyan transition-all 
          duration-300 cursor-pointer bg-black/100 backdrop-blur-lg rounded-full w-10 h-10
           hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite] border-[0.5px] border-[var(--light-cyan)]/50"
        >
          ✕
        </button>

        {/* Scrollable Content Wrapper */}
        <div
          ref={scrollableRef}
          className="overflow-y-auto flex-grow min-h-0 pb-4"
        >
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-35 md:h-85 lg:h-95 object-cover rounded-lg border border-[#252525]"
          />

          {/* Title & Details */}
          <div className="mt-4">
            <h3 className="flex text-center text-xl text-l font-bold text-[var(--light-cyan-title)]">
              {title}
            </h3>
            <p className="text-md text-[var(--neon-cyan)] T2 mt-2">
              {subtitle}
            </p>
            <p className="text-justify text-sm md:text-base text-gray-300 leading-relaxed break-words [&_b]:text-[var(--text-cyan)] py-3 pr-4">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>

            {/* Expandable Extra Details */}
            <AnimatePresence>
              {isExpanded &&
                extraDetails &&
                Array.isArray(extraDetails) &&
                extraDetails.length > 0 && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-left md:text-justify text-gray-300 leading-relaxed list-none 
                    text-md mt-4 bg-[#FFF]/10 px-4 py-6 md:py-5 md:px-6 rounded-lg overflow-hidden 
                    flex flex-col gap-5 text-sm md:text-base"
                  >
                    {extraDetails.map((detailGroup, groupIndex) => (
                      <div key={groupIndex} className="flex flex-col gap-4">
                        {detailGroup.title && (
                          <p
                            className="font-semibold text-[var(--light-cyan-title)]"
                            dangerouslySetInnerHTML={{
                              __html: detailGroup.title,
                            }}
                          />
                        )}

                        {detailGroup.items &&
                          Array.isArray(detailGroup.items) &&
                          detailGroup.items.length > 0 && (
                            <>
                              {detailGroup.items.map((detail, index) => (
                                <li
                                  key={index}
                                  dangerouslySetInnerHTML={{ __html: detail }}
                                  className="[&_b]:text-[var(--text-cyan)] relative 
                                  pl-5 md:pl-10 before:content-['»'] before:absolute 
                                  before:left-0 md:before:left-5 before:text-[var(--light-cyan-title)]"
                                />
                              ))}
                            </>
                          )}
                      </div>
                    ))}
                  </motion.ul>
                )}
            </AnimatePresence>
          </div>
        </div>

        {/*  ICONS */}
        <div className="flex flex-row justify-end items-center gap-2 z-10 py-5">
          {/* CODE */}
          <div className="relative">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[var(--neon-cyan)] hover:text-white transition-all"
              onClick={(e) => e.stopPropagation()} // Prevents triggering the parent onClick
            >
              <img
                src={codeIcon}
                alt="GitHub"
                title="Ver código fonte"
                className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 shadow hover:border-[var(--light-cyan)] rounded-full
                    hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite]
                    active:scale-90 ease-in-out border border-[var(--neon-cyan)]/50
                    "
              />
            </a>
          </div>

          {/* WEB ICON */}
          <div className="relative">
            <a
              href={websiteLink}
              target="_blank"
              title="Acessar o site do projeto"
              rel="noopener noreferrer"
              className="inline-block text-[var(--neon-cyan)] hover:text-white transition-all"
              onClick={(e) => e.stopPropagation()} // Prevents triggering the parent onClick
            >
              <img
                src={webIcon}
                alt="Web Icon"
                className="w-8 h-8 sm:w-10 sm:h-10 transition duration-300 shadow hover:border-[var(--light-cyan)] rounded-full
                    hover:animate-[pulse-glow-button_1.5s_ease-in-out_infinite]
                    active:scale-90 ease-in-out border border-[var(--neon-cyan)]/50"
              />
            </a>
          </div>

          {/* Explorar Mais Button */}
          {extraDetails && (
            <NeonButton
              width="w-[140px] text-sm md:text-md px-6 py-2 sm:h-[45px] relative"
              paddingY="py-3"
              text={isExpanded ? "Ver menos" : "Ver mais"}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
