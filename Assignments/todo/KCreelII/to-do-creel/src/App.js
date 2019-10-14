import React, {useState} from 'react';
import './App.css';
const uuidv1 = require('uuid/v1');


// class ToDoApp extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       data:[]
//     }
//   }
//   addItem(val){
//     const todo = {toDo: val}
//     this.state.data.push(todo);
//     this.setItem({data : this.state.data});
//   }
//   handleRemove(toDo){
//     const remainder = this.state.data.filter((todo) => {
//       if(todo.toDo !== toDo) return toDo;
//     });
//     this.setItem({data: remainder});
//   }
//   render(){
//     return(
//       <div>
//         ayy
//       </div>
//     )
//   }
// }

const ListItems = ({ specialItems, removeItem, addItem, editItem, markComplete}) => {
  let input;
  
  var trash = document.getElementById("enter")
  if(trash != null){
    trash.addEventListener("keyup", function(event){
      if(event.keyCode===13){
        if(input != null){
          addItem(input.value);
          input.value='';
        }
      }
    });
  }
  return (
    <div>
      <div >
        <input id='enter' ref={node => {input = node;}}/>
        <button onClick={() => {
          addItem(input.value, uuidv1());
          input.value ='';
        }} >
          +
        </button>
      </div>
      <ul>
        {
          specialItems.map(item =>(
            <li>
              <a className={item.key}>{item.done} {item.toDo}</a>
            
            <button onClick={() => {
              removeItem(item.key)
            }}> - </button>

            <button onClick={() => {
              
              removeItem(item.key);
              addItem(input.value, item.key);
              
              input.value ='';
            }}> edit </button>
            
            <button onClick={() => {
              markComplete(item.key);
            }}>Complete</button> 
            </li>
          ))
        
        }
      </ul>
    </div>
  )
  
}



function App() {
  const [items, setItem] = useState([{toDo: 'Add more to do', key: uuidv1(), done: false}, {toDo:"test", key: uuidv1(), done: true}]);
  
  const addItem = (val, id) => {
    setItem([...items, {toDo: val, key: id, done: false}])
  }
  const removeItem = (val) => {
    setItem(items.filter(it => it.key !== val));
  }
  const editItem = (oldItem, newItem) =>{
    removeItem(oldItem);
    //setItem([...items, {toDo: newItem, id: uuidv1(), done :false}]);
    addItem(newItem)
  }
  const markComplete = (id) =>{
    
    items.find(x => x.key === id).done = true;
  }
  const removeAllComplete = () =>{
    setItem(items.filter(it => it.done !== true))
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="heading1">
          ToDo List
        </div>
        
        <ListItems specialItems={items} removeItem={removeItem} addItem={addItem} editItem={editItem} markComplete = {markComplete} />
        <button onClick={() => {
          removeAllComplete();
        }}>
          Remove all completed items
        </button>
      </header>
    </div>
  );
}


export default App;
