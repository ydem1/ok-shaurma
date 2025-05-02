import { Link } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";
import logo from "src/assets/images/ava.jpg";

const LOGO_IMAGE_ALT_TEXT = "Bavorovsky Vadym";

export const Logo = () => (
  <Link className="" to={PATHNAMES.HOME}>
    <img className="w-10 rounded-full" src={logo} alt={LOGO_IMAGE_ALT_TEXT} />
  </Link>
);
