import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "../components/Header";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControllerInputField } from "../components/controlled/ControllerInputField";
import { ControllerGenderGroup } from "../components/controlled/ControllerGenderGroup.jsx";
import { useForm } from "react-hook-form";
import { personalInfoSchema } from "../utils/schema.js";
const { blue, neutral } = createPalette();

export const PersonalInfo = () => {
  const { control, handleSubmit, setValue, formState } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
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
                <ControllerGenderGroup
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
              <ControllerInputField
                label="Wiek"
                tooltipText="Potrzebujemy informacji na temat twojego wieku żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                isRequired={true}
                type="number"
                control={control}
                name="age"
              />
              <ControllerInputField
                label={"Wzrost"}
                tooltipText="Potrzebujemy informacji na temat twojego wzrostu żeby móc skalibrować odpowiedni trening do twoich predyspozycji"
                type="number"
                control={control}
                isRequired={true}
                unit="cm"
                name="height"
              />
              <ControllerInputField
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
