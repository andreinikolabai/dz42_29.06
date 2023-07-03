import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    const addTodo = () => {
        const todo = { task: newTodo, completed: false };
        setTodos([...todos, todo]);
        setNewTodo('');
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    style={{ marginRight: 10 }}
                />
                <button onClick={addTodo}>Додати</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        onClick={() => toggleTodo(index)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;