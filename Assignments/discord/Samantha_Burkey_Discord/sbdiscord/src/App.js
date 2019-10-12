import React, { useState } from 'react';
import './App.css';
import { Button, Container, Input, List, Radio } from 'semantic-ui-react';
import moment from 'moment';

const Header = () => {
  return(
    <div>
      <h1>Discord App</h1>
    </div>
  )
};

function TodoList() {
  const [state, setState] = useState({
    // The id of the todo that the user is trying to edit
    currentEditableTodoId: null,
    // This is a storage for the actual input value when it changes
    // It will be used to update the todo label once they save their changes
    editValue: null,
  });
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: 'Sample todo..',
      dateCreated: moment(new Date()).subtract('1', 'hours'),
      priority: 'low'
    },
    {
      id: 2,
      label: 'Fake data',
      dateCreated: moment(new Date()).subtract('2', 'day'),
      priority: 'low'
    }
  ]);

  /**
   * Here we want to actually take the data the user entered and update
   * the todo that they were trying to edit =)
   */
  const handleEdit = () => {
    const updatedTodos = todos.map(todo => {
      // If we find the todo, lets put in some work
      if (todo.id === state.currentEditableTodoId) {
        // Use the value of the input that they have been typing
        todo.label = state.editValue;

        // Reset the state so the next edit is off to a clean start
        setState({
          currentEditableTodoId: null,
          editValue: null
        });
      }
      return todo;
    })

    // Update our todo state store
    setTodos(updatedTodos);
  }

  /*const addTextItem = () => {
    const handleAdd = todos.map(tofo => {
      moment(new Date());
      
    })
  }

  const deleteItem = () => {
    const handleDelete = todos.map(todo => {
      event.preventDefault();
      this.setState({

      })
    })
  }*/

  return (
    <List divided relaxed>
      {
        todos.sort((a, b) => a.completed - b.completed).map(todo => {
          // Lets take the date and generate a relative time that is friendly
          const relativeTime = moment(todo.dateCreated).fromNow()
          const labelStyle = {};
          // We would like a specific style to use when a todo is completed for the ux
          if (todo.completed) {
            labelStyle.textDecoration = 'line-through';
          }

          // Since we now keep track of the todo the user wants to edit, we can handle this 
          // specifically and render out a custom input option inline
          if (todo.id === state.currentEditableTodoId) {
            return (
              <List.Item>
                <List.Content style={{
                  display: 'inline-block',
                  paddingLeft: '20px'
                }}>
                  <List.Header as='a' style={labelStyle}>
                    <Input value={state.editValue} onChange={(event, { value }) => {
                      // Every time the user types we need to update our `editValue` so that
                      // we have a safe way to edit a todo in an immutable fashion
                      setState({
                        // Spread the current state so we do not lose any values
                        ...state,
                        // Update our temporary label holder while the user is working
                        editValue: value
                      })
                    }} />
                    <Button primary onClick={handleEdit}>Save</Button>
                  </List.Header>
                  <Button /*primary onClick={handleDelete}*/>Delete</Button>
                </List.Content>
              </List.Item>
            )
          }

          return (
            <List.Item>
              <List.Content style={{
                display: 'inline-block',
                paddingLeft: '20px'
              }}>
                <List.Header as='a' style={labelStyle} onClick={() => {
                  if (todo.completed) return;
                  setState({
                    currentEditableTodoId: todo.id,
                    editValue: todo.label
                  })
                }}>{todo.label}</List.Header>
                {!todo.completed && <List.Description as='a' style={{
                  paddingBottom: '10px'
                }}>{relativeTime}</List.Description>}
                <Button /*primary onClick={handleDelete}*/>Delete</Button>
              </List.Content>
            </List.Item>
          );
        })
      }
    </List>
  );
}

function App() {
  return (
    <Container>
      <Header />

      <Container fluid textAlign="center">
        <Input 
          type="text" 
          placeholder="Enter text..." />
        <Button class="ui button" /*primary onClick={handleAdd}*/>Enter</Button>
      </Container>

      <TodoList />

    </Container>
  );
}

export default App;
