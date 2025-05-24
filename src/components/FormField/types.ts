import { ChangeEvent, WheelEvent } from 'react';

// alias
export type InputChange = ChangeEvent<HTMLInputElement>;
export type InputWheel = WheelEvent<HTMLInputElement>;

export type TextareaChange = ChangeEvent<HTMLTextAreaElement>;
export type TextareaWheel = WheelEvent<HTMLTextAreaElement>;

export enum InputVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
