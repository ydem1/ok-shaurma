import { z } from 'zod';

export const EMAIL_VALIDATION_SCHEMA = z
  .string()
  .min(2, 'Email is required')
  .email('Incorrect email');

export const PASSWORD_VALIDATION_SCHEMA = z
  .string()
  .min(6, 'Password must contain at least 6 characters');

export const REQUIRED_VALIDATION_SCHEMA = (message: string) => z.string().nonempty(message);

export const MIN_LENGTH_VALIDATION_SCHEMA = (min: number, message: string) => {
  return z.string().min(min, message);
};

