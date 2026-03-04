import React, { useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  // SAVE OR UPDATE NOTE
  const handleSaveNote = () => {

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content.");
      return;
    }

    if (editingId) {

      // UPDATE NOTE
      const updatedNotes = notes.map((note) =>
        note.id === editingId
          ? { ...note, title, content }
          : note
      );

      setNotes(updatedNotes);
      setEditingId(null);

    } else {

      // CREATE NEW NOTE
      const newNote = {
        id: Date.now(),
        title,
        content
      };

      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
    setShowModal(false);
  };

  // DELETE NOTE
  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  // EDIT NOTE
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
    setShowModal(true);
  };

  return (
    <div className="h-screen w-screen bg-yellow-200">

      {/* Main Container */}
      <div className="w-full h-full bg-[#fff9db] p-10 shadow-inner">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">

          <button
            onClick={() => {
              setShowModal(true);
              setEditingId(null);
              setTitle("");
              setContent("");
            }}
            className="cursor-pointer w-12 h-12 bg-yellow-100 border border-yellow-400 rounded-lg flex items-center justify-center text-2xl shadow-md hover:scale-105 transition"
          >
            +
          </button>

          <h2 className="text-2xl font-bold text-gray-700">
            Notes
          </h2>

        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white w-96 p-6 rounded-xl shadow-xl">

              <h2 className="text-xl font-bold mb-4">
                {editingId ? "Edit Note" : "Add Note"}
              </h2>

              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-2 mb-3 rounded"
              />

              <textarea
                placeholder="Write your note..."
                className="w-full border p-2 mb-3 rounded"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <button
                onClick={handleSaveNote}
                className="cursor-pointer bg-yellow-300 px-4 py-2 rounded"
              >
                {editingId ? "Update Note" : "Save Note"}
              </button>

            </div>

          </div>
        )}

        {/* NOTES GRID */}

        <div className="grid grid-cols-4 gap-6">

          {notes.map((note) => (

            <div
              key={note.id}
              className="cursor-pointer h-40 rounded-lg bg-yellow-200 p-4 shadow-md hover:scale-105 transition flex flex-col justify-between"
            >

              <div>
                <h3 className="font-bold">{note.title}</h3>
                <p className="text-sm mt-2">{note.content}</p>
              </div>

              <div className="flex justify-end gap-2 mt-2">

                <button
                  onClick={() => handleEdit(note)}
                  className="cursor-pointer text-sm px-2 py-1 bg-gray-500 text-white rounded hover:scale-105 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteNote(note.id)}
                  className="cursor-pointer text-sm px-2 py-1 bg-red-700 text-white rounded hover:scale-105 transition"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default App;