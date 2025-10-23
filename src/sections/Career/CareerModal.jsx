import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NeonButton from "../../components/ButtonNeon";
import { motion } from "framer-motion";

const CarrerModal = ({
  title,
  subtitle,
  duration,
  description,
  extraDetails,
  onClose,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-[#090d14]/80 backdrop-blur-sm text-white md:rounded-lg 
                   ${
                     isExpanded ? `w-full` : `max-w-[98vw] rounded-lg`
                   }  max-h-[100%]
                   md:max-w-5xl md:max-h-[80vh] flex flex-col md:mt-8
                   shadow-[-0px_-0px_20px_5px_#013880] sm:shadow-[-0px_-0px_20px_0px_#013880] 
                   animate-[pulse-glow-about_3.0s_ease-in-out_infinite] hover:animate-[pulse-glow-button_3.0s_ease-in-out_infinite]
                   transition-all duration-300`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute sm:text-2xl top-1 right-2 text-[var(--neon-cyan)] hover:neon-text-glow-cyan transition-all 
          duration-300 cursor-pointer p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="overflow-y-auto flex-grow min-h-0 pb-4 px-5 md:px-10 mt-10">
          <div className="viewMore">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
              <h3 className="text-lg md:text-2xl font-bold text-[var(--light-cyan-title)]">
                {title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg">{subtitle}</p>
            </div>

            <p className="text-[var(--text-gray-muted)] text-xs md:text-sm italic mb-4">
              {duration}
            </p>

            {/* Ver mais */}

            <p className="text-justify text-sm md:text-base text-gray-300 leading-relaxed break-words [&_b]:text-[var(--text-cyan)]">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>

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

          <div className="flex justify-end pt-4">
            {extraDetails && extraDetails.length > 0 && (
              <NeonButton
                width="w-full text-sm md:text-md px-6 sm:w-[140px] sm:h-[45px] relative"
                paddingY="py-3"
                text={isExpanded ? "Minimizar" : "Ver mais"}
                onClick={() => setIsExpanded(!isExpanded)}
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CarrerModal;
