import { useState } from "react";
import { Header } from "../components/Header";
import {
  Box,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";

export const PersonalInfo = () => {
  const [sex, setSex] = useState("");

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Box>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          WPROWADŹ SWOJE PARAMETRY
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <FormControl
          sx={{
            width: "80%",
            maxWidth: "500px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 10)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box>
              <InputLabel id="demo-simple-select-label">Płeć</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Płeć"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={10}>Mężczyzna</MenuItem>
                <MenuItem value={20}>Kobieta</MenuItem>
              </Select>
            </Box>
            <TextField
              id="outlined-basic"
              label="Wiek"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Wzrost"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Waga"
              variant="outlined"
              fullWidth
            />
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
