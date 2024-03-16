import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

function App(){
  const todoList = useSelector(state => state.todoList);
  
  const dispatch = useDispatch();
  
  const addTodo = todo => {
    dispatch({type: 'ADD_TODO', payload: todo});
  };

  const removeTodo = id => {
    dispatch({type: 'REMOVE_TODO', payload: id});
  };

  return (
    <div>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todoList} removeTodo={removeTodo}/>
    </div>    
  )

}

export default App;