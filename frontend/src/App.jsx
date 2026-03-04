import React, { useState } from "react";

function App() {
 
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen w-screen bg-yellow-200">
      
      {/* Main Container */}
      <div className="w-full h-full bg-[#fff9db] rounded-none p-10 shadow-inner">
        
        {/* Add Note Section */}
        <div className="flex items-center gap-4 mb-10">
          
          <button 
          onClick={() => setShowModal(true)}
          className=" cursor-pointer w-12 h-12 bg-yellow-100 border border-yellow-400 rounded-lg flex items-center justify-center text-2xl shadow-md hover:scale-105 transition">
            +
          </button>

          <h2 className="text-2xl font-bold text-gray-700 " >
            Note
          </h2>

        </div>

        {/* Sticky Notes Grid */}

        {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
    <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
      <h2 className="text-xl font-bold mb-4">Add Note</h2>
    </div>
  </div>
)}

        {notes.map((note) => (
  <div key={note.id} className="h-40 rounded-lg bg-yellow-200 p-4 shadow-md">
    <h3 className="font-bold">{note.title}</h3>
    <p className="text-sm mt-2">{note.content}</p>
  </div>
))}



      </div>
    </div>
  );
}

export default App;