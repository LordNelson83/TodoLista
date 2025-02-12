import React from 'react';
import "../styles/home.css";
import ListToDo from './ListToDo';


const Home = () => (
  <>
    <div className="app-todo">
        <div className="app-todo-list"> 
        <h1>To Do List</h1>
        <h2>We help finishing your projects</h2>
          <ListToDo/>
        </div>
    </div>
 
  </>

);


export default Home;