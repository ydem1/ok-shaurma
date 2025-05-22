import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
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
    control,
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const allowedKeys = [
        "Backspace",
        "Tab",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
      ];
      const isDigit = /^\d$/.test(e.key);

      if (!isDigit && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  if (type === "file") {
    return (
      <FormField
        label={label}
        error={error}
        className={fieldClassName}
        isShownError={isShownError}
        labelClassName={labelClassName}
        labelFor={name}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, ref } }) => (
            <input
              id={name}
              type="file"
              accept="image/*"
              className={cn(TEXT_INPUT_STYLE_VARIANTS[variant], className)}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  onChange(file);
                }
              }}
              ref={ref}
            />
          )}
        />
      </FormField>
    );
  }

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
        disabled={readOnly}
        type={type}
        defaultValue={value}
        {...register(name)}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
      />
    </FormField>
  );
};
