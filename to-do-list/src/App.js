import React from 'react';
import './App.css';
import List from './List';
import Task from './Task';
import NewTask from './NewTask';

function App() {

  const [tasks, setTasks] = setState([])

  const addTask = taskName => {
    setTasks(oldTaskList => [...oldTaskList, taskName])
  }


  return (
    <List tasks={tasks}/>,
    <Task addTask={addTask} />,
    <NewTask addTask={addTask} />
  );
}

export default App;
