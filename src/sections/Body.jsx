import About from "./About/About";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";
import Certificate from "./Certificate/Certificate";
import Contact from "./Contact/Contact";
import Footer from "./Layout/Footer";

const Body = () => {
  return (
    <div className="bg-black">
      {" "}
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
