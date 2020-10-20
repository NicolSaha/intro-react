import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

  return (
    <div className="App">
        <div className="w-1/2 m-auto mt-4 bg-white overflow-hidden shadow rounded-lg">
            <Header/>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <TodoList todos={todos} setTodos={setTodos} />
        <Footer/>
        </div>
    </div>
  );
}

export default App;
