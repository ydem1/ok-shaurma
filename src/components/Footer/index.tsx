import { Logo } from "../Logo";
import { SocialLinks } from "./SocialLinks";
import { WorkSchedule } from "./WorkSchedule";

export const Footer = () => (
  <footer className="shadow-custom bg-white-base py-10">
    <div className="container flex justify-between">
      <div className="flex gap-12">
        <Logo />
        <SocialLinks />
      </div>

      <WorkSchedule />
    </div>
  </footer>
);
