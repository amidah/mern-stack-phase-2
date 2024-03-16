import React from 'react';

function TodoList({ todos, removeTodo }){
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;