// TODO add api
import { FC } from "react";
import cn from "classnames";
import { Phone } from "../Phone";

interface Props {
  className?: string;
}

export const CompanyInfo: FC<Props> = ({ className }) => (
  <div className={cn("flex gap-7", className)}>
    <span className="hidden text-base font-bold xl:block">Хмельницький</span>
    <Phone className="hidden sm:block" />
  </div>
);
