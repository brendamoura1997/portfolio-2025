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
    title: "Site em Flat Design com Styled-Components",
    subtitle: "HTML, CSS, React, Styled-Components",
    description:
      "Um site minimalista cujo objetivo consiste em mostrar minhas habilidades em criar sites na estética flat-design utilizando styled-components",
    extraDetails: [
      {
        title: "Detalhes do Projeto",
        items: [
          "Estética: paleta plana e contrastada, com composições geométricas, ícones simples e sombras sutis para hierarquia visual.",
          "Animações: microinterações e transições suaves para guiar o olhar sem distrair.",
          "Interatividade: hover states claros e feedback imediato em botões e cards, melhorando a navegação.",
          "Layout: grid responsivo que adapta conteúdo entre mobile e desktop mantendo proporções consistentes.",
          "Performance: otimizações leves (imagens responsivas, carregamento assíncrono) para navegação rápida.",
          "Acessibilidade: contraste adequado, foco visível e navegação por teclado preservados.",
        ],
      },
    ],
    githubLink: "https://github.com/brendamoura1997/flat-design-styled",
    websiteLink: "https://flatdesignstyled.netlify.app/",
    imageSrc: getBanner("flatdesignstyled"),
  },
  {
    title: "Site de Previsão do Tempo",
    subtitle: "React, TypeScript, Tailwind CSS, Tanstack, Recharts",
    description:
      "Aplicação de previsão do tempo que utiliza a API OpenWeatherMap para fornecer informações meteorológicas em tempo real, incluindo temperatura, umidade, vento e previsão para os próximos dias. O design é responsivo e moderno, com uma interface limpa e fácil de usar.",
    extraDetails: [
      {
        title: "Detalhes do Projeto",
        items: [
          "Funcionalidade: busca por cidade, detecção por geolocalização e gerenciamento de cidades favoritas.",
          "Visual: design plano e minimalista com hierarquia bem definida e ícones legíveis.",
          "Animações: microinterações e transições suaves usando Framer Motion para feedback ao usuário.",
          "Interatividade: hover states e atualização em tempo real ao selecionar horários ou cidades.",
          "Layout: grid responsivo que se adapta entre mobile e desktop mantendo clareza e usabilidade.",
          "Performance: carregamento assíncrono de dados, imagens otimizadas e chamadas à API eficientes.",
          "Acessibilidade: contraste adequado, foco visível e suporte à navegação por teclado.",
        ],
      },
    ],
    githubLink: "https://github.com/brendamoura1997/vremya-clima",
    websiteLink: "https://vremyacast.netlify.app/",
    imageSrc: getBanner("vremyaforecast"),
  },
  {
    title: "Site de Portfólio com Temática Cyberpunk",
    subtitle: "React, Tailwind CSS, Framer Motion",
    description:
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
