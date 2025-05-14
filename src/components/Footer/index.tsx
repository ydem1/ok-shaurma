import { Logo } from "../Logo";
import { SocialLinks } from "./SocialLinks";
import { WorkSchedule } from "./WorkSchedule";

export const Footer = () => (
  <footer className="shadow-custom bg-white-base py-10">
    <div className="container flex flex-col justify-between gap-y-10 xl:flex-row">
      <div className="flex flex-col gap-5 md:flex-row xl:gap-12">
        <Logo />
        <SocialLinks />
      </div>

      <WorkSchedule />
    </div>
  </footer>
);
