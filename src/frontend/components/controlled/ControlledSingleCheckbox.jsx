import * as React from "react";
import { Checkbox, Box, Typography, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";

export const ControlledSingleCheckbox = ({
  inputName,
  isRequired = false,
  name, // name of the field in react-hook-form
  control, // fun from react-hook-form
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{
          fontSize: "14px",
        }}
      >
        {inputName}
        {isRequired ? <span style={{ color: "red" }}> *</span> : null}
        <Controller
          control={control}
          defaultValue={false}
          name={name}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              control={
                <Checkbox size="small" checked={value} onChange={onChange} />
              }
              label=""
            />
          )}
        />
      </Typography>
    </Box>
  );
};
