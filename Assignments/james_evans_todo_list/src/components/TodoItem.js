import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        
        if(this.props.todo.completed){
            return{
                background: '#cdffbd',
                padding: '20px',
                borderBottom: '1px #000 solid',
                color: 'green'
            }
        }
        else{
            return{
                background: '#ffcfcc',
                padding: '20px',
                borderBottom: '1px #000 solid',
                textDecoration: 'none',
                color: 'red'
            }
        }
    }

    markComplete = (e) => {

    }
    render(){
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    float: 'right',
    cursor: 'pointer'
}
export default TodoItem