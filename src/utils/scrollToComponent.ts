import { RefObject } from "react";

export const scrollToComponent = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
