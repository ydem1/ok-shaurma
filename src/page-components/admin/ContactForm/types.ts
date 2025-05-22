import { z } from "zod";
import { CONTACT_FORM_VALIDATION_SCHEMA } from "./constants";

export interface IContactFormValues {
  tik_tok_link: string;
  instagram_link: string;
  phone_first_label: string;
  phone_first_number: string;
  phone_second_label: string;
  phone_second_number: string;
  schedule: string;
  address: string;
}

export type ContactFormValuesSchema = z.infer<
  typeof CONTACT_FORM_VALIDATION_SCHEMA
>;
