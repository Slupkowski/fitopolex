import axios from 'axios';
import { Button } from '@mui/material'

export default App = () => {

  const apiCall = () => {
    axios.get('http://localhost:3000').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }

  return (
    <div className="App">
        <p className="text-3xl font-bold underline"> Grypsuje...</p>
        <button onClick={apiCall}>Make API Call</button>
        <Button>Tomek</Button>

    </div>
  );
}
