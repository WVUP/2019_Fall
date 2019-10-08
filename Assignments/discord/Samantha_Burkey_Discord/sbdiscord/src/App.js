import React, { useState } from 'react';
import './App.css';
import { Button, Container, Input, List, Radio } from 'semantic-ui-react';
import moment from 'moment';

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
      completed: true,
      dateCreated: moment(new Date()).subtract('1', 'hours'),
      priority: 'low'
    },
    {
      id: 2,
      label: 'Fake data',
      completed: false,
      dateCreated: moment(new Date()).subtract('2', 'day'),
      priority: 'low'
    }
  ]);

  /**
   * 
   * @param {string} todoId The id of the todo
   * 
   * Map our todos and find the todo that has been toggled to completed/not completed
   */
  const handleToggle = (todoId) => {
    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    // Now that we have our data lets update our state store
    setTodos(newTodos);
  }

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
                <Radio toggle style={{ verticalAlign: 'unset' }} disabled checked={todo.completed} />
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
                </List.Content>
              </List.Item>
            )
          }

          return (
            <List.Item>
              <Radio toggle style={{ verticalAlign: 'unset' }} onClick={() => {
                handleToggle(todo.id);
              }} checked={todo.completed} />
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

                {!todo.completed && <List.Description as='a'>{relativeTime}</List.Description>}
              </List.Content>
            </List.Item>
          );
        })
      }

      <List.Item>
        <List.Icon name="add" size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as="a" style={{ paddingTop: '4px' }}>Add ToDo</List.Header>
        </List.Content>
      </List.Item>

    </List>
  );
}

function App() {
  return (
    <Container>

      <Container fluid textAlign="center">
        <Input icon='tags'
          iconPosition='left'
          label={{ tag: true, content: 'Add ToDo' }}
          labelPosition='right'
          placeholder='Enter a todo...' />
      </Container>

      <TodoList />


      {/* Just for you!
      <div>
        <Button primary>Test Button</Button>
        <Button secondary>Secondary Button</Button>
      </div> */}

    </Container>
  );
}

export default App;
