import { FC } from "react";
import cn from "classnames";

// TODO add api
const phone = "380688505090";

interface Props {
  className?: string;
}

export const Phone: FC<Props> = ({ className }) => (
  <a
    href={`tel:${phone}`}
    className={cn("text-base font-bold hover:underline", className)}
  >
    +38 068 850 5090
  </a>
);
