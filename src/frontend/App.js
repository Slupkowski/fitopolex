import axios from 'axios';

export default App = () => {

  const apiCall = () => {
    axios.get('http://localhost:3000').then((data) => {
      //this console.log will be in our frontend console
      console.log(data)
    })
  }

  return (
    <div className="App">
        <p> Grypsuje...</p>
        <button onClick={apiCall}>Make API Call</button>


    </div>
  );
}
