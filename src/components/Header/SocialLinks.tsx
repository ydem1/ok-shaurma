import { Icon } from "../Icon";
import { SOCIAL_LINKS } from "./constants";

export const SocialLinks = () => (
  <ul className="flex justify-end gap-3.5">
    {SOCIAL_LINKS.map(({ id, icon, href }) => (
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
