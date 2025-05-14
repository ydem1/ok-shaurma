import { Logo } from "../Logo";
import { CompanyInfo } from "./CompanyInfo";
import { SocialLinks } from "./SocialLinks";

export const Header = () => (
  <header className="shadow-custom bg-white-base">
    <div className="container flex h-24 items-center xl:grid xl:grid-cols-3">
      <CompanyInfo className="hidden xl:flex" />

      <div className="flex xl:justify-center">
        <Logo />
      </div>

      <div className="flex w-full items-center justify-end gap-3.5">
        <CompanyInfo className="xl:hidden" />
        <SocialLinks />
      </div>
    </div>
  </header>
);
