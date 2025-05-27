import linkedinIcon from "../assets/images/social-media/linkedin.png";
import emailIcon from "../assets/images/social-media/email.png";
import whatsappIcon from "../assets/images/social-media/whatsapp.png";
import githubIcon from "../assets/images/social-media/github.png";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "https://wa.me/+5511943000131", icon: whatsappIcon, alt: "WhatsApp" },

  { href: "mailto:brendamoura857@gmail.com", icon: emailIcon, alt: "Email" },
  {
    href: "https://www.linkedin.com/in/brenda-moura-ti",
    icon: linkedinIcon,
    alt: "LinkedIn",
  },

  {
    href: "https://github.com/brendamoura1997",
    icon: githubIcon,
    alt: "GitHub",
  },
];

const SocialMedia = ({ addClassName, addClassNameDiv, showLabel }) => (
  <div className={`flex ${addClassNameDiv}`}>
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
          // filter: "drop-shadow(0px 0px 5px var(--neon-cyan))",
          filter: `${
            showLabel
              ? "drop-shadow(0px 0px 2px var(--neon-cyan))"
              : "drop-shadow(0px 0px 5px var(--neon-cyan))"
          }`,
        }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex items-center gap-2 group transition duration-150 ease-in-out"
      >
        <img
          src={icon}
          alt={alt}
          className={`${addClassName} rounded-full border border-[var(--neon-cyan)]/30 
            group-hover:brightness-[2] group-hover:shadow-[0_0_10px_#00ffcc] group-hover:border-[var(--neon-cyan)]
            active:scale-90 transition duration-150 ease-in-out`}
        />
        {showLabel && (
          <span
            className="text-[var(--neon-cyan)]/70 BODY1 text-sm transition duration-150 ease-in-out
           group-hover:text-[var(--light-cyan-title)] group-hover:drop-shadow-[0_0_6px_#00ffcc]"
          >
            {alt}
          </span>
        )}
      </motion.a>
    ))}
  </div>
);

export default SocialMedia;
