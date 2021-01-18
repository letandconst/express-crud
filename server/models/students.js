const mongoose = require("mongoose");

const requiredString = {
  type: String,
  required: true,
};

const studentSchema = new mongoose.Schema({
  studentID: {
    ...requiredString,
  },
  firstName: {
    ...requiredString,
  },
  lastName: {
    ...requiredString,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  address: {
    ...requiredString,
  },
});

module.exports = mongoose.model("Students", studentSchema);
