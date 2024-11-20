import { Header } from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import { Box, Typography } from "@mui/material";
import maupaprzysiad from "../images/maupaprzysiad.png";
import maupamartwy from "../images/maupamartwy.png";
import maupasprint from "../images/maupasprint.png";
import maupaposing from "../images/maupaposing.png";

export const Welcome = () => {
  const slides = [
    { url: maupaprzysiad, title: "red" },
    { url: maupamartwy, title: "blue" },
    { url: maupasprint, title: "green" },
    { url: maupaposing, title: "yellow" },
  ];

  const containerStyles = {
    width: "1200px",
    height: "500px",
    margin: "0 auto",
    borderRadius: "20px",
  };

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Box sx={{ marginTop: "40px" }} />
      <Box
        sx={{
          width: "1000px",
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
        <Typography variant="body1" sx={{ fontSize: "20px" }}>
          Maupapp to strona dla ludzi którzy chcieliby zmienić swoją sylwetkę
          ale nie wiedzą za co się zabrać. Znajdziesz tu wszystkie informacje
          których potrzebujesz żeby dbać o swoje zdrowie. Możesz zacząć swoją
          przygodę ze sportem dzięki naszemu intuicyjnemu generatorowi
          treningów! Stworzyliśmy proste w użyciu narzędzie, które pomoże Ci
          zaplanować efektywny i dopasowany do Twoich potrzeb plan treningowy,
          niezależnie od tego, czy chcesz wzmocnić mięśnie, zbudować
          wytrzymałość, czy po prostu poprawić kondycję. Idealne rozwiązanie dla
          osób, które dopiero zaczynają swoją przygodę z siłownią lub bieganiem.
          Chcesz wskoczyć na wyższy poziom? Kup opiekę trenerską.
        </Typography>
      </Box>
    </div>
  );
};
