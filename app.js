const express = require("express");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(express.json());

// VERY IMPORTANT
app.use("/api/notes", noteRoutes);

module.exports = app;