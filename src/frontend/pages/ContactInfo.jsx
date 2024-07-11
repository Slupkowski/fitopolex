import { useFormState } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactInfoSchema } from "../utils/ContactInfoSchema.js";
import { Header } from "../components/Header";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControlledSingleCheckbox } from "../components/controlled/ControlledSingleCheckbox";
import { ControlledInputField } from "../components/controlled/ControlledInputField";
import { useForm } from "react-hook-form";
const { blue, neutral } = createPalette();

export const ContactInfo = () => {
  const navigate = useNavigate();
  const { control, watch, handleSubmit, setValue, formState } = useForm({
    resolver: zodResolver(contactInfoSchema),
  });
  const value = watch("agreedInfo");

  useEffect(() => {
    setValue("agreedInfo", [false, false]);
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    navigate("/sent");
  };
  console.log(formState);
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <ControlledInputField
                label="Imię"
                tooltipText="Wprowadź swoję imię"
                isRequired={true}
                type="string"
                control={control}
                name="firstName"
              />
              <ControlledInputField
                label="Adres E-mail"
                tooltipText="Wprowadź adres swojej skrzynki mailowej"
                isRequired={true}
                type="string"
                control={control}
                name="mailName"
              />
              <ControlledSingleCheckbox
                name="agreedInfo"
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
              <NextButton
                buttonName="Powrót"
                onClick={handleClickTrainingInfo}
              />
              <NextButton buttonName="Wyślij" type="submit" />
            </Box>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};
