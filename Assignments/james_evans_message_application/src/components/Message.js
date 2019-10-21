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
        return(
            <div style = {styles}>
                <p>{this.props.message.messageText}</p>
                <p>{this.props.message.timeOfDay}</p>
                <p>{this.props.message.who}</p> 
            </div>
        )
    }
}

export default Message