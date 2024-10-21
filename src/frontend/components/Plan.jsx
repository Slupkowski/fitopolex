import { Box, Typography, Button } from "@mui/material";
import { createPalette } from "../theme/palette";

const { teal } = createPalette();
export const Plan = ({ description, onClick, title }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "400px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          cursor: "pointer",
          borderRadius: "20px",
          boxShadow: "10px 10px 5px lightblue",
          transitionDuration: "500ms",
          bgcolor: teal[100],
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
          {title}
        </Typography>

        <Typography
          sx={{ padding: "16px", fontWeight: "600px", fontSize: "20px" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
