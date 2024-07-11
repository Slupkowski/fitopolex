import { z } from "zod";

export const trainingInfoSchema = z.object({
  timeInfo: z.number().gte(0).lte(2),
  equipmentInfo: z.number().gte(0).lte(2),
  goalInfo: z.number().gte(0).lte(2),
  extraGoalInfo: z.number().gte(0).lte(2),
  houseEquipment: z.boolean().array().length(4).optional(),
});
