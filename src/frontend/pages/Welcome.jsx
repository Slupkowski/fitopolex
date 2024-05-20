import { Header } from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import { Box } from "@mui/material";
import { createPalette } from "../theme/palette";
import img1 from "../images/image-1.jpg";
import img2 from "../images/image-2.jpg";
import img3 from "../images/image-3.jpg";
import img4 from "../images/image-4.jpg";

const { blue } = createPalette();

export const Welcome = () => {
  const slides = [
    { url: img1, title: "red" },
    { url: img2, title: "blue" },
    { url: img3, title: "green" },
    { url: img4, title: "yellow" },
  ];

  const containerStyles = {
    width: "80%",
    height: "400px",
    margin: "0 auto",
    borderRadius: "20px",
  };
  const bodyStyles = {
    backgroundColor: blue[100],
    height: "100%",
  };

  return (
    <div style={bodyStyles}>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
    </div>
  );
};
