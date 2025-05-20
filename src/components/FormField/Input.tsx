import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";
import { IFormField } from "src/@types/form";
import { FormField } from ".";
import { TEXT_INPUT_STYLE_VARIANTS } from "./constants";
import { InputVariants, InputWheel } from "./types";

export const Input: FC<IFormField> = ({
  name,
  type,
  label,
  variant = InputVariants.PRIMARY,
  className,
  placeholder,
  fieldClassName,
  labelClassName,
  readOnly,
}) => {
  const {
    register,
    formState: { errors, isSubmitted },
    getValues,
  } = useFormContext();

  const value = getValues(name);
  const error = errors?.[name]?.message as string | undefined;
  const isShownError = Boolean(error && isSubmitted);

  const handleWheel = (e: InputWheel) => {
    if (type === "number") {
      e.currentTarget.blur();
    }
  };

  return (
    <FormField
      label={label}
      error={error}
      className={fieldClassName}
      isShownError={isShownError}
      labelClassName={labelClassName}
      labelFor={name}
    >
      <input
        id={name}
        className={cn(TEXT_INPUT_STYLE_VARIANTS[variant], className)}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        defaultValue={value}
        {...register(name)}
        onWheel={handleWheel}
      />
    </FormField>
  );
};
