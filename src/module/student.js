const mongoose = require("mongoose");
const validator = require("validator");

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email id already present"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// model new colloection

const nana = new mongoose.model("nana",studentSchema);

module.exports = nana;

