import React, { useState } from "react";
import moment from "moment";

import { Button, Input, List, Icon, Tab } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";

function Discord({ comments, editComment, state, setState, deleteComment }) {
  return (
    <List divided relaxed>
      {comments.map(comment => {
        if (comment.id === state.commentId) {
          return (
            <List.Item>
              <List.Content>
                <List.Header>
                  <Input
                    value={state.editValue}
                    onChange={(event, { value }) => {
                      setState({
                        ...state,
                        value: value
                      });
                    }}
                  />
                  <Button onClick={() => editComment()}>
                    Save Edit
                  </Button>
                </List.Header>
              </List.Content>
            </List.Item>
          );
        }

        return (
          <List.Item>
            <List.Content>
              <List.Header
                as="a"
                onClick={() => {
                  setState({
                    commentId: comment.id,
                    value: comment.text
                  });
                }}
              >
              {comment.text}            
              <Button onClick={() => deleteComment(comment.id)}>
                Delete
              </Button>
              </List.Header>  
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
}

function App() {
  const [inputText, setInputText] = useState("");
  const [state, setState] = useState({
    commentId: null,
    value: null
  });
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "NEW COMMENT",
      time: moment(new Date()).subtract("1", "hours")
    }
  ]);

  const addComment = e => {
    e.preventDefault();
    const newComment = {
      id: new Date().getMilliseconds(),
      text: inputText,
      time: moment(new Date().fromNow)
    };
    setComments([...comments, newComment]);
  };
  const editComment = () => {
    const updatedComments = comments.map(comment => {
      if (comment.id === state.commentId) {
        comment.text = state.value;
        setState({
          commentId: null,
          value: null
        });
      }
      return comment;
    });

    // Update our todo state store
    setComments(updatedComments);
  };
  const deleteComment = id => {
    const newComments = comments.filter(x => x.id !== id);
    setComments(newComments);
  };
  return (
    <div className="App">
      <header>
        <h1>Discord App - Mikael Hinton</h1>
      </header>
      <body>
        <Discord
          deleteComment={deleteComment}
          editComment={editComment}
          comments={comments}
          state={state}
          setState={setState}
        />
        <form method="POST" onSubmit={addComment}>
          <Input 
            type="text"
            placeholder="Message #General"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </body>
    </div>
  );
}

export default App;