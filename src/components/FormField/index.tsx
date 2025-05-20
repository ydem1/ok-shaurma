import React, { FC, ReactNode } from "react";
import cn from "classnames";

const DEFAULT_ERROR_CLASSNAME =
  "absolute bottom-0 right-0 py-0.5 z-10 translate-y-full text-10 font-semibold text-red-500"; //text-red-500 - temp

interface Props {
  children: ReactNode;
  className?: string;
  label?: string;
  labelFor?: string;
  labelClassName?: string;
  isShownError?: boolean;
  error?: string;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  label,
  labelFor,
  isShownError,
  error,
}) => {
  return (
    <div
      className={cn(
        "border-black-medium relative flex items-center gap-2.5 border-b dark:border-white-base",
        className
      )}
    >
      {label && (
        <label
          htmlFor={labelFor}
          className={cn(
            "text-nowrap text-xl font-normal uppercase dark:text-white-base",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      {children}
      {isShownError && <span className={DEFAULT_ERROR_CLASSNAME}>{error}</span>}
    </div>
  );
};
