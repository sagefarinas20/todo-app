import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = e.target.task.value;
        const newTaskItem = { id: uuidv4(), title: newTask, completed: false};
        setTodos([...todos, newTaskItem]);
        e.target.task.value="";
    }

    const handleRemove = (taskId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== taskId);
        setTodos(updatedTodos);
    };
    

    return (
        <>
        <div className="TaskInput">
            <h1>Task List</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
            <label htmlFor="task">
                <p>Task</p>
                <input type="text" id="task" name="task"/>
            </label>
            </fieldset>
                <div></div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="box">
            <>
                {todos.map((todo) => (
                    <div id="task">
                    <input type="checkbox" /><p key={todo.id}>{todo.title}</p>
                    <button onClick={() => handleRemove(todo.id)}>-</button>
                    </div>
                ))}
            </>
        </div>
        </>
     )
}

