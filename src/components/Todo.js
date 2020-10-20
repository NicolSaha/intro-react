import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id ))
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="w-2/3 m-auto bg-white overflow-hidden shadow rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <div className="inline-flex">
                    <li className={`todo-item ${todo.completed ? "line-through italic opacity-50" : "" }`}> {text} </li>
                    <button onClick={completeHandler}  className="complete-btn ml-20"> <i className="fas fa-check"></i> </button>
                    <button onClick={deleteHandler} className="trash-btn"> <i className="fas fa-trash"></i> </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;