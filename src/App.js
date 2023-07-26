import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(["Easing travel for frequent flyers", "Aircraft Exterioir defect API"])

  function createTodo(params) {
    setTodos(oldTodos => {
      return [...oldTodos, task]
    })
  }

  return (
    <div className="App">
      <h1>Best To Do app ever</h1>
      <input type="text" value={task} onChange={event => {
        setTask(event.target.value)
      }}
      />
      <button onClick={createTodo}>Create</button>
      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
          })}
      </ul>

    </div>
  );
}

export default App;
