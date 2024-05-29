import { Input, Box, Typography } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
export const Input = ({ inputName }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Typography>{inputName}</Typography>
      <Input />
      <InfoOutlined />
    </Box>
  );
};
