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
    layout: "2x8",
    type: "equipment",
    title: "Seu Alienígena Favorito ❤️👽✌️",
    video: "/runner.mp4",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    description: "Junte-se à nossa comunidade de corredores!",
    buttonTitle: "Conectar",
    buttonLink: "https://discord.gg/pGcDZjhRry",
    buttonSecondaryText: "",
    color: "#5865F2",
    backgroundColor: {
      light: "#E8EAFF",
      dark: "#1A1C2A",
    },
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    description: "Acompanhe minha jornada diária nas corridas",
    buttonTitle: "Seguir",
    buttonLink: "https://www.instagram.com/abnerssantana/",
    buttonSecondaryText: "@abnerssantana",
    color: "#E4405F",
    backgroundColor: {
      light: "#FFE8ED",
      dark: "#2A1A1F",
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Conquistas e Recordes Pessoais",
    description: "Evolução constante e dedicação aos treinos",
    images: ["/records/5k.jpg", "/records/10k.jpg", "/records/21k.jpg", "/records/42k.jpg"],
    equipments: [
      { title: "5K - 14:27" },
      { title: "10K - 30:49" },
      { title: "21K - 1:11:23" },
      { title: "42K - 2:30:44" },
    ],
  },
  {
    layout: "2x1",
    type: "project",
    title: "Magic Training - Sua plataforma de treinos",
    icon: "running",
    color: "#000000",
    backgroundColor: {
      light: "#FFB800",
      dark: "#FFB800",
    },
    buttonLink: "https://magictraining.run",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Loja - Vivendo a Corrida",
    icon: "shop",
    color: "#000000",
    backgroundColor: {
      light: "#00C853",
      dark: "#00C853",
    },
    buttonLink: "https://vivendoacorrida.com",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Me siga no Strava",
    icon: "strava",
    color: "#000000",
    backgroundColor: {
      light: "#FF4B4B",
      dark: "#FF4B4B",
    },
    buttonLink: "https://strava.com/athletes/abnerssantana",
  },
  {
    layout: "2x6",
    type: "equipment",
    title: "Dicas Valiosas de Treinamento",
    description: "Aprenda técnicas avançadas e melhore seu desempenho",
    images: ["/training/tips.jpg"],
  },
];

export const siteConfig = {
  creator: "Abner Santana",
  title: "Corredor e YouTuber 🏃‍♂️",
  bio: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado, todos são bem-vindos nessa jornada!",
  location: "São José do Rio Preto - SP",
  timeweek: "Nascido em 23/05/1993 | 61kg | 1.80m",
  locationLink: "https://maps.app.goo.gl/SaoJoseDoRioPreto",
  email: "contato@abnerssantana.com",
  items: GridItems,
} as const;