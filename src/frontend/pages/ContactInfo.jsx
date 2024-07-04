import { useState } from "react";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControlledCheckbox } from "../components/controlled/ControlledCheckbox";
import { useForm } from "react-hook-form";
const { blue, neutral } = createPalette();

export const ContactInfo = () => {
  const navigate = useNavigate();
  const { watch, control, setValue } = useForm();
  const [userName, setUserName] = useState("");
  const [mail, setMail] = useState("");

  const handleClickSendInfo = () => {
    navigate("/Sent");
  };

  const handleClickTrainingInfo = () => {
    navigate("/traininginfo");
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
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
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
            <TextInput
              label="Imię"
              tooltipText="Potrzebujemy informacji na temat twojego wieku żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
              value={userName}
              onChange={setUserName}
              isRequired={true}
              errorMessage={"Uzupełnij dane"}
            />
            <TextInput
              label="Wprowadź swój adres E-mail"
              tooltipText="Potrzebujemy informacji na temat twojego wieku żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
              value={mail}
              isRequired={true}
              errorMessage={"Uzupełnij dane"}
              onChange={setMail}
            />
            <ControlledCheckbox
              name="AgreedInfo"
              inputName={"Niezbędne zgody"}
              tooltipText={
                "Potrzebujemy tych informacji żeby skalibrować odpowiedni trening do twoich predyspozycji "
              }
              options={[
                "Zgadzam się na kontakt mailowy",
                "Jestem świadomy że wygenerowany plan treningowy NIE został opracowany przez profesjonalistów i nie ponoszą oni odpowiedzialności za moje zdebilnienie",
              ]}
              isRequired={true}
              watch={watch}
              control={control}
              setValue={setValue}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-between",
            }}
          >
            <NextButton buttonName="Powrót" onClick={handleClickTrainingInfo} />
            <NextButton buttonName="Wyślij" onClick={handleClickSendInfo} />
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
