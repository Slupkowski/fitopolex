import { Checkbox } from "../CheckBox";
import { useEffect } from "react";
export const ControlledCheckbox = ({
  inputName,
  options, // list of labels
  isRequired = false,
  setValue,
  name,
  control,
  watch,
}) => {
  const value = watch("houseEquipment");

  useEffect(() => {
    setValue("houseEquipment", [false, false, false, false]);
  }, []);

  const handleCheckboxChange = (index) => {
    let newValue = [...value];
    newValue[index] = !newValue[index];
    if (index == 3) {
      newValue = [false, false, false, true];
    }
    setValue("houseEquipment", newValue);
  };

  return (
    <>
      <input type="hidden" {...control.register(name)} />
      <Checkbox
        inputName={inputName}
        options={options}
        value={value ?? [false, false, false, false]}
        onChange={handleCheckboxChange}
        isRequired={isRequired}
      />
    </>
  );
};
