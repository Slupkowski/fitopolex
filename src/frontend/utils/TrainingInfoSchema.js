import { z } from "zod";

export const trainingInfoSchema = z.object({
  timeInfo: z
    .number()
    .gte(0, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    })
    .lte(2, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    }),
  equipmentInfo: z
    .number()
    .gte(0, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    })
    .lte(2, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    }),
  goalInfo: z
    .number()
    .gte(0, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    })
    .lte(2, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    }),
  extraGoalInfo: z
    .number()
    .gte(0, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    })
    .lte(2, {
      message:
        "nienawidze tego pierrdolonego gówna błagam niech już w końcu zdechne",
    }),
  houseEquipment: z.boolean().array().length(4).optional(),
});
