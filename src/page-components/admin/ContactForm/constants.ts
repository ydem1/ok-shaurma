import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { IContactFormValues } from "./types";

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  tik_tok_link: REQUIRED_VALIDATION_SCHEMA("Посилання на тік ток обов'язкове"),
  instagram_link: REQUIRED_VALIDATION_SCHEMA("Посилання на інстаграм обов'язкове"),
  phone_first_label: REQUIRED_VALIDATION_SCHEMA("Назва заклада для першого телефона обов'язкова"),
  phone_first_number: REQUIRED_VALIDATION_SCHEMA("Номер першого телефона обов'язкова"),
  phone_second_label: REQUIRED_VALIDATION_SCHEMA("Назва заклада для другого телефона обов'язкова"),
  phone_second_number: REQUIRED_VALIDATION_SCHEMA("Номер другого телефона обов'язкова"),
  schedule: REQUIRED_VALIDATION_SCHEMA("Розклад обов'язковий"),
  address: REQUIRED_VALIDATION_SCHEMA("Адреса обов'язкова"),
});

export const INITIAL_CONTACT_FORM_VALUES: IContactFormValues = {
  tik_tok_link: "",
  instagram_link: "",
  phone_first_label: "",
  phone_first_number: "",
  phone_second_label: "",
  phone_second_number: "",
  schedule: "",
  address: "",
};
