import {useContext, createContext} from "react";

export const TodoContext = createContext(null)

export const useTodo = () => {
    return useContext(TodoContext)
}