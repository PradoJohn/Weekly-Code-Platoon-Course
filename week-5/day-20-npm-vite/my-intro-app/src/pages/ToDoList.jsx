import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState('');

  const handleNewTask = (event) => {
    event.preventDefault();

    if (taskValue.trim() === '') {
      return; // Don't add empty tasks
    }

    const newTask = {
      text: taskValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskValue('');
  };

  const handleTaskCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteCheckedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">To Do List</h1>
        {/* Handle New Tasks */}
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            id="task"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          />

          <button id="task-btn" type="submit">
            Create Task
          </button>
        {/* Handles the checked lists in the ToDo List */}
        </form>
        <div className='dlt-btn-container'>
          <button onClick={handleDeleteCheckedTasks} id="delete-btn">
          <i class="icon fa fa-trash"></i>
          </button>
        </div>
        
        {/* Task list */}
        <ol id="task-list">
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCheckboxChange(index)}
              />
              {task.text}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}

export default ToDoList;
