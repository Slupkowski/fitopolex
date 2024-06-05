import { Radio } from "@mui/material";
import { Typography, Box } from "@mui/material";
export const Radio = ({ inputName }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Typography>{inputName}</Typography>
      <Radio />
    </Box>
  );
};
