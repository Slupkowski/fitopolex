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
    if (validateInputs()) {
      navigate("/trainingInfo");
    }
  };

  const [gender, setGender] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [weightValue, setWeightValue] = useState("");

  const [ageError, setAgeError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [weightError, setWeightError] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (ageValue === "") {
      setAgeError(true);
      isValid = false;
    } else {
      setAgeError(false);
    }

    if (heightValue === "") {
      setHeightError(true);
      isValid = false;
    } else {
      setHeightError(false);
    }

    if (weightValue === "") {
      setWeightError(true);
      isValid = false;
    } else {
      setWeightError(false);
    }

    return isValid;
  };

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "150px" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "600px",
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
            marginBottom: "45px",
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
                  "Potrzebujemy informacji na temat twojej płci żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                }
              />
            </Box>
            <TextInput
              label="Wiek"
              tooltipText="Potrzebujemy informacji na temat twojego wieku żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
              value={ageValue}
              type="number"
              isRequired={true}
              onChange={setAgeValue}
              errorMessage={ageError ? "Uzupełnij dane" : ""}
            />
            <TextInput
              label={"Wzrost"}
              tooltipText="Potrzebujemy informacji na temat twojego wzrostu żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
              value={heightValue}
              type="number"
              isRequired={true}
              onChange={setHeightValue}
              unit="cm"
              errorMessage={heightError ? "Uzupełnij dane" : ""}
            />
            <TextInput
              label={"Waga"}
              value={weightValue}
              type="number"
              isRequired={true}
              onChange={setWeightValue}
              unit="kg"
              tooltipText="Potrzebujemy informacji na temat twojej wagi żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
              errorMessage={weightError ? "Uzupełnij dane" : ""}
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
