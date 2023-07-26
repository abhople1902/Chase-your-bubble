import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';

let globalID = 0

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(event) {
    event.preventDefault()
    setTodos(oldTodos => {
      setTask("")
      return [...oldTodos, {todo: task, id: globalID++}]
    })
  }


  function deleteItem(itemID){
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }

  return (
    <div className="App">
      <h1>Best To Do app ever</h1>
      <form onSubmit={createTodo}>
      <input type="text" value={task} onChange={event => {
        setTask(event.target.value)
      }}
      />
      <button type="submit">Create</button>
      </form>
      <ul>
        {todos.map((item) => {
          return <div key={item.id}>
            <li>{item.todo}</li>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        })}
      </ul>

    </div>
  );
}

export default App;
