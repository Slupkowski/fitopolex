// server/index.js
require("dotenv").config();
const {
  saveContactInfo,
  saveTrainingInfo,
  savePersonalInfo,
} = require("./controllers/Form");
const Email = require("email-templates");
const express = require("express");
const cors = require("cors");
const path = require("path");
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = process.env.PORT || 3000;

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

// mailowe sprawy

const email = new Email({
  message: {
    from: `"NodeJS" <${process.env.SENDER_EMAIL}>`,
  },
  //textOnly: true,
  send: true,
  //preview: false
  transport: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  },
});

app.post("/sendEmail", async (req, res) => {
  const { firstName, lastName, mailName, phoneNumber } = req.body;
  console.log(path.join(__dirname, "emails", "welcome"));
  email
    .send({
      template: path.join(__dirname, "emails", "welcome"),
      message: {
        to: mailName,
      },
      locals: {
        name: `${firstName} ${lastName}`,
      },
    })
    .then((result) => {
      console.log("Email sent to", mailName, result);
      res
        .status(200)
        .json({ status: "success", message: "Email sent successfully" });
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      res.status(500).json({
        status: "error",
        message: "Failed to send email, please try again.",
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
