import { createPalette } from "../palette";
const { blue } = createPalette();
export const MuiInputBase = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      border: "1px solid",
      borderColor: blue[100],
    },
  },
};
