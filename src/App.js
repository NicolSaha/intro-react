import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <div className="w-1/2 m-auto mt-4 bg-white overflow-hidden shadow rounded-lg">
            <Header/>
        <Form/>
        <TodoList/>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
