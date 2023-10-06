const express = require("express");
const cors = require("cors");
require("./db/db");
const Employee = require("./models/employee");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome Page</h1>");
});

app.get("/employees", async (req, res) => {
  let employees = await Employee.find();
  if (employees.length > 0) {
    res.send(employees);
  } else {
    res.send({ result: "No details found" });
  }
});

app.listen(5000, () => {
  console.log("Server is listening at port : 5000");
});
