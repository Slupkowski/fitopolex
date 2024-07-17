import {
  TextField,
  Box,
  Typography,
  Tooltip,
  InputAdornment,
} from "@mui/material";
import { InfoOutlined, WarningAmberOutlined } from "@mui/icons-material";
import { createPalette } from "../theme/palette";
export const TextInput = ({
  label,
  tooltipText,
  value,
  onChange,
  errorMessage = "",
  isRequired = false,
  type = "string",
  unit = "",
}) => {
  const { neutral, teal } = createPalette();

  const handleChange = (e) => {
    let newValue = null;
    if (e.target.value) {
      newValue = type == "number" ? parseInt(e.target.value) : e.target.value;
    }
    onChange(newValue);
  };
  return (
    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <Typography
        sx={{
          color: neutral[800],
          fontWeight: 600,
          lineHeight: "20px",
        }}
      >
        {label} {isRequired ? <span style={{ color: "red" }}> *</span> : null}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          value={value}
          onChange={(e) => handleChange(e)}
          type={type}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{unit}</InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-input": {
              padding: "0px",
            },
            "& .MuiOutlinedInput-root": {
              outline: "none",
              "& fieldset": {
                borderColor: errorMessage ? "red" : neutral[400],
              },
              "&:hover fieldset": {
                borderColor: errorMessage ? "red" : neutral[600],
              },
              "&.Mui-focused fieldset": {
                border: "1px solid",
                borderColor: errorMessage ? "red" : teal[300],
              },
              "&.Mui-disabled fieldset": {
                border: "1px solid",
                borderColor: errorMessage ? "red" : neutral[400],
                outline: "none",
              },
            },
          }}
        />
        <Tooltip title={tooltipText} placement="right" arrow>
          <InfoOutlined sx={{ color: neutral[800] }} />
        </Tooltip>
      </Box>
      {errorMessage ? (
        <Box sx={{ display: "flex", gap: "5px" }}>
          <WarningAmberOutlined sx={{ color: "red" }} />
          <Typography sx={{ color: "red", marginTop: "3px" }}>
            {errorMessage}
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};
