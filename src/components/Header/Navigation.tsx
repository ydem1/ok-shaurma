import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "./constants";

export const Navigation = () => (
  <nav>
    <ul className="flex gap-12">
      {NAVIGATION_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          <Link className="text-2xl font-medium" to={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
