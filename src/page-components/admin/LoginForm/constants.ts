import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { ILoginFormValues } from "./types";

export const LOGIN_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  email: REQUIRED_VALIDATION_SCHEMA("Логін обов'язковий"),
  password: REQUIRED_VALIDATION_SCHEMA("Пароль обов'язковий"),
});

export const INITIAL_LOGIN_FORM_VALUES: ILoginFormValues = {
  email: "",
  password: "",
};
