import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import { z } from "zod";
import { IAddIMenuItemFormValues } from "./types";

export const ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA = z.object({
  name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
  description: REQUIRED_VALIDATION_SCHEMA("Опис обов'язковий"),
  price: REQUIRED_VALIDATION_SCHEMA("Ціна обов'язкова"),
  weight: REQUIRED_VALIDATION_SCHEMA("Вага обов'язкова"),
  image: REQUIRED_VALIDATION_SCHEMA("Фото обов'язкове"),
});

export const INITIAL_ADD_MENU_ITEM_FORM_VALUES: IAddIMenuItemFormValues = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image: "",
};
