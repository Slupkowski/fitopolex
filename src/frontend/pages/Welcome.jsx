import { Header } from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import { Box, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { TextInput } from "../components/TextInput";
import { Radio } from "../components/Radio";
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
        <Radio inputName={"kutas"} />
        <TextInput inputName={"test"} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          massa metus, vitae interdum dui tincidunt at. Nunc vitae libero non
          est dictum malesuada vel ac dolor. Mauris mauris massa, blandit sit
          amet metus eget, pulvinar elementum mi. Sed id massa non lorem feugiat
          tempus. Donec volutpat sed mauris quis maximus. Duis sodales porta
          pulvinar. Etiam ut luctus urna. Nulla ultrices egestas dolor sit amet
          faucibus. Maecenas laoreet eget sem a consectetur. Aenean gravida
          consectetur leo, a vestibulum ante dignissim nec. Nulla quis convallis
          justo. Nunc ac arcu rhoncus, finibus tellus quis, sagittis justo.
          Aliquam quis urna sit amet nibh gravida gravida. Nullam rhoncus odio
          quam, at porttitor nisi elementum sed. Pellentesque ut nulla
          tincidunt, auctor ante nec, congue erat. Curabitur ultrices, purus sed
          lacinia aliquet, lorem nisl lobortis tortor, nec consectetur tellus mi
          vel eros.
        </Typography>
      </Box>
    </div>
  );
};
