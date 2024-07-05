import { useState,useEffect } from 'react';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Header } from './components/Header';
import './App.css';


function App() {
  
  const [taskList, setTasklist] = useState(() => {
    const savedTasks = localStorage.getItem('taskList');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const[task,setTask]=useState({});

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask 
      taskList={taskList} 
      setTasklist={setTasklist}
      task={task}
      setTask={setTask}
      />
      <ShowTask 
      taskList={taskList}
      setTasklist={setTasklist}
      task={task}
      setTask={setTask}
      />
    </div>
  );
}

export default App;
