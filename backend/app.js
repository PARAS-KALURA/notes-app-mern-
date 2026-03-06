const express = require("express");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// enable CORS
app.use(cors({
  origin: "https://notes-app-mern-seven.vercel.app"
}));

app.use(express.json());

// routes
app.use("/api/notes", noteRoutes);

module.exports = app;