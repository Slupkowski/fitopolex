import { z } from "zod";

export const personalInfoSchema = z.object({
  gender: z.enum(["female", "male"]),
  age: z
    .number()
    .gte(13, { message: "Wprowadź poprawny wiek" })
    .lte(100, { message: "Wprowadź poprawny wiek" }),
  height: z
    .number()
    .gte(100, { message: "Wprowadź poprawny wzrost" })
    .lte(230, { message: "Wprowadź poprawny wzrost" }),
  weight: z
    .number()
    .gte(40, { message: "Wprowadź poprawną wagę" })
    .lte(200, { message: "Wprowadź poprawną wagę" }),
});
