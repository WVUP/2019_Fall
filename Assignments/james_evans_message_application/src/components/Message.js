import React, { Component } from "react"
import PropTypes from 'prop-types'

const styles = {
    paddingLeft: 50,
    paddingRight: 50,
    borderBottom: "solid",
    fontFamily: "Helvetica",
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "left",
}

export class Message extends Component {
    render(){
        const { id, messageText } = this.props.message;
        const { deleteMessage } = this.props;
        return(
            <div style = {styles}>
                <p>{this.props.message.messageText}</p>
                <p>{this.props.message.timeOfDay}</p>
                <p>{this.props.message.who}</p> 
                <button onClick={() => deleteMessage(id)}>delete</button>
            </div>
        )
    }
}



export default Message