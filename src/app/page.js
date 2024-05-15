"use client";
import React, { useState } from "react";

const page = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const [fetchTask, setFetchTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchTask([...fetchTask, { taskName, taskDes }]);
    setTaskName("");
    setTaskDes("");
  };

  const renderTasks = () => {
    return fetchTask.length === 0 ? (
      <h3>No Task Available</h3>
    ) : (
      fetchTask.map((task, index) => (
        <div key={index} className="p-2">
          <h1 className="font-bold">{task.taskName}</h1>
          <p>{task.taskDes}</p>
        </div>
      ))
    );
  };

  const preview = <h3>No Task Available</h3>;

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
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            console.log(setTaskName);
          }}
        />
        <input
          type="text"
          className="border-2 border-gray-300 p-2 w-[55%] m-2"
          placeholder="Add Description here..."
          value={taskDes}
          onChange={(e) => {
            setTaskDes(e.target.value);
            console.log(setTaskDes);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add
        </button>
      </form>
      <div className="bg-slate-300 text-black h-16 mt-8">{renderTasks()}</div>
    </>
  );
};

export default page;
