import cn from "classnames";
import { ButtonVariants } from "./types";

const DEFAULT_BUTTON_CLASSNAME = "rounded-xl p-2 text-sm";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-black-primaty text-white-base hover:brightness-125",
    DEFAULT_BUTTON_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-white-base text-black-primaty border border-black-primaty/20 hover:bg-black-primaty/5",
    DEFAULT_BUTTON_CLASSNAME
  ),
};
