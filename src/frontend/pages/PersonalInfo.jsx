import { useState } from "react";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { createPalette } from "../theme/palette";
const { blue, neutral } = createPalette();

export const PersonalInfo = () => {
  const [gender, setGender] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  console.log(inputValue);
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
          WPROWADŹ SWOJE DANE
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <FormControl
          sx={{
            width: "500px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 10)",
            backgroundColor: neutral[100],
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
                value={gender}
                label="Płeć"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value={10}>Mężczyzna</MenuItem>
                <MenuItem value={20}>Kobieta</MenuItem>
              </Select>
            </Box>
            <TextInput
              label="label"
              tooltipText="tooltipText"
              value={inputValue}
              errorMessage="errorMessage"
              isRequired={true}
              onChange={setInputValue}
              // unit="kg"
              // type="number"
            />
            {/* <TextInput label={"test"} tooltipText={"tooltipText1"} />
            <TextInput label={"test"} tooltipText={"tooltipText2"} /> */}
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
