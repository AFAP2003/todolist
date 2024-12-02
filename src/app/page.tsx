"use client";

import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Create Guest Experience mobile check-in", done: false },
    { id: 2, text: "Document current CI/CD process", done: false },
    { id: 3, text: "Perform Code Review for final Pillow-Talk release", done: false },
    { id: 4, text: "Implement new Color Palette from Design Team", done: false },
    { id: 5, text: "Fix image uploading process for guest check-in", done: false },
    { id: 6, text: "Provide on-boarding documentation", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObject = { id: Date.now(), text: newTask, done: false };
      setTasks([...tasks, newTaskObject]); // Add to task list
      setNewTask(""); // Reset input field
    }
  };

  const handleDeleteTask = (id:number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleDone = (id:number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const doneCount = tasks.filter((task) => task.done).length;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-5">Chores ToDo List</h1>
      <div className="w-[600px] bg-gray-800 p-5 rounded-lg shadow-lg">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-row justify-between items-center mb-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleToggleDone(task.id)}
              />
              <label
                className={`${
                  task.done ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </label>
            </div>
            <button
              className="px-4 py-2 border border-[#CF4252] rounded-md hover:bg-[#CF4252] hover:text-white"
              onClick={() => handleDeleteTask(task.id)}
            >
              <img src="trash.png" alt="Delete" />
            </button>
          </div>
        ))}

        <hr className="my-5" />

        <div className="text-lg mb-4">Done: {doneCount}</div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add todo"
            className="flex-1 px-3 py-2 rounded-md border border-gray-600 bg-gray-700 text-white"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600"
            onClick={addTask}
          >
            ADD TASK
          </button>
        </div>
      </div>
    </div>
  );
}


