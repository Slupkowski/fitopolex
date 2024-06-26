import { useState } from "react";
import { Header } from "../components/Header";
import { Radio } from "../components/Radio";
import { Checkbox } from "../components/CheckBox";
import { TextInput } from "../components/TextInput";
import { NextButton } from "../components/NextButton";
import { Box, FormControl, Typography } from "@mui/material";
import { createPalette } from "../theme/palette";
import { useNavigate } from "react-router-dom";
const { blue, neutral } = createPalette();

export const TrainingInfo = () => {
  const [timeInfoIndex, setTimeInfoIndex] = useState(0);
  const [equipmentInfoIndex, setEquipmentInfoIndex] = useState(0);
  const [goalInfoIndex, setGoalInfoIndex] = useState(0);
  const [extraGoalInfoIndex, setExtraGoalInfoIndex] = useState(0);
  const [checkboxState, setCheckboxState] = useState([
    false,
    false,
    false,
    false,
  ]);
  const navigate = useNavigate();
  const handleClickContactInfo = () => {
    navigate("/contactInfo");
  };
  const handleClickPersonalInfo = () => {
    navigate("/personalinfo");
  };
  const onChangeTime = (index) => {
    setTimeInfoIndex(index);
  };
  const onChangeEquipment = (index) => {
    setEquipmentInfoIndex(index);
  };
  const onChangeGoal = (index) => {
    setGoalInfoIndex(index);
  };
  const onChangeExtraGoal = (index) => {
    setExtraGoalInfoIndex(index);
  };
  const handleCheckboxChange = (index) => {
    setCheckboxState((prevState) => {
      const newState = [...prevState];
      if (index === 3) {
        return [false, false, false, true];
      } else {
        newState[index] = !newState[index];
        newState[3] = false;
        return newState;
      }
    });
  };

  return (
    <div>
      <Header />
      <Box sx={{ marginTop: "150px" }} />

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
            <Radio
              inputName={"Który przedział czasowy ci odpowiada?"}
              options={[
                {
                  label: "Co drugi dzień 2 godziny",
                  checked: timeInfoIndex == 0,
                },
                { label: "Godzina codziennie", checked: timeInfoIndex == 1 },
                { label: "Obojętnie", checked: timeInfoIndex == 2 },
              ]}
              isRequired={true}
              onChange={(index) => onChangeTime(index)}
            />
            <Radio
              inputName={"Twój dostępny sprzęt do ćwiczeń"}
              options={[
                {
                  label: "Mogę chodzić na siłownie",
                  checked: equipmentInfoIndex == 0,
                },
                {
                  label: "Mogę trenować w parku",
                  checked: equipmentInfoIndex == 1,
                },
                {
                  label: "Mogę trenować tylko w domu",
                  checked: equipmentInfoIndex == 2,
                },
              ]}
              isRequired={true}
              onChange={(index) => onChangeEquipment(index)}
            />
            {equipmentInfoIndex == 2 && (
              <Box>
                <Checkbox
                  inputName={"Co masz w domu?"}
                  options={[
                    {
                      label: "Mam drążek do podciągania",
                      checked: checkboxState[0],
                    },
                    {
                      label: "Mam hantle",
                      checked: checkboxState[1],
                    },
                    {
                      label: "Mam zestaw gum oporowych",
                      checked: checkboxState[2],
                    },
                    {
                      label: "Nie mam żadnego sprzętu",
                      checked: checkboxState[3],
                    },
                  ]}
                  onChange={handleCheckboxChange}
                />
              </Box>
            )}
            <Radio
              inputName={"Co jest twoim głównym celem?"}
              options={[
                { label: "Chcę schudnąć", checked: goalInfoIndex == 0 },

                {
                  label: "Chcę zbudować mięśnie",
                  checked: goalInfoIndex == 1,
                },
                {
                  label: "Chcę schudnąć i zbudować mięśnie",
                  checked: goalInfoIndex == 2,
                },
              ]}
              isRequired={true}
              onChange={(index) => onChangeGoal(index)}
            />
            <Radio
              inputName={"Twoje dodatkowe cele"}
              options={[
                {
                  label: "Chce być silniejszy",
                  checked: extraGoalInfoIndex == 0,
                },

                {
                  label: "Chce mieć lepszą kondycję",
                  checked: extraGoalInfoIndex == 1,
                },
                {
                  label: "Chce być silniejszy i mieć lepszą kondycję",
                  checked: extraGoalInfoIndex == 2,
                },
              ]}
              isRequired={true}
              onChange={(index) => onChangeExtraGoal(index)}
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
              onClick={() => handleClickPersonalInfo()}
            />
            <NextButton
              buttonName="Dalej"
              onClick={() => handleClickContactInfo()}
            />
          </Box>
        </FormControl>
      </Box>
    </div>
  );
};
