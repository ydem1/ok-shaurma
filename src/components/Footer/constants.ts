import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { ILink } from "src/@types/link";

export const SOCIAL_MEDIA_LINKS: ILink[] = [
  {
    id: 1,
    href: "https://github.com/ydem1",
    icon: GitHubIcon,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/vadym-bavorovskiy-146b19280/",
    icon: LinkedInIcon,
  },
  {
    id: 3,
    href: "https://t.me/vadymb14",
    icon: TelegramIcon,
  },
  {
    id: 4,
    href: "mailto:vadymbavorovskyi@gmail.com",
    icon: AlternateEmailIcon,
  },
  {
    id: 5,
    href: "https://www.instagram.com/_ydem_/",
    icon: InstagramIcon,
  },
];
