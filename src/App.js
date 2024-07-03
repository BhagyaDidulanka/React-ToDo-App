import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;
