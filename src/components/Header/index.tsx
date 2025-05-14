import { Logo } from "../Logo";
import { CompanyInfo } from "./CompanyInfo";
import { SocialLinks } from "./SocialLinks";

export const Header = () => (
  <header className="shadow-custom bg-white-base">
    <div className="container grid h-24 grid-cols-3 items-center">
      <CompanyInfo />

      <div className="flex justify-center">
        <Logo />
      </div>

      <SocialLinks />
    </div>
  </header>
);
