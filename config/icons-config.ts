import { IconType } from "react-icons";
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaYoutube, 
  FaDiscord, 
  FaGithub, 
  FaStrava, 
  FaCalculator,
  FaCode, 
  FaLinkedin,
  FaShoppingBag,
  FaPlay,
  FaMagic
} from "react-icons/fa";

import { 
  Timer, 
  Trophy, 
  Medal, 
  Footprints, 
  Baby, 
  ContactRound, 
  Heart, 
  Cake
} from "lucide-react";

// Social and functional icons using react-icons
export const socialIcons: Record<string, IconType> = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  youtube: FaYoutube,
  discord: FaDiscord,
  github: FaGithub,
  strava: FaStrava,
  linkedin: FaLinkedin,
  code: FaCode,
  calc: FaCalculator,
  magic: FaMagic,
  shop: FaShoppingBag,
  play: FaPlay
};

// Project icons using Lucide
export const projectIcons: Record<string, IconType> = {
  baby: Baby,
  contact: ContactRound,
  heart: Heart,
  cake: Cake
};

// Pattern icons for background
export const patternIcons = [
  [Footprints, Trophy, Medal, Timer],
  [Timer, Footprints, Trophy, Medal],
  [Medal, Timer, Footprints, Trophy],
  [Trophy, Medal, Timer, Footprints]
];

export type SocialIconName = keyof typeof socialIcons;
export type ProjectIconName = keyof typeof projectIcons;