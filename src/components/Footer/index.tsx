import { Logo } from "../Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <footer className="rounded-t-30 p-7.5 border border-gray-base bg-white-base">
    <div className="container flex items-center justify-between py-6">
      <Logo />
      <SocialMediaLinks />
    </div>
  </footer>
);
