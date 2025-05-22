import { ILink } from "src/@types/link";

export const SOCIAL_LINKS = (
  instagram_link: string,
  tik_tok_link: string
): ILink[] => [
  {
    id: 1,
    // href: "https://www.instagram.com/ok_shawarma1/",
    href: instagram_link,
    icon: "instagram",
    label: "Instagram",
  },
  {
    id: 2,
    icon: "tik-tok",
    // href: "https://www.tiktok.com/@_ok_shaurma11",
    href: tik_tok_link,
    label: "Tik Tok",
  },
];
