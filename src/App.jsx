import React from 'react'
import { TodoProvider } from './context/TodoProvider';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  return (
    <div>
      <TodoProvider>
        <TaskForm />
        <TaskList />
      </TodoProvider>


    </div>
  )
}

export default App
