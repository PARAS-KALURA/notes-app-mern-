import React from "react";

function App() {
  return (
    <div className="h-screen w-screen bg-yellow-200">
      
      {/* Main Container */}
      <div className="w-full h-full bg-[#fff9db] rounded-none p-10 shadow-inner">
        
        {/* Add Note Section */}
        <div className="flex items-center gap-4 mb-10">
          
          <button className=" cursor-pointer w-12 h-12 bg-yellow-100 border border-yellow-400 rounded-lg flex items-center justify-center text-2xl shadow-md hover:scale-105 transition">
            +
          </button>

          <h2 className="text-2xl font-bold text-gray-900 " >
            Note
          </h2>

        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-4 gap-10">
          
          <div className="h-40 rounded-lg bg-red-200 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-green-200 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-blue-200 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-stone-200 shadow-md cursor-pointer hover:scale-105 transition"></div>

          <div className="h-40 rounded-lg bg-teal-700 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-yellow-400 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-orange-500 shadow-md cursor-pointer hover:scale-105 transition"></div>
          <div className="h-40 rounded-lg bg-orange-600 shadow-md cursor-pointer hover:scale-105 transition"></div>

        </div>

      </div>
    </div>
  );
}

export default App;