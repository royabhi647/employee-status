const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: "String",
  role: "String",
  photo: "String",
  DOB: "String",
  Dept: "String",
  Email: "String",
  Designation: "String",
  Phone: "String",
});

module.exports = mongoose.model("employee", employeeSchema);
