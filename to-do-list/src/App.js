import React from 'react';
import './App.css';
import List from './List';
import Task from './Task';

function App() {

  const [tasks, setTasks] = setState([])

  const addTask = taskName => {
    setTasks(oldTaskList => [...oldTaskList, taskName])
  }


  return (
    <List />,
    <Task />
  );
}

export default App;
