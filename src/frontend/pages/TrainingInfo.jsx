import { zodResolver } from "@hookform/resolvers/zod";
import { trainingInfoSchema } from "../utils/TrainingInfoSchema.js";
import { Header } from "../components/Header";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
import { ControlledRadio } from "../components/controlled/ControlledRadio";
import { ControlledCheckbox } from "../components/controlled/ControlledCheckbox";
import { useForm } from "react-hook-form";
const { neutral } = createPalette();

export const TrainingInfo = () => {
  const { watch, control, setValue, handleSubmit, formState, getValues } =
    useForm({
      resolver: zodResolver(trainingInfoSchema),
    });
  const timeInfo = watch("timeInfo");
  const extraGoalInfo = watch("extraGoalInfo");
  const goalInfo = watch("goalInfo");
  const equipmentInfo = watch("equipmentInfo");
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    navigate("/contactInfo");
  };

  const onInSubmit = (values) => {
    if (
      timeInfo === "" ||
      extraGoalInfo === "" ||
      goalInfo === "" ||
      equipmentInfo === ""
    ) {
      alert("Proszę zaznaczyć wszystkie opcje");
    } else if (
      timeInfo === "" &&
      extraGoalInfo === "" &&
      goalInfo === "" &&
      equipmentInfo === ""
    ) {
      alert("Proszę zaznaczyć wszystkie opcje");
    } else {
      console.log(values, formState.errors);
    }
  };

  const handleClickPersonalInfo = () => {
    navigate("/personalinfo");
  };

  console.log(formState.errors.equipmentInfo?.message);

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
        <form onSubmit={handleSubmit(onSubmit, onInSubmit)}>
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
              <ControlledRadio
                inputName={"Który przedział czasowy ci odpowiada?"}
                tooltipText={
                  "Potrzebujemy tych informacji żeby skalibrować odpowiedni trening do twoich predyspozycji "
                }
                name="timeInfo"
                errorMessage={formState.errors?.timeInfo?.message}
                options={[
                  {
                    label: "Co drugi dzień 2 godziny",
                    checked: timeInfo === 0,
                  },
                  { label: "Godzina codziennie", checked: timeInfo === 1 },
                  { label: "Obojętnie", checked: timeInfo === 2 },
                ]}
                isRequired={true}
                control={control}
                setValue={setValue}
              />
              <ControlledRadio
                inputName={"Twój dostępny sprzęt do ćwiczeń"}
                tooltipText={
                  "Potrzebujemy tych informacji żeby skalibrować odpowiedni trening do twoich predyspozycji "
                }
                name="equipmentInfo"
                errorMessage={formState.errors?.equipmentInfo?.message}
                options={[
                  {
                    label: "Mogę chodzić na siłownie",
                    checked: equipmentInfo === 0,
                  },
                  {
                    label: "Mogę trenować w parku",
                    checked: equipmentInfo === 1,
                  },
                  {
                    label: "Mogę trenować tylko w domu",
                    checked: equipmentInfo === 2,
                  },
                ]}
                setValue={setValue}
                isRequired={true}
                control={control}
              />
              {equipmentInfo === 2 && (
                <Box>
                  <ControlledCheckbox
                    inputName={"Co masz w domu?"}
                    name="houseEquipment"
                    control={control}
                    setValue={setValue}
                    options={[
                      "Mam drążek do podciągania",
                      "Mam hantle",
                      "Mam zestaw gum oporowych",
                      "Nie mam żadnego sprzętu",
                    ]}
                    watch={watch}
                  />
                </Box>
              )}
              <ControlledRadio
                inputName={"Co jest twoim głównym celem?"}
                tooltipText={
                  "Potrzebujemy tych informacji żeby skalibrować odpowiedni trening do twoich predyspozycji "
                }
                name="goalInfo"
                errorMessage={formState.errors?.goalInfo?.message}
                options={[
                  { label: "Chcę schudnąć", checked: goalInfo === 0 },
                  {
                    label: "Chcę zbudować mięśnie",
                    checked: goalInfo === 1,
                  },
                  {
                    label: "Chcę schudnąć i zbudować mięśnie",
                    checked: goalInfo === 2,
                  },
                ]}
                isRequired={true}
                setValue={setValue}
                control={control}
              />
              <ControlledRadio
                inputName={"Twoje dodatkowe cele"}
                tooltipText={
                  "Potrzebujemy tych informacji żeby skalibrować odpowiedni trening do twoich predyspozycji "
                }
                name="extraGoalInfo"
                errorMessage={formState.errors?.extraGoalInfo?.message}
                options={[
                  {
                    label: "Chcę być silniejszy",
                    checked: extraGoalInfo === 0,
                  },
                  {
                    label: "Chcę mieć lepszą kondycję",
                    checked: extraGoalInfo === 1,
                  },
                  {
                    label: "Chcę być silniejszy i mieć lepszą kondycję",
                    checked: extraGoalInfo === 2,
                  },
                ]}
                isRequired={true}
                setValue={setValue}
                control={control}
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
                onClick={handleClickPersonalInfo}
              />
              <NextButton type="submit" buttonName="Dalej" />
            </Box>
          </FormControl>
        </form>
      </Box>
    </div>
  );
};
