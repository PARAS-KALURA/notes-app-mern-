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

module.exports = router;