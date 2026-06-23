const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const employeeRoutes =
require("./routes/employeeRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ERP Backend Running");
});

app.use(
"/api/employees",
employeeRoutes
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});