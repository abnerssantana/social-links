export type GridItemLayout = "1x2" | "1x6" | "2x1" | "2x2" | "2x4" | "2x6" | "2x8";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  description?: string;
  color?: string;
  backgroundColor?: {
    light: string;
    dark: string;
  };
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  price?: string;
  oldPrice?: string;
  stars?: number;
  equipments?: EqiupmentItem[];
  image?: string;
  images?: string[];
  video?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "WhatsApp",
    backgroundColor: {
      light: "#dcf8c6",
      dark: "#075e54",
    },
    icon: "whatsapp",
    description: "Entre em contato agora e agende uma consulta.",
    color: "#25d366",
    buttonTitle: "17 99141-4224",
    buttonLink:
      "https://api.whatsapp.com/send?phone=5517991414224",
    buttonSecondaryText: "",
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Ambiente acolhedor e moderno, projetado especialmente para trazer conforto aos pequenos pacientes. Com decoração lúdica, tecnologia de ponta e uma atmosfera tranquila, uma experiência positiva para toda a família.",
    images: ["/consultorio/1.jpeg", "/consultorio/3.jpg", "/consultorio/4.jpg", "/consultorio/8.jpg"],
  },
  {
    layout: "2x8",
    type: "equipment",
    title: "Prazer, Dra. Tati",
    video: "/1.mp4",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    description:
      "Acompanhe meu Instagram para dicas de saúde bucal e novidades do consultório.",
    buttonTitle: "Seguidores",
    buttonLink: "https://www.instagram.com/abnerssantana/",
    buttonSecondaryText: "2500",
    color: "rgba(104, 60, 190, 1)",
    backgroundColor: {
      light: "#f7e3fc",
      dark: "#2e1437",
    },
  },
  {
    layout: "2x1",
    type: "project",
    title: "Atendimento personalizado para bebês, crianças e gestantes",
    icon: "contact",
    color: "#000000",  // Texto branco para melhor contraste
    backgroundColor: {
      light: "#E8B4BC",  // Rosa suave
      dark: "#E8B4BC",   // Rosa escuro
    },
  },
  {
    layout: "2x1",
    type: "project",
    title: "Foco em prevenção e cuidados desde a primeira infância",
    icon: "cake",
    color: "#000000",
    backgroundColor: {
      light: "#B4D7BC",  // Verde suave
      dark: "#B4D7BC",   // Verde escuro
    },
  },
  {
    layout: "2x1",
    type: "project",
    title: "Experiência em odontopediatria com abordagem lúdica e gentil",
    icon: "heart",
    color: "#000000",
    backgroundColor: {
      light: "#E8C4B4",  // Pêssego suave
      dark: "#E8C4B4",   // Pêssego escuro
    },
  },
  {
    layout: "2x1",
    type: "project",
    title: "Consultório adaptado para o conforto dos pequenos pacientes",
    icon: "baby",
    color: "#000000",
    backgroundColor: {
      light: "#B4C4E8",  // Azul suave
      dark: "#B4C4E8",   // Azul escuro
    },
  },
  {
    layout: "2x6",
    type: "equipment",
    title:
      "Arrancar o dente é um momento muito desafiador para as crianças.",
    images: ["joca-modelo.jpg"],
  },
  {
    layout: "2x6",
    type: "equipment",
    title:
      "Você pode estar se sentindo perdida, calma, pode ser só o dentinho nascendo.",
    images: ["dente-nascendo.jpg"],
  },
];

export const siteConfig = {
  creator: "Abner Santana",
  title: "Correrdor, YouTuber e Tecnologia",
  bio: "Cada sorriso é único e merece um cuidado especial, combinando técnica moderna com um atendimento acolhedor e gentil.",
  location: "Navarro Building. Sala 115",
  timeweek: "Seg-Sex: 9h-19h",
  locationLink:
    "https://maps.app.goo.gl/V67nKJ7QjabckVNK9",
  email: "drtati@gmail.com",
  items: GridItems,
} as const;
