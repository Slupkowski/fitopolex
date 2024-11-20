import { Header } from "../components/Header";
import { Box, Typography } from "@mui/material";
export const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "800px",
          height: "auto",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography fontSize={35}>
          W razie wątpliwości zapraszamy do kontaktu
        </Typography>
        <h2>Tomasz Słupkowski</h2>
        <h2>666 999 555</h2>
        <h2>lorem@ipsum.com</h2>
      </Box>
    </>
  );
};
