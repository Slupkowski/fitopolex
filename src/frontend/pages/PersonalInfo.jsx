import { useState } from "react";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { GenderGroup } from "../components/GenderGroup";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
const { blue, neutral } = createPalette();

export const PersonalInfo = () => {
  const navigate = useNavigate();
  const handleClickTrainingInfo = () => {
    navigate("/trainingInfo");
  };
  const [gender, setGender] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "110px" }} />

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
          <Box>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Wypełnij formularz
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box>
              <GenderGroup
                label="Płeć"
                isRequired={true}
                value={gender}
                onClick={setGender}
                tooltipText={
                  "Potrzebujemy znać twoją płeć żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                }
              />
            </Box>
            <TextInput
              label="Wiek"
              tooltipText="tooltipText"
              value={ageValue}
              // errorMessage="errorMessage"
              type="number"
              isRequired={true}
              onChange={setAgeValue}
            />
            <TextInput
              label={"Wzrost"}
              tooltipText="tooltipText"
              value={heightValue}
              // errorMessage="errorMessage"
              type="number"
              isRequired={true}
              onChange={setHeightValue}
              unit="cm"
            />
            <TextInput
              label={"Waga"}
              value={weightValue}
              errorMessage="Uzupełnij dane"
              type="number"
              isRequired={true}
              onChange={setWeightValue}
              unit="kg"
              tooltipText="toooltipText"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              margin: "10px",
            }}
          >
            <NextButton
              buttonName="Dalej"
              onClick={() => handleClickTrainingInfo()}
            />
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
