import React, { Component } from 'react'

export class AddMessage extends Component {
    state = {
        messageText: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.messageText);
        this.setState({ messageText: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input type= "text" name= "messageText" style= {{ flex: '10', padding: '5px'}} placeholder= "Message AaronFreelandsClass" value={this.state.messageText} onChange={this.onChange}/>
                <input type= "submit" value= "Send Message" className= "btn" style= {{flex: '1'}}/>
            </form>
        )
    }
}

export default AddMessage