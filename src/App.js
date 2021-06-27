import React, {useState} from "react";
import ToDoList from "./ToDoList";

const App = ()=>{
  const[inputList,setInputLists] = useState("buy apple");
  const[Items,setItems] = useState([]);

  const itemEvents = (event)=>{
    setInputLists(event.target.value);
  }
  const listOfItems = ()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputLists("");
  }
  const deleteItems = (id)=>{
   setItems((oldItems)=>{
     return oldItems.filter((arrElem, index)=>{
       return id !== index
     });
   });
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" placeholder="Add Items"
            onChange = {itemEvents}
            value = {inputList}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li> {inputList}</li> */}
            {Items.map((itemVal, index)=>{
              return <ToDoList 
              key = {index}
              id = {index}
              text = {itemVal}
               onSelect={deleteItems} 
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );

}

export default App;
