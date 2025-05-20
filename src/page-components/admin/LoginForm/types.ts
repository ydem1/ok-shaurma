import { z } from "zod";
import { LOGIN_FORM_VALIDATION_SCHEMA } from "./constants";

export interface ILoginFormValues {
  email: string;
  password: string;
}

export type LoginFormSchema = z.infer<typeof LOGIN_FORM_VALIDATION_SCHEMA>;
