import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function detechChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  }
  function submitTask(event) {
    props.onAdd(task);
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="forms">
      <form>
        <input
          type="text"
          onChange={detechChange}
          className="form-control"
          name="title"
          value={task.title}
          placeholder="What will you to do?"
        />
        <textarea
          name="content"
          value={task.content}
          onChange={detechChange}
          className="form-control"
          rows={3}
          placeholder="Explain your work"
        ></textarea>
        <button className="btn btn-primary" onClick={submitTask}>
          Add
        </button>
      </form>
    </div>
  );
}
