import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ILink {
  id: number;
  label?: string;
  href: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}
