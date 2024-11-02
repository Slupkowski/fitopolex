import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { buyerFormSchema } from "../utils/BuyerFormSchema.js";
import { Header } from "../components/Header";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControlledSingleCheckbox } from "../components/controlled/ControlledSingleCheckbox";
import { ControlledInputField } from "../components/controlled/ControlledInputField";
import { useForm } from "react-hook-form";
const { neutral } = createPalette();

export const BuyerForm = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, setValue, formState, getValues } = useForm({
    resolver: zodResolver(buyerFormSchema),
  });

  useEffect(() => {
    setValue("agreeContact", false);
    setValue("agreeSafety", false);
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    if (values.agreeContact == false || !values.agreePhone) {
      alert("Niezbędne zgody są wymagane");
    } else {
      try {
        const response = await fetch("http://localhost:3000/contactInfo", {
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

      navigate("/sent");
    }
  };

  const handleClickPlans = () => {
    navigate("/plans");
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
                label="Nazwisko"
                tooltipText="Wprowadź swoję nazwisko"
                isRequired={true}
                type="string"
                control={control}
                name="lastName"
              />
              <ControlledInputField
                label="Adres E-mail"
                tooltipText="Wprowadź adres swojej skrzynki mailowej"
                isRequired={true}
                type="string"
                control={control}
                name="mailName"
              />
              <ControlledInputField
                label="Numer telefonu"
                tooltipText="Wprowadź swój numer telefonu"
                isRequired={true}
                type="number"
                control={control}
                name="phoneNumber"
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
                  inputName={"Wyrażam zgodę na kontakt mailowy"}
                  isRequired={true}
                  control={control}
                />
                <ControlledSingleCheckbox
                  name="agreePhone"
                  inputName={"Wyrażam zgodę na kontakt telefoniczny"}
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
              <NextButton buttonName="Powrót" onClick={handleClickPlans} />
              <NextButton buttonName="Wyślij" type="submit" />
            </Box>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};
