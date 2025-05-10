const certificate = import.meta.glob("/src/assets/images/docs/*.jpg", {
  eager: true,
});

const getCertificate = (certificateImage) => {
  const formattedName = certificateImage.replace(/\s+/g, "-").toLowerCase();
  const certificatePath = `/src/assets/images/docs/${formattedName}.jpg`;

  // console.log("Searching for:", certificatePath);
  // console.log("Available keys:", Object.keys(certificate));

  if (!certificate[certificatePath]) {
    console.error(`Certificate image not found: ${certificateImage}`);
    return certificate["/src/assets/images/docs/fallback.jpg"]?.default;
  }

  return certificate[certificatePath].default;
};

export const experience = [
  {
    title: "Fullstack Developer",
    subtitle: "Innovation Servicos Digitais Ltda",
    duration: "10/2022 - 07/2024",
    description:
      "Como Desenvolvedora Fullstack, liderei a implementação de interfaces completas em aplicações web, garantindo alta qualidade no frontend e integração eficiente com APIs.",
    extraDetails: [
      "Implementei a comunicação entre frontend e backend através de APIs REST, conectando e consumindo endpoints com eficiência.",
      "Desenvolvi interfaces responsivas e dinâmicas utilizando React.js, Typescript e Redux, desde o design inicial até o deploy final da aplicação",
      "Atuei em ambiente Scrum com organização de tarefas por meio de cards na plataforma Jira, com participação em dailys e práticas ágeis para acompanhamento do progresso e controle de entregas.",
      "Participei do desenvolvimento backend com Node.js e Nest.js, trabalhando com banco de dados MongoDB e gerenciadores de pacotes como Yarn e NPM.",
    ],
  },

  {
    title: "Monitora de Programação",
    subtitle: "Instituto Federal Catarinense",
    duration: "04/2021 - 01/2022",
    description:
      "Como monitora no Instituto Federal Catarinense, ofereci suporte individualizado a alunos nas disciplinas de programação, contribuindo para o desenvolvimento de suas habilidades em Java e C",
    extraDetails: [
      "Auxiliei alunos na resolução de exercícios e projetos acadêmicos, promovendo o entendimento de conceitos fundamentais de programação.",
      "Colaborei com professores no acompanhamento do progresso dos alunos, reforçando conteúdos e esclarecendo dúvidas.",
      "Ofereci suporte técnico e didático em linguagens como Java e C, adaptando explicações conforme o nível de conhecimento dos estudantes.",
    ],
  },

  {
    title: "Projeto de Pesquisa Científica",
    subtitle: "Instituto Federal Catarinense",
    duration: "08/2020 - 01/2021",
    ImageSrc: getCertificate("computer-science"),
    description:
      "Durante o Projeto de Pesquisa no Instituto Federal Catarinense, atuei na documentação técnica e no desenvolvimento frontend de sistemas, contribuindo para a organização e clareza do projeto.",
    extraDetails: [
      "Elaborei a documentação funcional e técnica do sistema, facilitando a manutenção e o entendimento por outros desenvolvedores e pesquisadores.",
      "Participei da análise de requisitos e da estruturação de funcionalidades no frontend, garantindo consistência entre o sistema e sua documentação.",
      "Desenvolvi interfaces de usuário utilizando tecnologias web, com foco em usabilidade e alinhamento com os objetivos do projeto.",
    ],
  },
];
