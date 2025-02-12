import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoTime = (timeProps) => {
    const [time,setTime]=useState("");

    const todoTimeChange=e=>{
      setTime(e.target.value);
    }
      const todoTimeSend=e=>{
        e.preventDefault();

        const todoNewTime={
          id:uuidv4(),
          text:time,
          finish:false
        }
        timeProps.onSubmit(todoNewTime);
        setTime("");
      };
  return (
    <form
    className="Todo-Time"
    onSubmit={todoTimeSend}>
      <input 
      className=""
      type=""
      />
    </form>
  )
}

export default TodoTime;