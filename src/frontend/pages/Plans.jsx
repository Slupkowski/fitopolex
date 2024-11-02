import { Header } from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Plan } from "../components/Plan";

export const Plans = () => {
  const navigate = useNavigate();
  const handleClickPersonalInfo = () => {
    navigate("/personalinfo");
  };
  const handleClickBuyerForm = () => {
    navigate("/BuyerForm");
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
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          fontSize: "40px",
          fontWeight: "600",
        }}
      >
        Wybierz co cię interesuje
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "400px",
          margin: "0 auto",
          border: "2px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Plan
          title="Plan dla osoby początkującej"
          description="Tu możesz za darmo wygenerować plan treningowy na podstawie swoich preferencji"
          onClick={() => handleClickPersonalInfo()}
        />
        <Plan
          title="Spersonalizowany plan + dieta"
          description="Tu możesz kupić plan oraz dietę rozpisane przez trenera na podstawie twoich preferencji"
          onClick={() => handleClickBuyerForm()}
        />
        <Plan
          title="Prowadzenie 6 tygodni przez trenera"
          description="Tu możesz kupić 6 tygodni wsparcia wykwalifikowanego specjalisty."
          onClick={() => handleClickBuyerForm()}
        />
      </Box>
    </div>
  );
};
