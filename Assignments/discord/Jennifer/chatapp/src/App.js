import React, { useState, useEffect } from "react";
import "./App.css";

//import Messages from "./Messages";
import reactcord from "./reactcord.png";
import { Grid, Input } from "semantic-ui-react";
import { general, resources } from "./messagedata";

const Chatters = () => {
  return <p>This is where the list of chatters will be.</p>;
};

const Channel = ({ title, messages = [], channelMenu }) => {

  if (channelMenu !== title) return null;

  return (
    <div>
      <h4>{title}</h4>
      {messages.map(message => (
        <div>
          <div>{message.senderId}</div>
          <div>{message.timestamp}</div>
          <div>{message.text}</div>
        </div>
      ))}

      {messages.length === 0 && (
        <div style={{ fontWeight: "bold" }}>
          Welcome to the beginning of the #{title} .
        </div>
      )}
    </div>
  );
};

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

const MessageInput = () => <Input placeholder='Message #{channel}...' />


function App() {
  const [currentChannel, setCurrentChannel] = useState("General");
  const [generalMessages, setGeneralMessages] = useState(general);
  const [resourceMessages, setResourceMessages] = useState(resources);

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
              />
              <Channel title="Resources" messages={resourceMessages }  channelMenu={currentChannel}/>
              <Channel title="Assignments" messages={[]}  channelMenu={currentChannel}/>
            </div>
            <MessageInput/>
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

export default App;
