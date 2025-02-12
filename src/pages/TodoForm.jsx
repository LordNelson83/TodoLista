import { useState } from 'react';
import "../styles/todoForm.css"
import { v4 as uuidv4 } from 'uuid';

const TodoForm = (props) => {
  const[input,setInput]= useState("");


  const todoChange=event=>{
    setInput(event.target.value);
  }

  const todoSend= event =>{
    event.preventDefault();
    
    const todoNew={
      id:uuidv4(),
      text: input,
      finish: false
    }
   props.onSubmit(todoNew);
   setInput("");
  };

  return (
   <form 
    className='todo-form'
    onSubmit={todoSend}>
    <input 
    className='todo-input'
    type="text"
    placeholder='What shall you do?'
    name="text"
    onChange={todoChange}
    value={input}
    />
<button className="todo-button">
    Add</button>
   </form>
  );
};

export default TodoForm;