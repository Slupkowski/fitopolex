import { Header } from "../components/Header";
import { Typography, Box } from "@mui/material";

export const GainMuscle = () => {
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
        }}
      >
        <Typography variant="h5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          massa metus, vitae interdum dui tincidunt at. Nunc vitae libero non
          est dictum malesuada vel ac dolor. Mauris mauris massa, blandit sit
          amet metus eget, pulvinar elementum mi. Sed id massa non lorem feugiat
          tempus. Donec volutpat sed mauris quis maximus. Duis sodales porta
          pulvinar. Etiam ut luctus urna. Nulla ultrices egestas dolor sit amet
          faucibus.
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
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus
          massa metus, vitae interdum dui tincidunt at. Nunc vitae libero non
          est dictum malesuada vel ac dolor. Mauris mauris massa, blandit sit
          amet metus eget, pulvinar elementum mi. Sed id massa non lorem feugiat
          tempus. Donec volutpat sed mauris quis maximus. Duis sodales porta
          pulvinar. Etiam ut luctus urna. Nulla ultrices egestas dolor sit amet
          faucibus.
        </Typography>
      </Box>
    </div>
  );
};
