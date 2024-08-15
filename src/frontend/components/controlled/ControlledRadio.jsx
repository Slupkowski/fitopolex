import { CustomRadio } from "../Radio";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { WarningAmberOutlined } from "@mui/icons-material";
export const ControlledRadio = ({
  inputName,
  options,
  tooltipText,
  isRequired = false,
  name,
  control,
  setValue,
  errorMessage,
}) => {
  useEffect(() => {
    setValue(name, 99);
  }, []);
  const handleClick = (index) => {
    setValue(name, index);
  };
  return (
    <>
      <input type="hidden" {...control.register(name)} />
      <CustomRadio
        inputName={inputName}
        options={options}
        onChange={handleClick}
        tooltipText={tooltipText}
        isRequired={isRequired}
        errorMessage={errorMessage}
      />
      {/* {errorMessage && ()} */}
      {errorMessage ? (
        <Box sx={{ display: "flex", gap: "5px" }}>
          <WarningAmberOutlined sx={{ color: "red" }} />
          <Typography sx={{ color: "red", marginTop: "3px" }}>
            {errorMessage}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
