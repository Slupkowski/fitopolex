import { Controller } from "react-hook-form";
import { TextInput } from "../TextInput";
export const ControllerInputField = ({
  label,
  tooltipText,
  isRequired = false,
  type = "string",
  unit = "",
  control,
  name,
}) => {
  return (
    <Controller
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextInput
          label={label}
          tooltipText={tooltipText}
          value={!value ? (type == "string" ? "" : 0) : value}
          onChange={onChange}
          errorMessage={error?.message}
          isRequired={isRequired}
          type={type}
          unit={unit}
        />
      )}
      name={name}
      control={control}
      defaultValue={type == "string" ? "" : 0}
    />
  );
};
