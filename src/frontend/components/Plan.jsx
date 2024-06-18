import { Box, Typography, Button } from "@mui/material";

export const Plan = ({ description, buttonText, onClick, title }) => {
  return (
    <Box
      sx={{
        width: "33%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          border: "2px solid black",
          borderRadius: "20px",
          boxShadow: "10px 10px 5px lightblue",
          transitionDuration: "500ms",
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
        <Typography sx={{ fontWeight: "600" }}>{title}</Typography>

        <Typography sx={{ padding: "16px" }}>{description}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <Button onClick={onClick}>{buttonText}</Button>
      </Box>
    </Box>
  );
};
