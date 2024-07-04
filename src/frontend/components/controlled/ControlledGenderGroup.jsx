import { useState, useEffect } from "react";
import { GenderGroup } from "../GenderGroup";
export const ControlledGenderGroup = ({
  label,
  isRequired = false,
  tooltipText = "",
  control,
  setValue,
  name,
  errorMessage,
}) => {
  const [gender, setGender] = useState("female");

  useEffect(() => {
    setValue(name, "female");
  }, []);

  const handleClick = (newValue) => {
    setGender(newValue);
    setValue(name, newValue);
  };
  return (
    <>
      <input type="hidden" {...control.register(name)} />
      <GenderGroup
        label={label}
        isRequired={isRequired}
        value={gender}
        onClick={handleClick}
        errorMessage={errorMessage}
        tooltipText={tooltipText}
      />
    </>
  );
};
