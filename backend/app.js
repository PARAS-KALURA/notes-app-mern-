const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());   // allow requests

app.use(express.json());

app.use("/api/notes", noteRoutes);

module.exports = app;