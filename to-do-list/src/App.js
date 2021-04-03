import React from 'react';
import './App.css';
import List from './List';
import Task from './Task';
import NewTask from './NewTask';
import Header from './Header'

function App() {

  const [tasks, setTasks] = React.useState([])

  const addTask = taskName => {
    setTasks(oldTaskList => [...oldTaskList, taskName])
  }


  return (
    <div>hello world
      <List tasks={tasks}/>,
      {/* <Task addTask={addTask} />, */}
      <Header/>,
      <NewTask addTask={addTask} />
    </div>  
  );
}

export default App;
