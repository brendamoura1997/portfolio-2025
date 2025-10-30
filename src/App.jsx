import { useState, useEffect } from "react";
import "./App.css";
import Body from "./sections/Body";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Brenda Moura",
      additionalName: "Brenda Alves Moura",
      alternateName: "Brenda Moura TI",
      disambiguatingDescription:
        "Desenvolvedora Full-Stack especializada em Desenvolvimento Web com React, TypeScript, Node.js e tecnologias de TI",
      jobTitle: "Desenvolvedora Full-Stack TI",
      description:
        "Portfolio de Brenda Moura TI - Desenvolvedora Full-Stack especializada em Desenvolvimento Web com React, TypeScript, Node.js e tecnologias de TI",

      knowsAbout: [
        "Desenvolvimento Web",
        "Web Development",
        "Desenvolvimento TI",
        "TI Development",
        "Technology Development",
        "Desenvolvimento Full-Stack",
        "Full-Stack Development",
        "Full Stack Development",
        "Fullstack Development",
        "Desenvolvimento Full Stack",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Next.js",
        "Nest.js",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "AWS",
        "Git",
        "Scrum",
        "Scrum e Metodologias Ágeis",
        "Agile Methodologies",
        "UI/UX Design",
        "Web Design",
        "Tecnologia da Informação",
        "Information Technology",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Desenvolvedora Full-Stack TI",
        occupationLocation: {
          "@type": "Country",
          name: "Brasil",
        },
      },
      url: "https://brendamourati.netlify.app",
      sameAs: [
        "https://www.linkedin.com/in/brenda-moura-ti",
        "https://github.com/brendamoura1997",
      ],
      knowsLanguage: ["en", "pt", "es", "ru"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressCountry: "BR",
      },
      birthDate: "1997-08-21",
      gender: "Female",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://brendamourati.netlify.app",
      },
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "GitHub",
          value: "brendamoura1997",
          url: "https://github.com/brendamoura1997",
        },
        {
          "@type": "PropertyValue",
          propertyID: "LinkedIn",
          value: "brenda-moura-ti",
          url: "https://www.linkedin.com/in/brenda-moura-ti",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    const handleScroll = () => {
      const headerHeight =
        document.querySelector("header")?.offsetHeight || 100;
      setShowArrow(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.head.removeChild(script);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App" itemScope itemType="https://schema.org/Person">
      <meta itemProp="name" content="Brenda Moura TI" />
      <meta itemProp="alternateName" content="Brenda Moura" />
      <meta itemProp="jobTitle" content="Desenvolvedora Full-Stack TI" />
      <meta
        itemProp="description"
        content="Brenda Moura TI - Desenvolvedora Full-Stack especializada em React, TypeScript, Node.js e soluções de TI"
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
