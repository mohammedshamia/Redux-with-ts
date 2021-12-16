import { object, string, SchemaOf } from "yup";
import { IAddItem } from "../@types/validation";

export const addItemSchema = (): SchemaOf<IAddItem> => {
  return object().shape({
    value: string().required(),
  });
};
