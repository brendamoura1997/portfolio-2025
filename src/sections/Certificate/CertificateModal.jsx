import React from "react";
import { motion } from "framer-motion";

const CertificateModal = ({ title, issuer, date, imageSrc, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-60"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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

        {/* Certificate Image */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-35 md:h-85 lg:h-95 object-contain rounded-lg border border-[#252525]"
        />

        {/* Certificate Details */}
        <div className="flex flex-col items-center text-center py-8 md:my-auto lg:my-auto">
          <h3 className="flex text-xl text-l font-bold text-[var(--light-cyan-title)]">
            {title}
          </h3>
          <p className="text-md text-[var(--text-light-gray)] T2 mt-2">
            Emissor: {issuer}
          </p>
          <p className="text-sm text-gray-500 mt-2">Data: {date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
