import { ThemeColor } from "@/config/theme-config";
import { SocialIconName, ProjectIconName } from "@/config/icons-config";

export type GridItemLayout = "1x2" | "1x6" | "2x1" | "2x2" | "2x4" | "2x6" | "2x8";
export type GridItemType = "social" | "equipment" | "mentor" | "project" | "featured-videos";

export type EquipmentItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  description?: string;
  color?: string;
  colorDark?: string;
  backgroundColor?: ThemeColor;
  colorScheme?: string; // Reference to a predefined color scheme
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  price?: string;
  oldPrice?: string;
  stars?: number;
  equipments?: EquipmentItem[];
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
    colorScheme: "youtube", // Using predefined scheme
    buttonTitle: "Inscreva-se",
    buttonLink: "https://www.youtube.com/@abnerssantana",
    buttonSecondaryText: "5.6K",
  },
  {
    layout: "2x6",
    type: "featured-videos",
    title: "Vídeos em Destaque",
    description: "Os melhores conteúdos do canal para você começar",
    backgroundColor: {
      light: "#FFF4F4",
      dark: "#1F1F1F"
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
    layout: "2x2",
    type: "social",
    title: "Strava",
    icon: "strava",
    description: "Acompanhe minha jornada diária nas corridas",
    buttonTitle: "Seguir",
    buttonLink: "https://strava.com/athletes/abnerssantana",
    buttonSecondaryText: "@abnerssantana",
    colorScheme: "strava", // Using predefined scheme
  },
  {
    layout: "2x2",
    type: "social",
    title: "Magic Training - Sua plataforma de treinos",
    description:
      "Transforme sua corrida com planos de treinamento gratuitos e personalizados, que combinam ciência e experiência.",
    icon: "magic",
    colorScheme: "magic", // Using predefined scheme
    buttonTitle: "Acessar",
    buttonLink: "https://magictraining.run",
    buttonSecondaryText: "",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Calculadora de Ritmos",
    icon: "calc",
    description: "Descubra seus ritmos ideais e zonas de frequência cardíaca para otimizar seus treinos de corrida.",
    colorScheme: "calc", // Using predefined scheme
    buttonTitle: "Calcular",
    buttonLink: "https://magictraining.run/calculadora",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Quer um site como este?",
    icon: "code",
    description: "Desenvolvimento de sites personalizados com design moderno e responsivo. Transforme sua presença online!",
    colorScheme: "code", // Using predefined scheme
    buttonTitle: "Fale Comigo",
    buttonLink: "https://api.whatsapp.com/send?phone=17992149963",
    buttonSecondaryText: "",
  },
  /* Additional items would go here */
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    description: "Acompanhe minha jornada diária nas corridas",
    colorScheme: "instagram", // Using predefined scheme
    buttonTitle: "Seguir",
    buttonLink: "https://www.instagram.com/abnerssantana/",
    buttonSecondaryText: "@abnerssantana",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "vivendo a corrida",
    colorScheme: "discord", // Using predefined scheme
    buttonTitle: "Conectar",
    buttonLink: "https://discord.gg/pGcDZjhRry",
    buttonSecondaryText: "",
  },
  {
    layout: "1x2", 
    type: "social",
    title: "Github",
    icon: "github",
    username: "@abnerssantana",
    colorScheme: "github", // Using predefined scheme
    buttonTitle: "Seguir",
    buttonLink: "https://github.com/abnerssantana",
  },
];

export const siteConfig = {
  creator: "Abner Santana",
  title: "Seu Alienígena Favorito 👽❤️✌️",
  bio: "Compartilhando conhecimento sobre corrida de rua, treinos e experiências. Do iniciante ao avançado, todos são bem-vindos nessa jornada!",
  location: "São José do Rio Preto - SP",
  timeweek: "Nascido em 1993 | 62kg | 1.80m",
  locationLink: "https://maps.app.goo.gl/SaoJoseDoRioPreto",
  email: "abnerss@outlook.com",
  items: GridItems,
} as const;