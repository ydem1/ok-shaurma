import { ILink } from "src/@types/link";

export const SOCIAL_LINKS = (
  instagram_link: string,
  tik_tok_link: string
): ILink[] => [
  {
    id: 1,
    href: instagram_link,
    icon: "instagram",
    label: "Instagram",
  },
  {
    id: 2,
    icon: "tik-tok",
    href: tik_tok_link,
    label: "Tik Tok",
  },
];
