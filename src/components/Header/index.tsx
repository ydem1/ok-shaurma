import { Logo } from "../Logo";
import { CompanyInfo } from "./CompanyInfo";
import { SocialLinks } from "./SocialLinks";

export const Header = () => (
  <header className="shadow-custom bg-white-base">
    <div className="container flex h-24 items-center justify-between xl:grid xl:grid-cols-3">
      <CompanyInfo className="hidden xl:flex" />

      <div className="flex xl:justify-center">
        <Logo />
      </div>

      <div className="flex items-center gap-3.5 xl:justify-end">
        <CompanyInfo className="xl:hidden" />
        <SocialLinks />
      </div>
    </div>
  </header>
);
