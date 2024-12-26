export type GridItemLayout =
  | "1x2"
  | "1x6"
  | "2x1"
  | "2x2"
  | "2x4"
  | "2x6"
  | "2x8";
  export type GridItemType = "social" | "equipment" | "mentor" | "project" | "featured-videos";
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
  username?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@abnerssantana",
    description:
      "Dicas valiosas de treinamento, orientações práticas e insights sobre como melhorar seu desempenho na corrida, além de informações sobre como se preparar e ter sucesso em provas de corrida.",
    color: "#FF0000",
    buttonTitle: "Inscreva-se",
    buttonLink: "https://www.youtube.com/@abnerssantana",
    buttonSecondaryText: "5.6K",
    backgroundColor: {
      light: "rgb(255, 240, 240)",
      dark: "rgb(23, 23, 23)",
    },
  },
  {
    layout: "2x2",
    type: "social",
    title: "Strava",
    icon: "strava",
    description: "Acompanhe minha jornada diária nas corridas",
    buttonTitle: "Seguir",
    buttonLink: "https://strava.com/athletes/abnerssantana",
    buttonSecondaryText: "@abnerssantana",
    color: "#FF5722",
    backgroundColor: {
      light: "#FBE9E7",
      dark: "#391a04",
    },
  },
  {
    layout: "2x2",
    type: "social",
    title: "Magic Training - Sua plataforma de treinos",
    description:
      "Transforme sua corrida com planos de treinamento gratuitos e personalizados, que combinam ciência e experiência.",
    icon: "magic",
    buttonTitle: "Acessar",
    buttonLink: "https://magictraining.run",
    buttonSecondaryText: "",
    color: "#0073cc",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Quer um site como este?",
    icon: "code",
    description: "Desenvolvimento de sites personalizados com design moderno e responsivo. Transforme sua presença online!",
    buttonTitle: "Fale Comigo",
    buttonLink: "https://api.whatsapp.com/send?phone=17992149963",
    buttonSecondaryText: "",
    color: "rgb(32, 72, 179)",
    backgroundColor: {
      light: "#F0F9FF",
      dark: "#082F49",
    },
  },
  {
    layout: "2x6",
    type: "equipment",
    title: "Conquistas e Recordes Pessoais",
    description: "Evolução constante e dedicação aos treinos",
    images: ["/2024/1.jpg", "/2024/2.jpg", "/2024/3.jpg", "/2024/4.jpg"],
    equipments: [
      { title: "5K - 14:27" },
      { title: "10K - 30:49" },
      { title: "21K - 1:11:23" },
      { title: "42K - 2:30:44" },
    ],
  },
  {
    layout: "2x6",
    type: "equipment",
    icon: "shop",
    buttonTitle: "Comprar Agora",
    buttonLink: "https://www.vivendoacorrida.com",
    buttonSecondaryText: "",
    color: "#65b741",
    title: "Loja Vivendo a Corrida",
    description: "Corra com estilo e ajude a manter meu trabalho!",
    images: ["/loja/tshirt-1.jpg", "/loja/tshirt-2.jpg", "/loja/tshirt-3.jpg", "/loja/tshirt-4.jpg"],
    equipments: [
      { title: "Camisetas Exclusivas" },
      { title: "Apoie o Magic" },
      { title: "Apoie o Canal" },
    ],
  },
  {
    layout: "2x8",
    type: "featured-videos",
    title: "Vídeos em Destaque",
    description: "Os melhores conteúdos do canal para você começar",
    backgroundColor: {
      light: "#FFF4F4",
      dark: "#1F1F1F"
    },
  },
  {
    layout: "1x6",
    type: "equipment",
    title: "Treino intervalado na pista",
    description: "O treino intervalado é uma abordagem eficaz para melhorar",
    video: "/pista.mov",
    buttonLink: "https://www.youtube.com/watch?v=Uuv2waG18e8",
  },
  {
    layout: "1x6",
    type: "equipment",
    title: "Dicas Valiosas de Treinamento",
    description: "Aprenda técnicas avançadas e melhore seu desempenho",
    images: ["/trirex.jpg"],
    buttonLink: "https://www.youtube.com/playlist?list=PLv-nnKVPAhbN6tgKCdE4u4eX313VvkUbV",
  },
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    description: "Conecte-se comigo para oportunidades profissionais e networking. Infraestrutura e segurança de TI.",
    buttonTitle: "Conectar",
    buttonLink: "https://www.linkedin.com/in/abnerssantana",
    buttonSecondaryText: "",
    color: "#0077B5",
    backgroundColor: {
      light: "#E8F4F9",
      dark: "#003E5E",
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
    color: "rgb(109 40 217 / var(--tw-bg-opacity, 1))",
    backgroundColor: {
      light: "rgb(237 233 254 / var(--tw-bg-opacity, 1))",
      dark: "rgb(196 181 253 / var(--tw-bg-opacity, 1))",
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    buttonLink: "https://youtu.be/ZfGx3EaY0qs",
    buttonSecondaryText: "",
    color: "#65b741",
    title: "Suplementos que eu uso",
    description: "Suplementos que todo corredor precisa conhecer!",
    images: ["/videos/suplementos.jpg"],
    equipments: [
      { title: "Creatina" },
      { title: "BCAA" },
      { title: "Beta-alanina" },
      { title: "Hipercalórico" },
    ],
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "vivendo a corrida",
    buttonTitle: "Conectar",
    buttonLink: "https://discord.gg/pGcDZjhRry",
    buttonSecondaryText: "",
    color: "#3a0ca3",
    backgroundColor: {
      light: "#c4c7ff",
      dark: "#c4c7ff",
    },
  },
  {
    layout: "1x2", 
    type: "social",
    title: "Github",
    icon: "github",
    username: "@abnerssantana",
    buttonTitle: "Seguir",
    buttonLink: "https://github.com/abnerssantana",
    color: "#070707",
    backgroundColor: {
      light: "#dee2e6",
      dark: "#323232",
    },
  },
];

export const siteConfig = {
  creator: "Abner Santana",
  title: "Seu Alienígena Favorito ❤️👽✌️",
  bio: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado, todos são bem-vindos nessa jornada!",
  location: "São José do Rio Preto - SP",
  timeweek: "Nascido em 1993 | 62kg | 1.80m",
  locationLink: "https://maps.app.goo.gl/SaoJoseDoRioPreto",
  email: "abnerss@outlook.com",
  items: GridItems,
} as const;
