import { Checkbox } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { createPalette } from "../theme/palette";

export const CustomCheckbox = ({
  inputName,
  options,
  value,
  onChange,
  isRequired = false,
}) => {
  const { neutral } = createPalette();
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
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                marginLeft: "15px",
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>
                {option}
                <Checkbox
                  checked={value[index]}
                  size="small"
                  onChange={() => onChange(index)}
                />
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
