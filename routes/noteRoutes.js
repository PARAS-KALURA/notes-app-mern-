const express = require("express");
const router = express.Router();
const Note = require("../models/noteModel");

// Create note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required!" });
    }

    const newNote = await Note.create({
      title,
      content,
    });

    res.status(201).json(newNote);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Put - edit
// Put - edit
router.put("/:id", async (req, res) => {
  try {

    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required!" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // returns updated version
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get
router.get("/", async (req, res) => {
  try {

    const notes = await Note.find().sort({ createdAt: -1 });

    res.status(200).json(notes);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

module.exports = router;