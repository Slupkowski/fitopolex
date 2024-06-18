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
  const [equipmentInfoIndex, setEquipmentInfoIndex] = useState(0);
  const navigate = useNavigate();
  const handleClickContactInfo = () => {
    navigate("/contactInfo");
  };

  const onChangeEquipment = (index) => {
    setEquipmentInfoIndex(index);
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
                { label: "Co drugi dzień 2 godziny" },
                { label: "Godzina codziennie" },
                { label: "Obojętnie" },
              ]}
              isRequired={true}
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
                  options={[
                    {
                      label: "Mam drążek do podciągania",
                    },
                    {
                      label: "Mam hantle",
                    },
                    {
                      label: "Kurwa nie mam nic",
                    },
                  ]}
                />
              </Box>
            )}
            <Radio
              inputName={"Co jest twoim celem?"}
              options={[
                { label: "Chcę schudnąć" },
                { label: "Chcę zbudować mięśnie" },
                { label: "sieg heil kurwy " },
              ]}
              isRequired={true}
            />
            <TextInput
              label="Coś tam jeszcze wymyśle"
              tooltipText="tooltipText"
              // errorMessage="errorMessage"
              type="number"
              isRequired={true}
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
              onClick={() => handleClickContactInfo()}
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
