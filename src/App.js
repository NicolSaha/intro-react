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

    // USE EFFECT ONCE
    useEffect(() => {
        getLocalTodos();
    }, []);

    // USE EFFECT
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    // FUNCTIONS AND EVENTS
    const filterHandler = () => {
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
    }

    // SAVE TO LOCALSTORAGE
    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        };

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todosLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todosLocal);
        }
    }


    return (
    <div className="App">
        <div className="w-1/2 m-auto my-10 bg-white overflow-hidden shadow-lg rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500">
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
