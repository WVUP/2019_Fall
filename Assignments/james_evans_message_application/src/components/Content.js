import React from "react"
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
    render(){
        return(
            <div style = {styles}>
                <p># AaronFreelandsClass</p>
                <Message
                    message={{messageText: "Hello", timeOfDay: Date(), who: "Jerry Jerrison"}} 
                />
                <Message 
                    message={{messageText: "Hola", timeOfDay: Date(), who:  "Harry Harrison"}}
                />
                <AddMessage addMessage = {this.addMessage} />
            </div>
        )
    }
}

export default Content