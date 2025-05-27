import { REQUIRED_VALIDATION_SCHEMA } from "src/validation";
import * as Yup from "yup";
import { IAddExtraFormValues } from "./types";

export const ADD_EXTRA_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  name: REQUIRED_VALIDATION_SCHEMA("Назва обов'язкова"),
});

export const INITIAL_ADD_EXTRA_FORM_VALUES: IAddExtraFormValues = {
  name: "",
  price: "",
};
