import { createPalette } from "../palette";
const { blue } = createPalette();
export const MuiButton = {
  styleOverrides: {
    root: {
      backgroundColor: blue[150],
      color: blue[50],
      fontWeight: 800,
      letterSpacing: "5px",
      border: "none",
      "&:hover": {
        border: "none",
        color: blue[150],
        backgroundColor: blue[50],
        boxShadow: "10px 10px 5px lightblue",
        transitionDuration: "500ms",
      },
    },
  },
};
