import { Header } from "../components/Header";
import { Box, Typography, FormControl } from "@mui/material";
import { createPalette } from "../theme/palette";
import { CloseOutlined } from "@mui/icons-material";

const { neutral } = createPalette();
export const Fail = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "150px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <FormControl
          sx={{
            width: "500px",
            height: "300px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: neutral[100],
            marginBottom: "45px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "40px" }}>
              Coś Poszło nie tak
            </Typography>
            <CloseOutlined sx={{ fontSize: "200px", color: "red" }} />
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
