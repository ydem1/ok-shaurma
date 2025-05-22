import { FC } from "react";
import cn from "classnames";
import { IContact } from "src/@types/contact";

export const formatPhoneNumber = (phone: string): string => {
  if (!phone || phone.length !== 12) return phone;

  const country = phone.slice(0, 2); // 38
  const operator = phone.slice(2, 5); // 068
  const firstPart = phone.slice(5, 8); // 850
  const secondPart = phone.slice(8, 10); // 50
  const thirdPart = phone.slice(10, 12); // 90

  return `+${country} ${operator} ${firstPart} ${secondPart} ${thirdPart}`;
};

interface Props {
  className?: string;
  contact: IContact;
}

export const Phone: FC<Props> = ({
  className,
  contact: {
    phone_first_label,
    phone_first_number,
    phone_second_label,
    phone_second_number,
  },
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-3">
      <a
        href={`tel:${phone_first_number}`}
        className={cn("text-sm font-bold hover:underline", className)}
      >
        {formatPhoneNumber(phone_first_number)}
      </a>

      <span className="text-sm">{`(${phone_first_label})`}</span>
    </div>

    <div className="flex items-center gap-3">
      <a
        href={`tel:${phone_second_number}`}
        className={cn("text-sm font-bold hover:underline", className)}
      >
        {formatPhoneNumber(phone_second_number)}
      </a>

      <span className="text-sm">{`(${phone_second_label})`}</span>
    </div>
  </div>
);
