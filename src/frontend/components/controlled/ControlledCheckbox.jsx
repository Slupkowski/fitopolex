import { CustomCheckbox } from "../CheckBox";
import { useEffect } from "react";
export const ControlledCheckbox = ({
  inputName,
  options, // list of labels
  isRequired = false,
  setValue, // fun from react-hook-form
  name, // name of the field in react-hook-form
  control, // fun from react-hook-form
  watch, // fun from react-hook-form
}) => {
  const value = watch("houseEquipment");

  useEffect(() => {
    setValue("houseEquipment", [false, false, false, false]);
  }, []);

  const handleCheckboxChange = (index) => {
    const prevValue = watch("houseEquipment");

    let newValue = [...prevValue];
    newValue[index] = !newValue[index];
    if (index == 3) {
      newValue = [false, false, false, true];
    } else {
      newValue[3] = false;
    }
    setValue("houseEquipment", newValue);
  };

  return (
    <>
      <input
        type="hidden"
        {...control.register(name, { shouldUnregister: true })}
      />
      <CustomCheckbox
        inputName={inputName}
        options={options}
        value={value ?? [false, false, false, false]}
        onChange={handleCheckboxChange}
        isRequired={isRequired}
      />
    </>
  );
};
