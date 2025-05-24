import React, { FC } from "react";
import cn from "classnames";
import { Sizes } from "src/@types/sizes";
import { LOADER_SIZES } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({ size = Sizes.XS, className }) => (
  <div
    className={cn(
      "border-gray-base border-t-black-primaty mx-auto animate-spin rounded-full border-2",
      LOADER_SIZES[size],
      className
    )}
  />
);
