import { z } from "zod";

export const trainingInfoSchema = z.object({
  timeInfo: z
    .number()
    .gte(0, {
      message: "Wybierz opcję",
    })
    .lte(2, {
      message: "Wybierz opcję",
    }),
  equipmentInfo: z
    .number()
    .gte(0, {
      message: "Wybierz opcję",
    })
    .lte(2, {
      message: "Wybierz opcję",
    }),
  goalInfo: z
    .number()
    .gte(0, {
      message: "Wybierz opcję",
    })
    .lte(2, {
      message: "Wybierz opcję",
    }),
  extraGoalInfo: z
    .number()
    .gte(0, {
      message: "Wybierz opcję",
    })
    .lte(2, {
      message: "Wybierz opcję",
    }),
  houseEquipment: z.boolean().array().length(4).optional(),
});
