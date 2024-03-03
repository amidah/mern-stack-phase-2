import React, { useState } from 'react';
import './App.css'

function App(){
  const[tasks, setTasks] = useState([]);
  const[newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if(newTask.trim() !== ""){
      setTasks([...tasks, {task: newTask, completed: false}]);
      setNewTask('');
    }
  }

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleToggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type='checkbox' checked={task.completed} onChange={() => handleToggleCompleted(index)}></input>
            <span className={task.completed ? 'completed' : ''}>{task.task}</span>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;