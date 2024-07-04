import { Radio } from "../Radio";
export const ControlledRadio = ({
  inputName,
  options,
  tooltipText,
  isRequired = false,
  name,
  control,
  setValue,
}) => {
  const handleClick = (index) => {
    setValue(name, index);
  };
  return (
    <>
      <input type="hidden" {...control.register(name)} />
      <Radio
        inputName={inputName}
        options={options}
        onChange={handleClick}
        tooltipText={tooltipText}
        isRequired={isRequired}
      />
    </>
  );
};
