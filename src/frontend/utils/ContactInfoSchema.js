import { z } from "zod";

export const contactInfoSchema = z.object({
  firstName: z.string().max(30),
  mailName: z.string().max(30),
  agreeContact: z.boolean(),
  agreeSafety: z.boolean(),
});
