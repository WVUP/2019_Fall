import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
       textDecoration: props.todo.complete ? "line-through" : "" , cursor: "pointer"
      }}
      onClick={props.toggleComplete}
      
    >
      {props.todo.text}
  
    </div>
    <button onClick={props.onDelete}>Delete</button>
    <button onClick={props.todo.text}>Edit</button>
  </div>

);