const Student = require("../models/students");

exports.add = async (req, res) => {
  try {
    const { studentID, firstName, lastName, contactNumber, address } = req.body;
    const findStudent = await Student.findOne({ studentID });

    if (!studentID || !firstName || !lastName)
      return res.status(400).json({ message: "Please fill in all fields ! ⚠" });

    if (findStudent)
      return res.status(400).json({
        message: "This student is already exists! 🚫",
      });

    const student = new Student({
      studentID,
      firstName,
      lastName,
      contactNumber,
      address,
    });
    await student.save();
    res.json({
      message: "Student successfully Added ✔",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.edit = async (req, res) => {
  try {
    const { firstName, lastName, contactNumber, address } = req.body;
    await Student.findOneAndUpdate(
      { _id: req.params.id },
      {
        firstName,
        lastName,
        contactNumber,
        address,
      }
    );
    res.json({ message: "Student has been Updated ✔!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ msg: "Student has been deleted!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.display_all = async (req, res) => {
  try {
    let students = await Student.find();
    return res.json(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
