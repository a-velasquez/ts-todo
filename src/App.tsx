import React, {ChangeEvent, FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {}

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task...' onChange={handleChange}></input>
          <input type='number' placeholder='Deadline (in days)'></input>
        </div>
          <button>Add task</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
