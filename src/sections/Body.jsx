import About from "./About/About";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import Certificate from "./Certificate/Certificate";
import Contact from "./Contact/Contact";
import Footer from "./Layout/Footer";
import Intro from "./Intro/Intro";
import Navbar from "./Layout/Navbar";

const Body = () => {
  return (
    <div className="relative flex flex-col bg-[#010610] text-white overflow-hidden min-h-screen">
      {" "}
      <Navbar />
      <Intro id="intro" />
      <About id="about" />
      <Project id="projects" />
      <Skill id="skills" />
      <Certificate id="certificates" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Body;
