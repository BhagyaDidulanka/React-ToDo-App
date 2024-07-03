import { useState } from 'react';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Header } from './components/Header';
import './App.css';


function App() {
  const[taskList,setTasklist]=useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask taskList={taskList} setTasklist={setTasklist}/>
      <ShowTask taskList={taskList} setTasklist={setTasklist}/>
    </div>
  );
}

export default App;
