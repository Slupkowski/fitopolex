import { z } from "zod";
export const buyerFormSchema = z.object({
  firstName: z
    .string()
    .max(30, { message: "Imię nie powinno być dłuższe niż 30 znaków" })
    .min(3, { message: "Imię nie powinno być krótsze niż 3 znaki" }),
  lastName: z
    .string()
    .max(30, { message: "Nazwisko nie powinno być dłuższe niż 30 znaków" })
    .min(3, { message: "Nazwisko nie powinno być krótsze niż 3 znaki" }),
  mailName: z
    .string({ message: "Wprowadź email" })
    .email({ message: "Wprowadzony email nie jest poprawny" }),

  phoneNumber: z
    .number({ message: "Wprowadź swój numer kontaktowy" })
    .gte(100000000, {
      message: "Numer telefonu nie może być krótszy niż 9 cyfr",
    })
    .lte(999999999, {
      message: "Numer telefonu nie może być dłuższy niż 9 cyfr",
    }),
  agreeContact: z.boolean(),
  agreePhone: z.boolean(),
});
