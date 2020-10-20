import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Category from "./components/Category";

function App() {

    // STATES
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = React.useCallback(() => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }, [todos, status]);

    // SAVE TO LOCALSTORAGE
    const saveLocalTodos = React.useCallback(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // GET FROM LOCALSTORAGE
    const getLocalTodos = React.useCallback(() => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todosLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todosLocal);
        }
    }, []);

    // USE EFFECT ONCE
    useEffect(() => {

    }, []);

    // USE EFFECT
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
        getLocalTodos();
    }, [filterHandler, saveLocalTodos, getLocalTodos]);

    return (
    <div className="App">
        <div className="w-1/2 m-auto my-10 overflow-hidden shadow-lg rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500">
            <Header/>
        <Form
            setStatus={setStatus}
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
        />
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
        <Category setStatus={setStatus}/>
        </div>
    </div>
  );
}

export default App;
