import { Header } from "../components/Header";
import { Box, Typography } from "@mui/material";
export const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography fontSize={50}>SKONTAKTUJ SIĘ Z NAMI SYNKU</Typography>
        <h1>Tomasz Słupkowski</h1>
        <h2>666 999 555</h2>
        <h2>konradek@zjedzobiadek.com</h2>
      </Box>
    </>
  );
};
