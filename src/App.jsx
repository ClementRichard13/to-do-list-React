import { useState } from "react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({
      title: input,
      isDone: false,
    });
    setTasks(newTab);
    setInput("");
  };

  const handleCheck = (index) => {
    const newTab = [...tasks];
    newTab[index].isDone = !newTab[index].isDone;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    const tab = [];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <input
              checked={task.isDone ? true : false}
              type="checkbox"
              onChange={() => {
                handleCheck(index);
              }}
            />
            <span className={task.isDone ? "done-task" : null}>
              {task.title}
            </span>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <form onSubmit={handlesubmit}>
        <input
          value={input}
          type="text"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default App;
