import { Header } from "../components/Header";
import { ControlledInputField } from "../components/controlled/ControlledInputField";
import { NextButton } from "../components/NextButton";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
// import { MongoClient } from "mongodb";

export const About = () => {
  // const MongoClient = new MongoClient(
  //   "mongodb+srv://admin:admin@customers.k8bl6.mongodb.net/?retryWrites=true&w=majority&appName=Customers"
  // );
  // const data = MongoClient.db().collection("Customers").find({}).toArray;
  // console.log("kjuuuuuurwaaaaaa", data);
  const { control, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Header />
      <Box sx={{ marginTop: "110px" }} />
      <Typography>dupa</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInputField
          label="imie"
          tooltipText="wprowadź imię"
          isRequired="true"
          type="string"
          control={control}
          name="imie"
        />
        <NextButton type="submit" buttonName="Submit"></NextButton>
      </form>
    </>
  );
};
