import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Box } from "@mui/material";
export const Welcome = () => {
  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Carousel />
    </div>
  );
};
