import axios from "axios";
import { Route, Routes } from "react-router";
import { Contact } from "./pages/Contact";
import { Plans } from "./pages/Plans";
import { Welcome } from "./pages/Welcome";
import { About } from "./pages/About";
import { GainMuscle } from "./pages/GainMuscle";
import { GainWeight } from "./pages/GainWeight";
import { LoseWeight } from "./pages/LoseWeight";

const App = () => {
  // const apiCall = () => {
  //   axios.get("http://localhost:3000").then((data) => {
  //     //this console.log will be in our frontend console
  //     console.log(data);
  //   });
  // };

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
