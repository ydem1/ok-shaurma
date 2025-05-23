import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";
import { IFormField } from "src/@types/form";
import { FormField } from ".";
import { TEXT_INPUT_STYLE_VARIANTS } from "./constants";
import { InputVariants } from "./types";

export const InputFile = forwardRef<HTMLInputElement, Omit<IFormField, "type">>(
  (
    {
      name,
      label,
      variant = InputVariants.PRIMARY,
      className,
      placeholder,
      fieldClassName,
      labelClassName,
    },
    ref
  ) => {
    const {
      register,
      formState: { errors, isSubmitted },
      setValue,
    } = useFormContext();

    const error = errors?.[name]?.message as string | undefined;
    const isShownError = Boolean(error && isSubmitted);

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
          type="file"
          accept="image/*"
          placeholder={placeholder}
          className={cn(TEXT_INPUT_STYLE_VARIANTS[variant], className)}
          {...register(name)}
          onChange={(e) => {
            const file = e.target.files?.[0];
            setValue(name, file ?? undefined);
          }}
          ref={ref}
        />
      </FormField>
    );
  }
);

InputFile.displayName = "InputFile";
