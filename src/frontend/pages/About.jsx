import { Header } from "../components/Header";
import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Box
        sx={{
          width: "80%",
          height: "200px",
          margin: "0 auto",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "40px" }}>
          Pomożemy ci rozpocząć swoją przygodę z treningami.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          height: "200px",
          margin: "0 auto",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "400px" }}>
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
