import React, { Component } from "react";
import { Button, Container, Input, List, Radio } from "semantic-ui-react";

import moment from "moment";

const generalMessages = [
  {
    senderId: "jennym1211",
    timestamp: "Today at 12:00 AM",
    text: "Welcome to react-cord!"
  },
  {
    senderId: "afreeland",
    timestamp: "Now",
    text: "Don't forget to turn in your assignments!"
  },

  {
    senderId: "johndoe",
    timestamp: "Now",
    text: "I wish I understood react better!"
  }
];

const resourceMessages = [
  {
    sender: "afreeland",
    timestamp: "Today at 12:00 AM",
    text:
      "Click on this link to learn about react hooks -> https://reactjs.org/docs/hooks-intro.html"
  }
];

const otherChannelMessages = [{}];

class Messages extends Component {
  addMessage(event) {
    event.preventDefault();

    this.setState({
      generalMessages: [
        ...this.state.generalMessages,
        {
          senderId: "senderName",
          timestamp: new Date(),
          text: event.target.item.value
        }
      ]
    });

    event.target.item.value = "";
  }

  render() {
    const generalMessageList = generalMessages.map(generalMessage => (
      <li>
        <b>{generalMessage.senderId} </b>
        {generalMessage.timestamp}
        <br></br>
        <br></br>
        {generalMessage.text}
        <div class="ui divider"></div>
      </li>
    ));
    return (
      <div className="messageList">
        <ul>
          <div>{generalMessageList}</div>
        </ul>

        <form>
          <div class="ui input">
            <input
              type="text"
              placeholder="Message {Channel Name}"
              name="item"
              className="item"
            />
          </div>
          <button class="ui button">Add</button>
        </form>
      </div>
    );
  }
}

export default Messages;
