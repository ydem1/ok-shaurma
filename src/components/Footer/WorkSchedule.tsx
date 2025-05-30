import { FC } from "react";
import { IContact } from "src/@types/contact";
import { Phone } from "../Phone";

export const WorkSchedule: FC<IContact> = ({
  schedule,
  address,
  ...contact
}) => (
  <p className="flex flex-col gap-3 xl:max-w-80">
    <Phone className="text-xl" contact={{ schedule, address, ...contact }} />
    <span className="text-xs">{schedule}</span>
    <span className="mt-2 text-sm text-gray-dark">{address}</span>
  </p>
);
