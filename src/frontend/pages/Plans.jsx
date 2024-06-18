import { Header } from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { Plan } from "../components/Plan";

export const Plans = () => {
  const { blue } = createPalette();
  const navigate = useNavigate();
  const handleClickPersonalInfo = () => {
    navigate("/personalinfo");
  };
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Typography
        sx={{
          width: "80%",
          height: "200px",
          margin: "0 auto",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
        massa metus, vitae interdum dui tincidunt at. Nunc vitae libero non est
        dictum malesuada vel ac dolor. Mauris mauris massa, blandit sit amet
        metus eget, pulvinar elementum mi. Sed id massa non lorem feugiat
        tempus. Donec volutpat sed mauris quis maximus. Duis sodales porta
        pulvinar. Etiam ut luctus urna. Nulla ultrices egestas dolor sit amet
        faucibus.
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "400px",
          margin: "0 auto",
          border: "2px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Plan
          title="Plan dla osoby początkującej"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus massa metus, vitae interdum dui tincidunt at. Nunc vitae
            libero non est dictum malesuada vel ac dolor. Mauris mauris massa,
            blandit sit amet metus eget, pulvinar elementum mi. Sed id massa non
            lorem feugiat tempus. Donec volutpat sed mauris quis maximus. Duis
            sodales porta pulvinar. Etiam ut luctus urna. Nulla ultrices egestas
            dolor sit amet faucibus."
          buttonText="Generuj plan"
          onClick={() => handleClickPersonalInfo()}
        />
        <Plan
          title="Spersonalizowany plan + dieta"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus massa metus, vitae interdum dui tincidunt at. Nunc vitae
            libero non est dictum malesuada vel ac dolor. Mauris mauris massa,
            blandit sit amet metus eget, pulvinar elementum mi. Sed id massa non
            lorem feugiat tempus. Donec volutpat sed mauris quis maximus. Duis
            sodales porta pulvinar. Etiam ut luctus urna. Nulla ultrices egestas
            dolor sit amet faucibus."
          buttonText="Kup Teraz"
          onClick={() => handleClickPersonalInfo()}
        />
        <Plan
          title="Prowadzenie przez 6 tygodni przez trenera"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus massa metus, vitae interdum dui tincidunt at. Nunc vitae
            libero non est dictum malesuada vel ac dolor. Mauris mauris massa,
            blandit sit amet metus eget, pulvinar elementum mi. Sed id massa non
            lorem feugiat tempus. Donec volutpat sed mauris quis maximus. Duis
            sodales porta pulvinar. Etiam ut luctus urna. Nulla ultrices egestas
            dolor sit amet faucibus."
          buttonText="Kup Teraz"
          onClick={() => handleClickPersonalInfo()}
        />
      </Box>
    </div>
  );
};
