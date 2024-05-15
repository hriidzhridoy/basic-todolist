"use client";
import React, { useState } from "react";

const page = () => {
  const [firstTask, setFirstTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstTask);
    setFirstTask("");
  };
  return (
    <>
      <h1 className="text-2xl text-center bg-black text-white py-4">
        My To Do list
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-2 border-gray-300 p-2 w-44 m-2"
          placeholder="Add a task"
          value={firstTask}
          onChange={(e) => {
            setFirstTask(e.target.value);
            console.log(firstTask);
          }}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Add
        </button>
      </form>
    </>
  );
};

export default page;
