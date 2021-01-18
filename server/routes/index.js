const express = require("express");

const crudApi = require("./api");

const main = express.Router();

main.use("/api", crudApi);

module.exports = main;
