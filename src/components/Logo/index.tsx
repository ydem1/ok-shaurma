import { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { PATHNAMES } from "src/constants/routes";
import logo from "src/assets/images/logo.png";

const LOGO_IMAGE_ALT_TEXT = "ОК Шаурма";

interface Props {
  className?: string;
  isSmall?: boolean;
}

export const Logo: FC<Props> = ({ className, isSmall }) => (
  <Link
    className={cn(className, {
      "bg-black-primaty flex w-max items-center rounded-xl": !isSmall,
    })}
    to={PATHNAMES.HOME}
  >
    <img className="w-20" src={logo} alt={LOGO_IMAGE_ALT_TEXT} />

    {!isSmall && (
      <span className="pr-4 text-3xl uppercase text-white-base">Шаурма</span>
    )}
  </Link>
);
