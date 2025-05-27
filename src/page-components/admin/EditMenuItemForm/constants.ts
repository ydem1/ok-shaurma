// import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { IEditIMenuItemFormValues } from "./types";

export const EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  // name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
  // description: REQUIRED_VALIDATION_SCHEMA("Опис обов'язковий"),
  // price: REQUIRED_VALIDATION_SCHEMA("Ціна обов'язкова"),
  // weight: REQUIRED_VALIDATION_SCHEMA("Вага обов'язкова"),
});

export const INITIAL_EDIT_MENU_ITEM_FORM_VALUES: IEditIMenuItemFormValues = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image: null,
};
