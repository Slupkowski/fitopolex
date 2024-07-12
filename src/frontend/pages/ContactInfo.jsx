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
const { neutral } = createPalette();

export const ContactInfo = () => {
  const navigate = useNavigate();
  const { control, watch, handleSubmit, setValue, formState, getValues } =
    useForm({
      resolver: zodResolver(contactInfoSchema),
    });

  useEffect(() => {
    setValue("agreeContact", false);
  }, []);
  useEffect(() => {
    setValue("agreeSafety", false);
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    navigate("/sent");
  };

  const handleClickTrainingInfo = () => {
    navigate("/traininginfo");
  };
  console.log(formState, getValues());

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
              <Box sx={{ Gap: "10px" }}>
                <Typography
                  sx={{
                    color: neutral[800],
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Niezbędne zgody <span style={{ color: "red" }}> *</span>
                </Typography>

                <ControlledSingleCheckbox
                  name="agreeContact"
                  inputName={"Zgadzam się na kontakt mailowy"}
                  isRequired={true}
                  control={control}
                />
                <ControlledSingleCheckbox
                  name="agreeSafety"
                  inputName={
                    "Jestem świadomy że wygenerowany plan treningowy NIE został opracowany przez profesjonalistów i nie ponoszą oni odpowiedzialności za moje zdebilnienie"
                  }
                  isRequired={true}
                  control={control}
                />
              </Box>
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
