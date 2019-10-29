import React from "react"
import uuid from 'uuid';
import Message from "./Message"
import AddMessage from "./AddMessage"


const styles = {
    backgroundColor: "#6C6C6C",
    paddingTop: 10,
    paddingBottom:10,
    fontFamily: "Helvetica",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    width: "50%",
    height: 1000,
    float: "left",

}

class Content extends React.Component{
    state = {
        messages:
            [
                
            ]
    }

    //deletes message
    delMessage = (id) => {
        console.log(id)
        this.setState({ messages: [...this.state.messages.filter(message => message.id !== id)] });
    }

    //add message
    addMessage = (messageText) => {
        console.log(messageText);
        const newMessage = {
            id: uuid.v4(),
            messageText
        }
        this.setState({ messages: [...this.state.messages, newMessage] })
    }

    render(){
        return(
            <div style = {styles}>
                <p># AaronFreelandsClass</p>
                {this.state.messages.map(x => 
                    <Message
                        message={{ id: x.id, messageText: x.messageText, timeOfDay: Date()}}
                        key={x.id}
                        deleteMessage={this.delMessage}
                    />
                    )}
                <AddMessage addMessage={this.addMessage} />
            </div>
        )
    }
}

export default Content