import { z } from "zod";

export const contactInfoSchema = z.object({
  firstName: z
    .string()
    .max(30, { message: "Imię nie powinno być dłuższe niż 30 znaków" })
    .min(3, { message: "Imię nie powinno być krótsze niż 3 znaki" }),
  mailName: z
    .string({ message: "Wprowadź email" })
    .email({ message: "Wprowadzony email nie jest poprawny" }),
  agreeContact: z.boolean(),
  agreeSafety: z.boolean(),
});
