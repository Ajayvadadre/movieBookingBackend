const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const routes = require("./routes/routes");
const connectDB = require("./models/connection")
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/home",routes)
app.get("/", (req, res) => {
  res.send("Hi");
});

const start = async() => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log("server Connected");
    });
  } catch (error) {
    console.log("this is the error" + error);
  }
};

start();
