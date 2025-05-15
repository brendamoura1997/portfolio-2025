const icons = import.meta.glob("/src/assets/images/skills/*.png", {
  eager: true,
});

const getIcon = (skillName) => {
  const iconPath = `/src/assets/images/skills/${skillName.toLowerCase()}.png`;

  if (!icons[iconPath]) {
    console.error(`Ícone de Habilidades não foi encontrado: ${skillName}`);
    return icons["/src/assets/images/skills/fallback.png"].default;
  }

  return icons[iconPath].default;
};

// Habilidades categorizadas com níveis de proficiência (0-100), ícones e cores
export const skills = {
  "Desenvolvimento Web": [
    {
      name: "HTML",
      level: 100,
      icon: getIcon("html"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "JavaScript",
      level: 100,
      icon: getIcon("javascript"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "React",
      level: 100,
      icon: getIcon("react"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "CSS",
      level: 90,
      icon: getIcon("css"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "Styled\nComp...",
      level: 90,
      icon: getIcon("styledcomponents"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "Typescript",
      level: 80,
      icon: getIcon("typescript"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Restful",
      level: 80,
      icon: getIcon("restful"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Tailwind",
      level: 75,
      icon: getIcon("tailwind"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Node.js",
      level: 75,
      icon: getIcon("nodejs"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Swagger",
      level: 70,
      icon: getIcon("swagger"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Next.js",
      level: 70,
      icon: getIcon("nextjs"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Nest.js",
      level: 70,
      icon: getIcon("nestjs"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "MySQL",
      level: 65,
      icon: getIcon("mysql"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "MongoDB",
      level: 60,
      icon: getIcon("mongodb"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Websockets",
      level: 60,
      icon: getIcon("websocket"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "PHP",
      level: 30,
      icon: getIcon("php"),
      color: "var(--basic-level)",
      colorTitle: "var(--title-basic-level)",
      skillName: "Básico",
    },
  ],
  "Software Engineering": [
    {
      name: "Git",
      level: 85,
      icon: getIcon("git"),
      color: "var(--medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "GitHub",
      level: 85,
      icon: getIcon("github"),
      color: "var(--medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Docker",
      level: 40,
      icon: getIcon("docker"),
      color: "var(--basic-level)",
      colorTitle: "var(--title-basic-level)",
      skillName: "Básico",
    },
    {
      name: "AWS",
      level: 30,
      icon: getIcon("aws"),
      color: "var(--basic-level)",
      colorTitle: "var(--title-basic-level)",
      skillName: "Básico",
    },
  ],
  "UI / UX": [
    {
      name: "Figma",
      level: 90,
      icon: getIcon("figma"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "Photoshop",
      level: 90,
      icon: getIcon("photoshop"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
    {
      name: "Illustrator",
      level: 80,
      icon: getIcon("illustrator"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "Avançado",
    },
  ],
  "Outras tecnologias": [
    {
      name: "Jira",
      level: 80,
      icon: getIcon("jira"),
      color: "var(--advanced-level)",
      colorTitle: "var(--title-advanced-level)",
      skillName: "avançado",
    },
    {
      name: "Java",
      level: 50,
      icon: getIcon("java"),
      color: "var(--medium-level)",
      colorTitle: "var(--title-medium-level)",
      skillName: "Intermediário",
    },
    {
      name: "Python",
      level: 40,
      icon: getIcon("python"),
      color: "var(--basic-level)",
      colorTitle: "var(--title-basic-level)",
      skillName: "Básico",
    },
  ],
};
