// server/index.js

const express = require("express");
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors())

console.log(app)

app.get('/', (req, res) => {
  res.send('Hello from our server!')
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});