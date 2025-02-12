import React from 'react';
import "../styles/todoList.css";
import { AiFillCloseCircle } from "react-icons/ai";

const TodoList = ({id,text,finished,finishTodo,deleteTodo}) => {
  return (

    <div className={finished ? "todo-container-finished" :"todo-container"}>
      <div className='todo-text'
        onClick={()=>finishTodo(id)}>
        {text}
      </div>
      <div className='todo-container-icons'
        onClick={()=>deleteTodo(id)}>
       <AiFillCloseCircle className='todo-icon'/>
      </div>
    </div>
  
  );
};

export default TodoList;