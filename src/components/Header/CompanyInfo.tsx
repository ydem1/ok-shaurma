import { FC } from "react";
import cn from "classnames";
import { IContact } from "src/@types/contact";
import { Phone } from "../Phone";

interface Props {
  className?: string;
  contact: IContact;
}

export const CompanyInfo: FC<Props> = ({ className, contact }) => (
  <div className={cn("flex items-center gap-7", className)}>
    {/* <span className="hidden text-base font-bold xl:block">Хмельницький</span> */}
    {contact._id && <Phone contact={contact} />}
  </div>
);
