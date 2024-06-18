import {
  Woman2Outlined,
  ManOutlined,
  WarningAmberOutlined,
  InfoOutlined,
} from "@mui/icons-material";
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import { createPalette } from "../theme/palette";
export const GenderGroup = ({
  label,
  value,
  onClick,
  isRequired = false,
  errorMessage = "",
  tooltipText = "",
}) => {
  const { blue, neutral, teal } = createPalette();
  const handleClick = (newValue) => {
    onClick(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography
          sx={{
            color: neutral[800],
            fontWeight: 600,
            lineHeight: "20px",
          }}
        >
          {label} {isRequired ? <span style={{ color: "red" }}> *</span> : null}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => handleClick("female")}
          sx={{ color: value == "female" ? blue[150] : neutral[800] }}
          disableRipple
        >
          <Woman2Outlined
            sx={{
              fontSize: "40px",

              "&:hover": {
                color: value == "female" ? blue[200] : neutral[600],
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={() => handleClick("male")}
          sx={{ color: value == "male" ? blue[150] : neutral[800] }}
          disableRipple
        >
          <ManOutlined
            sx={{
              fontSize: "40px",
              "&:hover": {
                color: value == "male" ? blue[200] : neutral[600],
              },
            }}
          />
        </IconButton>
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
