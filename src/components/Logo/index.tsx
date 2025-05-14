import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import logo from "src/assets/images/logo.png";

const LOGO_IMAGE_ALT_TEXT = "ОК Шаурма";

export const Logo = () => (
  <Link to={PATHNAMES.HOME}>
    <img className="w-20" src={logo} alt={LOGO_IMAGE_ALT_TEXT} />
  </Link>
);
