import linkedinIcon from "../assets/images/social-media/linkedin.png";
import emailIcon from "../assets/images/social-media/email.png";
import whatsappIcon from "../assets/images/social-media/whatsapp.png";
import githubIcon from "../assets/images/social-media/github.png";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/brenda-moura-ti",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  { href: "mailto:brendamoura857@gmail.com", icon: emailIcon, alt: "Email" },
  { href: "https://wa.me/+5511943000131", icon: whatsappIcon, alt: "WhatsApp" },
  {
    href: "https://github.com/brendamoura1997",
    icon: githubIcon,
    alt: "GitHub",
  },
];

const SocialMedia = ({ addClassName, gap }) => (
  <div className={`flex justify-center ${gap} mt-10 flex-wrap`}>
    {socialLinks.map(({ href, icon, alt }, index) => (
      <motion.a
        key={alt}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          x: 0,
          filter: "drop-shadow(0px 0px 0px 5px var(--neon-cyan))",
        }}
        animate={{
          opacity: 1,
          x: 0,
          filter: "drop-shadow(0px 0px 5px var(--neon-cyan))",
        }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="rounded-full"
      >
        <img
          src={icon}
          alt={alt}
          className={` ${addClassName} rounded-full border border-[var(--neon-cyan)]/30 
           hover:brightness-[2] hover:shadow-[0_0_10px_#00ffcc] hover:border-[var(--neon-cyan)]
          active:scale-90 transition duration-150 ease-in-out`}
        />
      </motion.a>
    ))}
  </div>
);

export default SocialMedia;
