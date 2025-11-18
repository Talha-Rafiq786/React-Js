import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState('')
  
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4    "
      >
        <input
          className="px-4 w-1/2 py-5 font-medium border-2 rounded-2xl "
          type="text"
          placeholder="Enter Notes Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          className="px-4 font-medium w-1/2 h-30 py-2 border-2 rounded-2xl"
          type="text"
          placeholder="Text"
        />

        <button className="bg-white w-1/2 text-black rounded-2xl cursor-pointer text-4xl px-4 py-5">
          Add Notex
        </button>

      </form>

      <div className="py-10">

        <h1 className="text-4xl font-bold">Your notes</h1>

        <div className="flex gap-5 ">

          <div className="h-52 w-45 rounded-2xl bg-amber-50 mt-5  "></div>

          <div className="h-52 w-45 rounded-2xl bg-amber-50 mt-5  "></div>

        </div>
      </div>
    </div>
  );
};

export default App;
