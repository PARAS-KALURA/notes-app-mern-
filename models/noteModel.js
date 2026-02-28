// 👉 Model = shape of your data in database
//How a note should look

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  
  }
);

const Note = mongoose.model("Note", noteSchema); //👉 "Hey MongoDB, create a collection called Notes using this blueprint."

module.exports = Note;