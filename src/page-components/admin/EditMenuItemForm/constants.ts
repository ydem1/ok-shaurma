import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import { z } from "zod";
import { IEditIMenuItemFormValues } from "./types";

export const EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA = z.object({
  name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
  description: REQUIRED_VALIDATION_SCHEMA("Опис обов'язковий"),
  price: REQUIRED_VALIDATION_SCHEMA("Ціна обов'язкова"),
  weight: REQUIRED_VALIDATION_SCHEMA("Вага обов'язкова"),
  image: z.any().refine((file) => file instanceof File || file === undefined, {
    message: "Фото повинно бути файлом",
  }),
});

export const INITIAL_EDIT_MENU_ITEM_FORM_VALUES: IEditIMenuItemFormValues = {
  name: "",
  description: "",
  price: "",
  weight: "",
  image: undefined,
};
