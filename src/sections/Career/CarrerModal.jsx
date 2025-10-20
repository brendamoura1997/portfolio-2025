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
        className="relative bg-[#090d14]/80 backdrop-blur-sm text-white rounded-lg w-full max-w-5xl max-h-[90vh] flex flex-col
                   shadow-[-0px_-0px_20px_5px_#013880] sm:shadow-[-0px_-0px_20px_0px_#013880] 
                   animate-[pulse-glow-about_3.0s_ease-in-out_infinite]  hover:animate-[pulse-glow-button_3.0s_ease-in-out_infinite]
                   transition-all duration-300"
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
        <div className="overflow-y-auto flex-grow min-h-0 pb-4 px-10 mt-10">
          <div className="viewMore">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--light-cyan-title)]">
                {title}
              </h3>
              <p className="text-gray-400 text-lg">{subtitle}</p>
            </div>

            <p className="text-gray-500 text-sm italic mb-4">{duration}</p>

            {/* Ver mais */}

            <p className="text-justify text-gray-300 leading-relaxed break-words [&_b]:text-[var(--text-cyan)]">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>

            <AnimatePresence>
              {isExpanded && extraDetails && extraDetails.length > 0 && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-justify text-gray-300 leading-relaxed list-none text-md mt-4
                  bg-[#FFF]/10 p-4 md:py-5 md:px-6 rounded-lg overflow-hidden flex flex-col gap-5"
                >
                  {extraDetails.map((detail, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: detail }}
                      className="[&_b]:text-[var(--text-cyan)] 
                      relative pl-6 before:content-['►'] before:absolute before:left-0
                       before:text-[var(--light-cyan-title)]"
                    />
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
