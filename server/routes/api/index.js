const express = require("express");
const api = express.Router();

// Controllers
const studentController = require("../../controllers/studentController");

api.get("/", (req, res) => {
  res.json({
    message: "Welcome Aboard😊",
  });
});

// Student Routes
api.post("/add-student", studentController.add);

api.patch("/edit-student/:id", studentController.edit);

api.delete("/delete-student/:id", studentController.delete);

api.get("/list-of-student", studentController.display_all);

module.exports = api;
