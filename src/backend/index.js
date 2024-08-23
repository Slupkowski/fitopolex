// server/index.js
const {
  saveContactInfo,
  saveTrainingInfo,
  savePersonalInfo,
} = require("./controllers/Form");
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 3000;

const uri =
  "mongodb+srv://admin:admin@customers.k8bl6.mongodb.net/?retryWrites=true&w=majority&appName=Customers";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("Customers");
    const coll = db.collection("Customers");

    console.log("Retrieving documents from the collection...");
    const cursor = coll.find();

    // Check if cursor has documents
    const results = await cursor.toArray();
    if (results.length > 0) {
      console.log("Found documents:");
      results.forEach((doc, i) => {
        console.log(`${i + 1}: ${JSON.stringify(doc)}`);
      });
    } else {
      console.log("No documents found!");
    }
  } catch (err) {
    console.error(
      "An error occurred while connecting to MongoDB or retrieving data:",
      err
    );
  } finally {
    console.log("Closing MongoDB connection");
    await client.close();
  }
}
run().catch(console.dir);

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Endpoint do obsługi POST requestu
app.post("/contactInfo", (req, res) => {
  const formData = req.body; // Odebrane dane z formularza
  console.log("Received data:", formData);
  saveContactInfo(formData);

  // Tutaj możesz zrobić cokolwiek z danymi - przetworzyć je, zwrócić odpowiedź itp.
  res
    .status(200)
    .json({ message: "Data received successfully", data: formData });
});

app.post("/trainingInfo", (req, res) => {
  const formData = req.body; // Odebrane dane z formularza
  console.log("Received data:", formData);
  saveTrainingInfo(formData);

  // Tutaj możesz zrobić cokolwiek z danymi - przetworzyć je, zwrócić odpowiedź itp.
  res
    .status(200)
    .json({ message: "Data received successfully", data: formData });
});
app.post("/personalInfo", (req, res) => {
  const formData = req.body; // Odebrane dane z formularza
  console.log("Received data:", formData);
  savePersonalInfo(formData);

  // Tutaj możesz zrobić cokolwiek z danymi - przetworzyć je, zwrócić odpowiedź itp.
  res
    .status(200)
    .json({ message: "Data received successfully", data: formData });
});
app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
