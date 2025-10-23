// Function to get the doc banner
const banner = import.meta.glob("/src/assets/images/docs/*.jpg", {
  eager: true,
});

const getBanner = (bannerName) => {
  const jpgPath = `/src/assets/images/docs/${bannerName}.jpg`;

  if (!banner[jpgPath]) {
    console.error(`Doc banner não foi encontrado: ${bannerName}`);
    return banner["/src/assets/images/docs/fallback.jpg"].default;
  }

  return banner[jpgPath].default;
};

const certificationsData = [
  {
    title: "Graduação em Ciência da Computação",
    issuer: "IFC, Sônia Regina de Souza Fernandes",
    date: "04/2023",
  },
  {
    title: "Python do básico ao avançado + ia",
    issuer: "Udemy, Caio Henrique Lemos Sampaio",
    date: "07/2022",
  },
  {
    title: "Desenvolvimento Android Completo 2022",
    issuer: "Udemy, Jamilton Damasceno",
    date: "08/2022",
    certificateLink: "",
  },
  {
    title: "User Experience",
    issuer: "FIAP Centro Universitário, Wagner Sanchez, John Paul Lima",
    date: "02/2022",
    certificateLink: "",
  },
  {
    title: "Monitoria de Programação",
    issuer: "Instituto Federal Catarinense, Fábio José Rodrigues Pinheiro",
    date: "01/2022",
    certificateLink: "",
  },
  {
    title: "Participação em Palestras e Workshops - Dia 01",
    issuer: "The Developer's Conference, Yara Senger",
    date: "04/2019",
  },
  {
    title: "Participação em Palestras e Workshops - Dia 02",
    issuer: "The Developer's Conference, Yara Senger",
    date: "04/2019",
  },
  {
    title: "Participação em Palestras e Workshops - Dia 03",
    issuer: "The Developer's Conference, Yara Senger",
    date: "04/2019",
  },
];

export const certifications = certificationsData.map((cert) => ({
  ...cert,
  imageSrc: getBanner(cert.title), // Automatically pass title
}));
