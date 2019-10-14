import React, {useState} from 'react';
import './App.css';

const toDoData = [
  {
    done: false,
    name: "Do React"
  },
  {
    done: false,
    name: "Drink Coffee"
  }
]

const useTodo = (todoList) => {
  const [todos, setTodos] = useState(todoList);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const updateTodo = (todo, index) => null;

  const removeTodo = (index) => null;

  return [todos, addTodo, updateTodo, removeTodo];
}

function App() {
  const [todos, addTodo] = useTodo(toDoData);

  return (
    <div className="App">
      <ToDoForm addTodo={addTodo}/>
      {todos.map((todo, index) => <ToDoItem todo={todo} key={index}/>)}
    </div>
  );
}

const ToDoForm = ({addTodo})  => {
  const [name, setName] =  useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({name, done});
  }

  return (<form onSubmit={handleSubmit}>
    <label>Enter a todo:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="checkbox" value={done} onChange={() => setDone(!done)}/>
    <button type="submit">Submit</button>
  </form>);
}

const ToDoItem = ( { todo: { done, name}}) => <div><input type="checkbox" checked={done} disabled/> {name}</div>

export default App;
