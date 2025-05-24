import { FC } from "react";
import { Icon } from "../Icon";
import { SOCIAL_LINKS } from "./constants";

interface Props {
  instagram_link: string;
  tik_tok_link: string;
}

export const SocialLinks: FC<Props> = ({ instagram_link, tik_tok_link }) => (
  <div>
    <span className="font-black">Ми у соцмережах</span>

    <ul className="mt-2.5 flex flex-col gap-3.5">
      {SOCIAL_LINKS(instagram_link, tik_tok_link).map(
        ({ id, icon, href, label }) => (
          <li key={id}>
            <a
              className="flex w-max items-center gap-2 transition-all duration-200 hover:opacity-85"
              href={href}
              target="_blank"
            >
              <Icon className="size-6" name={icon} />
              <span className="text-xs font-semibold">{label}</span>
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);
