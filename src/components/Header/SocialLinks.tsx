import { FC } from "react";
import { IContact } from "src/@types/contact";
import { Icon } from "../Icon";
import { SOCIAL_LINKS } from "./constants";

export const SocialLinks: FC<IContact> = ({ instagram_link, tik_tok_link }) => (
  <ul className="hidden justify-end gap-3.5 md:flex">
    {SOCIAL_LINKS(instagram_link, tik_tok_link).map(({ id, icon, href }) => (
      <li key={id}>
        <a
          className="flex size-11 items-center justify-center rounded-full border border-gray-base transition-all duration-200 hover:opacity-85"
          href={href}
          target="_blank"
        >
          <Icon className="size-6" name={icon} />
        </a>
      </li>
    ))}
  </ul>
);
