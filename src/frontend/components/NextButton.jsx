import { Button, Box } from "@mui/material";
import { createPalette } from "../theme/palette";
export const NextButton = ({ buttonName, onClick }) => {
  const { blue, neutral, teal } = createPalette();
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: blue[150],
        color: blue[50],
        fontWeight: 600,
        letterSpacing: "5px",
        border: "none",
        "&:hover": {
          border: "none",
          color: blue[150],
          backgroundColor: blue[50],
          boxShadow: "3px 3px 1px lightblue",
          transitionDuration: "500ms",
        },
      }}
    >
      {buttonName}
    </Button>
  );
};
