import { Header } from "../components/Header";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Plan } from "../components/Plan";

export const Plans = () => {
  const navigate = useNavigate();

  const handleClickPersonalInfo = () => {
    navigate("/personalinfo");
  };

  const handleClickBuyerForm = (productId) => {
    navigate("/buyerForm", { state: { product: productId } });
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          width: "100vw",
          height: "calc(100vh - 110px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "1200px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            sx={{
              width: "80%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            Wybierz co cię interesuje
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              gap: "20px", // Odstęp między elementami
            }}
          >
            <Plan
              title="Plan dla osoby początkującej"
              description="Tu możesz za darmo wygenerować plan treningowy na podstawie swoich preferencji"
              onClick={() => handleClickPersonalInfo()}
            />
            <Plan
              title="Spersonalizowany plan + dieta"
              description="Tu za 10zł możesz kupić plan oraz dietę rozpisane przez trenera na podstawie twoich preferencji"
              onClick={() => handleClickBuyerForm(1)}
            />
            <Plan
              title="Prowadzenie 6 tygodni przez trenera"
              description="Tu za 20zł możesz kupić 6 tygodni wsparcia wykwalifikowanego specjalisty."
              onClick={() => handleClickBuyerForm(2)}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
