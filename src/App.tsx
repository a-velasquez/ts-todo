import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  // return type void because not returning anything
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task...' name='task' onChange={handleChange}></input>
          <input type='number' placeholder='Deadline (in days)' name='deadline'></input>
        </div>
          <button>Add task</button>
      </div>
      <div className='todoList'></div>
    </div>
  );
}

export default App;
