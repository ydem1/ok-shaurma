import { FC } from "react";
import { IContact } from "src/@types/contact";
import { Logo } from "../Logo";
import { SocialLinks } from "./SocialLinks";
import { WorkSchedule } from "./WorkSchedule";

export const Footer: FC<IContact> = ({ ...contact }) => (
  <footer className="bg-white-base py-10 shadow-custom">
    <div className="container flex flex-col justify-between gap-y-10 xl:flex-row">
      <div className="flex flex-col gap-5 md:flex-row xl:gap-12">
        <Logo />
        <SocialLinks {...contact} />
      </div>

      <WorkSchedule {...contact} />
    </div>
  </footer>
);
