import React from "react";
import "./App.css";
import Channels from "./Channels";
import Messages from "./Messages";
import Chatters from "./Chatters";
import reactcord from "./reactcord.png";
import { Button, Container, Input, List, Radio } from "semantic-ui-react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="ui vertically divided grid">
          <div class="three column row">
            <div class="column">
              <div id="ChannelsContainer">
                <Channels />
                <br></br>
                <br></br>{" "}
                <img
                  src={reactcord}
                  className="reactcord-logo"
                  alt="logo"
                  height="200px"
                />
              </div>
            </div>
            <div class="column">
              <div id="MessagesContainer">
                <Messages />
              </div>
            </div>

            <div class="column">
              <div id="Chatters">
                <Chatters />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
