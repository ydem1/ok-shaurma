import * as Yup from "yup";

export const REQUIRED_VALIDATION_SCHEMA = (message: string) =>
  Yup.string().required(message);
