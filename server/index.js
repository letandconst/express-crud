const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const volleyball = require("volleyball");

const app = express();

require("dotenv").config();

// Routes
const routes = require("./routes");

app.use(volleyball);
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Access API
app.use("/", routes);

// Connect to Database
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) throw err;
    console.log("Connected to the Database");
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
