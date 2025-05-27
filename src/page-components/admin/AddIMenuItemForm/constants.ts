// import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { IAddIMenuItemFormValues } from "./types";

export const ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  // name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
  // description: REQUIRED_VALIDATION_SCHEMA("Опис обов'язковий"),
  // price: REQUIRED_VALIDATION_SCHEMA("Ціна обов'язкова"),
  // weight: REQUIRED_VALIDATION_SCHEMA("Вага обов'язкова"),
  image: Yup.mixed<File>()
    .required("Фото обов’язкове")
    .test("is-file", "Фото обов’язкове", (value) => value instanceof File),
});

export const INITIAL_ADD_MENU_ITEM_FORM_VALUES: IAddIMenuItemFormValues = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image: null,
};
