import axios from "axios";
import { Route, Routes } from "react-router";
import { Contact } from "./pages/Contact";
import { Plans } from "./pages/Plans";
import { Welcome } from "./pages/Welcome";
import { About } from "./pages/About";
import { GainMuscle } from "./pages/GainMuscle";
import { GainWeight } from "./pages/GainWeight";
import { LoseWeight } from "./pages/LoseWeight";
import { PersonalInfo } from "./pages/PersonalInfo";
import { TrainingInfo } from "./pages/TrainingInfo";
import { ContactInfo } from "./pages/ContactInfo";
import { Sent } from "./pages/Sent";
import { Fail } from "./pages/Fail";
import { BuyerForm } from "./pages/BuyerForm";

const App = () => {
  const apiCall = () => {
    axios.get("http://localhost:3000").then((data) => {
      //this console.log will be in our frontend console
      console.log(data);
    });
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gainmuscle" element={<GainMuscle />} />
        <Route exact path="/gainweight" element={<GainWeight />} />
        <Route exact path="/loseweight" element={<LoseWeight />} />
        <Route exact path="/personalinfo" element={<PersonalInfo />} />
        <Route exact path="/traininginfo" element={<TrainingInfo />} />
        <Route exact path="/contactinfo" element={<ContactInfo />} />
        <Route exact path="/sent" element={<Sent />} />
        <Route exact path="/fail" element={<Fail />} />
        <Route exact path="/buyerform" element={<BuyerForm />} />
      </Routes>
      {/* <p className="text-3xl font-bold underline"> Grypsuje...</p>
      <button onClick={apiCall}>Make API Call</button>
      <Button>Tomek</Button>
      <Button variant="contained" size="large" color="error">
        ZARA TO ROZPIERDOLE
      </Button> */}
    </div>
  );
};
export default App;
