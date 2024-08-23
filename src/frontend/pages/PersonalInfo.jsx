import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../components/Header";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControlledInputField } from "../components/controlled/ControlledInputField.jsx";
import { ControlledGenderGroup } from "../components/controlled/ControlledGenderGroup.jsx";
import { useForm } from "react-hook-form";
import { personalInfoSchema } from "../utils/PersonalInfoSchema.js";
const { blue, neutral } = createPalette();

export const PersonalInfo = () => {
  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await fetch("http://localhost:3000/personalInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    navigate("/trainingInfo");
  };
  const navigate = useNavigate();
  console.log(formState);

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
                <ControlledGenderGroup
                  label="Płeć"
                  isRequired={true}
                  tooltipText={
                    "Potrzebujemy informacji na temat twojej płci żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                  }
                  control={control}
                  setValue={setValue}
                  name="gender"
                  errorMessage={formState.errors?.gender?.message}
                />
              </Box>
              <ControlledInputField
                label="Wiek"
                tooltipText="Potrzebujemy informacji na temat twojego wieku żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                isRequired={true}
                type="number"
                control={control}
                name="age"
              />
              <ControlledInputField
                label={"Wzrost"}
                tooltipText="Potrzebujemy informacji na temat twojego wzrostu żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                type="number"
                control={control}
                isRequired={true}
                unit="cm"
                name="height"
              />
              <ControlledInputField
                label={"Waga"}
                type="number"
                control={control}
                isRequired={true}
                unit="kg"
                tooltipText="Potrzebujemy informacji na temat twojej wagi żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                name="weight"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                margin: "10px",
              }}
            >
              <NextButton buttonName="Dalej" type="submit" />
            </Box>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};
