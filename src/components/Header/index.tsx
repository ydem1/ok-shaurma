import { FC } from "react";
import { IContact } from "src/@types/contact";
import { Logo } from "../Logo";
import { CompanyInfo } from "./CompanyInfo";
import { SocialLinks } from "./SocialLinks";

export const Header: FC<IContact> = ({ ...contact }) => (
  <header className="bg-white-base shadow-custom">
    <div className="container flex items-center justify-between py-2 xl:grid xl:grid-cols-3">
      <CompanyInfo className="hidden xl:flex" contact={contact} />

      <div className="flex xl:justify-center">
        <Logo />
      </div>

      <div className="flex items-center gap-3.5 xl:justify-end">
        <CompanyInfo className="xl:hidden" contact={contact} />
        <SocialLinks {...contact} />
      </div>
    </div>
  </header>
);
