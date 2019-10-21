import React, { useState, useEffect } from "react";
import "./App.css";

import reactcord from "./reactcord.png";
import { Grid, Input, Divider } from "semantic-ui-react";
import { general, resources, assignments } from "./messagedata";

/**
 * The app that runs react-cord.
 */
function Reactcord() {
  const [currentChannel, setCurrentChannel] = useState("General");
  const [generalMessages, setGeneralMessages] = useState(general);
  const [resourceMessages, setResourceMessages] = useState(resources);
  const [assignmentMessages, setAssignmentMessages] = useState(assignments);

  const Chatters = () => {
    return <p>This is where the list of chatters will be.</p>;
  };

  /**
   * The container of messages within the appropriate channel.
   *
   * @param {title, index, messages, channelMenu} param0
   */
  const Channel = ({ title, index, messages = [], channelMenu }) => {
    if (channelMenu !== title) return null;

    return (
      <div>
        <h4 style={{left: "0px", position:"absolute", padding: "10px"}}>#{title}</h4><br></br>
        <Divider inverted />
        {messages.map(message => (
          <div>
            <p>
              <h4 style={{ fontWeight: "bold" }}>{message.senderId}</h4>
              <div>{message.timestamp}</div>
            </p>
            <div>
              {message.text}{" "}
              <button onClick={() => removeMessage(index)}>X</button>{" "}
              <Divider />
            </div>

            <br></br>
          </div>
        ))}

        {messages.length === 0 && (
          <div style={{ fontWeight: "bold" }}>
            <br></br>Welcome to the beginning of the #{title} .
          </div>
        )}
      </div>
    );
  };

  function editMessage(e, i) {
    if (currentChannel === "General") {
      const newGeneralMessages = [...generalMessages];
      newGeneralMessages[i].content = e.target.value;
      setGeneralMessages(newGeneralMessages);
    }
    if (currentChannel === "Resources") {
      const newResourcesMessages = [...resourceMessages];
      newResourcesMessages[i].content = e.target.value;
      setResourceMessages(newResourcesMessages);
    }
  }

  const removeMessage = (index) => {
    if (currentChannel === "General") {
      const newGeneralMessages = [...generalMessages];
      newGeneralMessages.splice(index, 1);
      setGeneralMessages(newGeneralMessages);
    }
    if (currentChannel === "Resources") {
      const newResourcesMessages = [...resourceMessages];
      newResourcesMessages.splice(index, 1);
      setResourceMessages(newResourcesMessages);
    }
    
  };

  /**
   *
   * Adds a message to the channel you are on.
   *
   * @param {addMessage} param0
   */
  function MessageInput({ addMessage }) {
    const [value, setValue] = useState("");

    //Note, figure out how to set If channel = channel, setMessage to this particular channel

    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addMessage(value);
      setValue("");
    };

    return (
      
      <form onSubmit={handleSubmit}>
        
        <Input
          size = "large"
          style= {{width:"300px"}}
          placeholder="Message #{channel}..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }

  /**
   * This is the sidebar that allows you to select the channels you want to navigate between.
   *
   * @param {setChannel} param0
   */
  const ChannelMenu = ({ setChannel }) => {
    const channels = ["General", "Assignments", "Resources"];
    return (
      <div>
        {channels.map(channel => (
          <p onClick={() => setChannel(channel)}>{channel}</p>
        ))}
      </div>
    );
  };

  const addMessage = text => {
    if (currentChannel === "General") {
      const newGeneralMessages = [
        ...generalMessages,
        { senderId: "You", text }
      ];
      setGeneralMessages(newGeneralMessages);
    }
    if (currentChannel === "Resources") {
      const newResourcesMessages = [
        ...resourceMessages,
        { senderId: "You", text }
      ];
      setResourceMessages(newResourcesMessages);
    }

    if (currentChannel === "Assignments") {
      const newAssignmentMessages = [
        ...assignmentMessages,
        { senderId: "You", text }
      ];
      setAssignmentMessages(newAssignmentMessages);
    }

  };

  return (
    <div className="App">
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <div id="ChannelsContainer">
              <ChannelMenu setChannel={setCurrentChannel} />
              <br></br>
              <br></br>{" "}
              <img
                src={reactcord}
                className="reactcord-logo"
                alt="logo"
                height="200px"
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div id="MessagesContainer">
              <Channel
                title="General"
                messages={generalMessages}
                channelMenu={currentChannel}
                removeMessage={removeMessage}
              />
              <Channel
                title="Resources"
                messages={resourceMessages}
                channelMenu={currentChannel}
              />
              <Channel
                title="Assignments"
                messages={assignmentMessages}
                channelMenu={currentChannel}
              />
              <div id="InputContainer">
              
                <MessageInput addMessage={addMessage} /></div>
            </div>
            
          </Grid.Column>

          <Grid.Column>
            <div id="Chatters">
              <Chatters />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Reactcord;
