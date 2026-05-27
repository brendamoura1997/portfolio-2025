const banner = import.meta.glob("/src/assets/images/projects/*.jpg", {
  eager: true,
});

const getBanner = (projectBanner) => {
  const bannerPath = `/src/assets/images/projects/${projectBanner.toLowerCase()}.jpg`;

  if (!banner[bannerPath]) {
    console.error(`Project banner not found: ${projectBanner}`);
    return banner["/src/assets/images/projects/fallback.jpg"].default;
  }

  return banner[bannerPath].default;
};

export const projectList = [
  {
    title: "Site de Portfólio com Temática Cyberpunk",
    subtitle: "React, Tailwind CSS, Framer Motion",
    desciption:
      "Portfólio pessoal inspirado no estilo cyberpunk, com um layout de rolagem em página única, utilizando React, Tailwind CSS e Framer Motion.",
    extraDetails: [
      {
        title: "Detalhes do Projeto",
        items: [
          "Um portfólio futurista iluminado por neon, apresentando carreira e projetos pessoais.",
          "O site inclui: efeitos de luminoso e transições animadas entre seções para uma experiência de usuário dinâmica.",
          "Rolagem parallax e efeitos interativos ao passar o mouse para aumentar a profundidade visual.",
          "Otimizado para responsividade em dispositivos móveis e desktops, preservando a estética cyberpunk.”",
        ],
      },
    ],
    githubLink: "https://github.com/brendamoura1997/portfolio-2025",
    websiteLink: "https://brendamourati.netlify.app/",
    imageSrc: getBanner("portfolio"),
  },
];
