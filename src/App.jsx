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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <Body />
        {/* Scroll to Top Button */}
        {showArrow && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#00ffcc] text-black p-3 rounded-full shadow-lg hover:bg-[#00ddaa] transition-all duration-300"
          >
            <FaArrowUp size={15} />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
