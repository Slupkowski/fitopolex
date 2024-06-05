import { TextField, Box, Typography } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
export const TextInput = ({ inputName }) => {
  return (
    <Box>
      <Box>
        <Typography>{inputName}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <TextField
            sx={{ "&.MuiInputBase": {}, width: "470px", height: "35px" }}
          />
          <InfoOutlined />
        </Box>
      </Box>
    </Box>
  );
};
