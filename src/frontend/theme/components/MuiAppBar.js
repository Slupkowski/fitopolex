import { createPalette } from "../palette";

const { blue } = createPalette();

export const MuiAppBar = {
  styleOverrides: {
    root: {
      backgroundColor: blue[50],
    },
  },
};
