import React from "react";
import { useTodo } from "../context/TodoContext";
function TaskItem({todo}) {
  const { dispatch } = useTodo();
  return (
    <div>
      <button onClick={() => dispatch({type: "SET_EDITING_ID" , payload : todo.id})}>Edit</button>
      <button onClick={() => dispatch({type : "DELETE_TASK", payload : todo.id})}>Delete</button>
      <input type="checkbox"  onClick={() => dispatch({type : "TOGGLE_COMPLETE" , payload : todo.id})}/> 
    </div>
  );
}

export default TaskItem;
