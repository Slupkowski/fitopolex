import { Header } from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import { Box, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import img1 from "../images/image-1.jpg";
import maupaprzysiad from "../images/maupaprzysiad.png";
import maupamartwy from "../images/maupamartwy.png";
import maupasprint from "../images/maupasprint.png";
import maupaposing from "../images/maupaposing.png";
import img2 from "../images/image-2.jpg";
import img3 from "../images/image-3.jpg";
import img4 from "../images/image-4.jpg";

export const Welcome = () => {
  const slides = [
    { url: maupaprzysiad, title: "red" },
    { url: maupamartwy, title: "blue" },
    { url: maupasprint, title: "green" },
    { url: maupaposing, title: "yellow" },
  ];

  const containerStyles = {
    width: "1000px",
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
          width: "80%",
          height: "400px",
          margin: "0 auto",
        }}
      >
        <Typography variant="body1">
          Maupapp to strona dla ludzi którzy chcieliby zmienić swoją sylwetkę
          ale nie wiedzą za co się zabrać. Znajdziesz tu wszystkie informacje
          których potrzebujesz żeby dbać o swoje zdrowie. Możesz zacząć swoją
          przygodę ze sportem dzięki naszemu intuicyjnemu generatorowi
          treningów! Stworzyliśmy proste w użyciu narzędzie, które pomoże Ci
          zaplanować efektywny i dopasowany do Twoich potrzeb plan treningowy,
          niezależnie od tego, czy chcesz wzmocnić mięśnie, zbudować
          wytrzymałość, czy po prostu poprawić kondycję. Dlaczego warto nas
          wybrać? Personalizacja: Dostosuj trening do swojego poziomu
          zaawansowania i celów. Prostota: Intuicyjny interfejs pozwala szybko
          wygenerować plan treningowy bez zbędnych komplikacji. Dla każdego:
          Idealne rozwiązanie dla osób, które dopiero zaczynają swoją przygodę z
          siłownią lub bieganiem. Wejdź na wyższy poziom i osiągnij swoje
          sportowe cele z naszym generatorem!
        </Typography>
      </Box>
    </div>
  );
};
