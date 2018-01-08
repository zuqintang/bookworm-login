import { schema } from "normalizr";

export const setSchema = new schema.Entity("sets", {}, { idAttribute: "ID" });
