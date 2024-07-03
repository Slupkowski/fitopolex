import { z } from "zod";

export const personalInfoSchema = z.object({
  gender: z.enum(["female", "male"]),
  age: z.number(),
  height: z.number().gte(10, { message: "ogarnij sie" }),
  weight: z.number(),
});
