// Mikael Hinton
// Discord App
// Aaron Freeland

import React, { useState } from "react";
import moment from "moment";

import { Button, Input, List, Icon, Tab } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "./App.css";

function Discord({ state, setState, edittexts, deletetexts, text }) {
  return (
    // List of text on screen`
    <List divided>
      {text.map(texts => {
        if (texts.id === state.textsId) {
          // Edit
          return (
            <List.Item>
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
                  <Button onClick={() => edittexts()}>
                    Save Edit
                  </Button>
                </List.Header>
            </List.Item>
          );
        }

        // Delete
        return (
          <List.Item>
              <List.Header
                as="a"
                onClick={() => {
                  setState({
                    textsId: texts.id,
                    value: texts.text
                  });
                }}
              >
              {texts.text}           
              <Button onClick={() => deletetexts(texts.id)}>
                Delete
              </Button>
              </List.Header>  
          </List.Item>
        );
      })}
    </List>
  );
}

// Function to set state
function App() {
  const [inputText, setInputText] = useState("");
  const [state, setState] = useState({
    textsId: null,
    value: null
  });

  // Test data 
  const [text, settext] = useState([
    {
      id: 1,
      text: "FREELAND IS AWESOME",
      time: moment(new Date()).subtract("5", "minutes")
    }
  ]);

  // Edit text
  const edittexts = () => {
    const updatedtext = text.map(texts => {
      if (texts.id === state.textsId) {
        texts.text = state.value;
        setState({
          textsId: null,
          value: null
        });
      }
      return texts;
    });
    settext(updatedtext);
  };
  
  // Adds text
  const addtexts = e => {
    e.preventDefault();
    const newtexts = {
      time: moment(new Date().fromNow),
      id: new Date().getSeconds(),
      text: inputText 
    };
    settext([...text, newtexts]);
  };
 
  // Delete text
  const deletetexts = id => {
    const newtext = text.filter(x => x.id !== id);
    settext(newtext);
  };
  return (
    <div className="App">
      <header>
        <h1>Discord App - Mikael Hinton</h1>
      </header>
      <body>
        <Discord
          state={state}
          setState={setState}
          edittexts={edittexts}
          deletetexts={deletetexts}
          text={text}       
        />
        <form onSubmit={addtexts}>
          <Input 
            type="text"
            placeholder="Message #General"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <Button>Send</Button>
        </form>
      </body>
    </div>
  );
}

export default App;