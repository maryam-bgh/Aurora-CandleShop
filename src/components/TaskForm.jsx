import React, { useEffect } from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useTodo();
  const { todos, editingId } = state;

  useEffect(() => {
    if (editingId) {
      const todo = todos.find((todo) => todo.id === editingId);
      if (todo) {
        setTask(todo.text);
        setIsOpen(true);
      }
    }
  }, [todos, editingId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch({ type: editingId ? "EDIT_TODO" : "ADD_TASK", payload: task });
    setTask("");
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Add Task</button>
      </div>
     {isOpen &&  <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>{editingId ? "Update" : "Submit"}</button>
      </form>}
    </div>
  );
};

export default TaskForm;
