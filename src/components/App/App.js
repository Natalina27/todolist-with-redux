import React from 'react';
import s from './App.module.css';
import TodoList from "../TodosList/TodoList";
import CreateTodo from "../CreateTodo/CreateTodo";


function App() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <h1>React/Redux To-Do List</h1>
                <TodoList />
                <CreateTodo />
            </div>
        </div>
    );
}

export default App;
