// TODO add api
import { FC } from "react";
import cn from "classnames";

const phone = "380942564545";

interface Props {
  className?: string;
}

export const CompanyInfo: FC<Props> = ({ className }) => (
  <div className={cn("flex gap-7", className)}>
    <span className="hidden text-base font-bold xl:block">Хмельницький</span>

    <a
      href={`tel:${phone}`}
      className="hidden text-base font-bold hover:underline xs:block"
    >
      +38 094 256 45 45
    </a>
  </div>
);
