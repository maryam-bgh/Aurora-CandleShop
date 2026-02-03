import React from 'react'
import { useTodo } from '../context/TodoContext'
import TaskItem from './TaskItem';
function TaskList() {
    const {state} = useTodo()
    const {todos, filter} = state;

    const filteredTodos = todos.filter(todo => {
        if(filter === 'Completed') return todo.completed;
        if(filter === "Active") return !todo.completed;
        return true;
    })
  return (
    <div>
        <ul>
            {filteredTodos.map((todo) => (
                <li>{todo.text}
                <TaskItem />
                </li>

            ))}
        </ul>
    </div>
  )
}

export default TaskList