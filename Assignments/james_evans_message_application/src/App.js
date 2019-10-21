import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Channels from "./components/Channels"
import Friends from "./components/Friends"
import uuid from 'uuid';

class App extends React.Component {
    state = {
        messages:
        [
            {
                id: uuid.v4(),
                messageText: "Message Text is here..."
            }
        ]
    }

    //deletes message
    delMessage = (id) => {
        this.setState({ messages: [...this.state.messages.filter(message => message.id !== id)] });
    }

    //add message
    addMessage =(messageText) => {
        const newMessage = {
          id: uuid.v4(),
          messageText
        }
        this.setState({ message: [...this.state.messages, newMessage] })
      }
    render(){
        return(
            <div>
                <Header />
                <Channels /> 
                <Content />
                <Friends />
            </div>
        );
    }
}

export default App