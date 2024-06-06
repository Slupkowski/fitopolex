import { createPalette } from "../palette";
const { blue, neutral } = createPalette();
export const MuiInputBase = {
  styleOverrides: {
    root: {
      outline: "none",
    },
    input: {
      color: neutral[800],
    },
  },
};
