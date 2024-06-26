import { Radio } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { createPalette } from "../theme/palette";
export const Radio = ({ inputName, options, onChange, isRequired = false }) => {
  const { blue, neutral, teal } = createPalette();
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography
          sx={{
            color: neutral[800],
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          {inputName}
          {isRequired ? <span style={{ color: "red" }}> *</span> : null}
        </Typography>
      </Box>
      <Box>
        {options &&
          options.map((option, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                marginLeft: "15px",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>{option.label}</Typography>
              <Radio
                key={index}
                checked={option.checked}
                size="small"
                onChange={() => onChange(index)}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};
