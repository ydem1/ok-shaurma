import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { IEditExtraFormValues } from "./types";

export const EDIT_EXTRA_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
});

export const INITIAL_EDIT_EXTRA_FORM_VALUES: IEditExtraFormValues = {
  name: "",
  price: "",
};
