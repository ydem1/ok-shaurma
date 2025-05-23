import { z } from "zod";
import { EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA } from "./constants";

export interface IEditIMenuItemFormValues {
  name: string;
  description: string;
  price: string;
  weight: string;
  image: File;
}

export type IEditMenuItemFormSchema = z.infer<
  typeof EDIT_MENU_ITEM_FORM_VALIDATION_SCHEMA
>;
