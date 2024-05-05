import { useState } from "react";
import Task from "./Task";
import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />

      <div className="row">
        {tasks.map((taskItem, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              onDelete={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
