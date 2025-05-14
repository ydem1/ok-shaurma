import { IconName } from "./name";

export interface ILink {
  id: number;
  label?: string;
  href: string;
  icon?: IconName;
}
