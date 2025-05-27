import About from "./About/About";
// import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import Certificate from "./Certificate/Certificate";
import Contact from "./Contact/Contact";
import Footer from "./Layout/Footer";
import Intro from "./Intro/Intro";
import Navbar from "./Layout/Navbar";
import bgImage from "../assets/images/global/bg10.png";
import Career from "./Career/Career";

const Body = () => {
  return (
    <div className="relative flex flex-col bg-[#010610] text-white overflow-hidden min-h-screen">
      <Navbar />
      <Intro id="intro" />

      <img
        src={bgImage}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="z-20 relative">
        {/* Gradiente começa aqui, antes do About */}
        <div className="absolute h-[20%] inset-0 bg-gradient-to-b from-black via-black/70 to-transparent pointer-events-none" />

        <About id="about" />
        <Career id="career" />
        {/* <Project id="projects" /> */}
        <Skill id="skills" />
        <Certificate id="certificates" />
        <Contact id="contact" />
      </div>

      <Footer />

      <p className="text-[var(--light-gray)]/70 text-sm T2 text-center relative h-10 flex justify-center items-center">
        © 2025 BRENDA MOURA | All Rights Reserved.
      </p>
      {/* Neon Line */}
      <span
        className="relative bottom-0 left-1/2 w-full h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent 
    via-[#00ffff] to-transparent opacity-100 hover:via-[#b8ffff]"
      />
    </div>
  );
};

export default Body;
