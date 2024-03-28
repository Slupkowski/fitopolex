import axios from 'axios';
import { Button } from '@mui/material'
import { Header } from './components/Header'

const App = () => {
  const apiCall = () => {
    axios.get('http://localhost:3000').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }

  return (
    <div>
        <Header/>
        <p className="text-3xl font-bold underline"> Grypsuje...</p>
        <button onClick={apiCall}>Make API Call</button>
        <Button>Tomek</Button>
        <Button variant="contained" size="large" color="error">ZARA TO ROZPIERDOLE</Button>
    </div>
  );
}
export default  App;
