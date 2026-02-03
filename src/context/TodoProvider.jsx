import { TodoContext } from "./TodoContext";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

export const TodoProvider = ({ children }) => {
  const initialState = {
    todos: [],
    filter: "all",
    editingId: null,
  };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <div>
      <TodoContext.Provider value={{ state, dispatch }}>
        {children}
      </TodoContext.Provider>
    </div>
  );
};
