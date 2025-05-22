import { z } from "zod";
import { ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA } from "./constants";

export interface IAddIMenuItemFormValues {
  name: string;
  description: string;
  price: string;
  weight: string;
  image: File;
}

export type AddIMenuItemFormSchema = z.infer<
  typeof ADD_MENU_ITEM_FORM_VALIDATION_SCHEMA
>;
