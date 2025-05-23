import { HTMLInputTypeAttribute } from "react";
import { InputVariants } from "src/components/FormField/types";

type InputType = Extract<
  HTMLInputTypeAttribute,
  "text" | "password" | "email" | "number" | "tel"
>;

export interface IFormField {
  name: string;
  label?: string;
  type?: InputType;
  placeholder?: string;
  className?: string;
  fieldClassName?: string;
  labelClassName?: string;
  variant?: InputVariants;
  readOnly?: boolean;
}

export interface IOptionSelect {
  id: number;
  value: string | number;
  label: string;
}

export type OptionValue = IOptionSelect["value"];

export type SetOptionSelect = (option: IOptionSelect) => void;
export type SetOptionValue = (value: OptionValue) => void;
