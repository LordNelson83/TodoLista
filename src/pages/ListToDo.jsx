import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "../styles/listToDo.css";

const ListToDo = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = (todo) => {
    
    if (todo.text.trim()) {
      todo.text = todo.text.trim();

      const newTodo = { ...todo, finished: false };
      const updatedTodos = [newTodo, ...todos];
      setTodos(updatedTodos);
    }
  };

 
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  const finishTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, finished: !todo.finished };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const allCompleted = todos.length > 0 && todos.every(todo => todo.finished);
  return (
    <>
      <TodoForm onSubmit={addToDo} />
      <div className='todo-list-container'>
        {allCompleted &&<p>Congratulations.. you are done!</p>}
        {todos.map((todo) => (
          <TodoList 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            finished={todo.finished}
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
};

export default ListToDo;
