import React from 'react';
import './App.css';
import TodoItems from './TodoItems';

const Header = () => {
  return(
    <div>
      <h1>Samantha Burkey Todo App</h1>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Todo />

    </div>
  );
}

class Todo extends React.Component{
  render() {
    return (
      <div className="App-header">
        <Header />
        <div className="todoList">
          <TodoItems />
        </div>
      </div>
    );
  }
}

export default Todo;
