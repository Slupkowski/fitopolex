import { z } from "zod";

export const trainingInfoSchema = z.object({
  timeInfo: z.enum([0, 1, 2]),
  equipmentInfo: z.enum([0, 1, 2]),
  goalInfo: z.enum([0, 1, 2]),
  extraGoalInfo: z.enum([0, 1, 2]),
  //zamiast enuma number min 0 max 2
});
