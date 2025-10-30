import { useState, useEffect } from "react";
import "./App.css";
import Body from "./sections/Body";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight =
        document.querySelector("header")?.offsetHeight || 100;
      setShowArrow(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App" itemScope itemType="https://schema.org/Person">
      <meta itemProp="name" content="Brenda Moura" />
      <meta itemProp="additionalName" content="Brenda Alves Moura" />
      <meta itemProp="alternateName" content="Brenda Moura TI" />
      <meta itemProp="jobTitle" content="Desenvolvedora Web Full-Stack TI" />
      <meta
        itemProp="description"
        content="Brenda Moura TI - Portfolio | Desenvolvedora Web Full-Stack especializada em React, TypeScript, Node.js e soluções de TI"
      />

      <Body />

      {/* Scroll to Top Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#00ffcc] text-black p-3 rounded-full shadow-lg hover:bg-[#00ddaa] 
            transition-all duration-300 z-30 cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
}

export default App;
