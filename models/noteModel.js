// 👉 Model = shape of your data in database

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
    title:{
        type: String,
        required: true,
        trim: true,
    }, 
    content:{
        type: String,
        required: true,
    }, 
    timestamps: true,
    
});

const Note = mongoose.model("Notes", noteSchema); //👉 "Hey MongoDB, create a collection called Notes using this blueprint."

module.exports = Note;