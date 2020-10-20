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
        <div className="w-3/4 m-auto bg-white overflow-hidden shadow rounded-lg flex flex-wrap mb-2">
            <div className="w-full border-b border-gray-200 px-4 py-5 sm:px-6 inline-flex">
                <li className={`text-left todo-item w-2/3 ${todo.completed ? "line-through italic opacity-50" : "" }`}> {text} </li>
                    <div className="w-1/8 inline-flex mr-0">
                        <button onClick={completeHandler} className="complete-btn ml-20 md:ml-40 mr-6"> <i className="fas fa-check"></i> </button>
                        <br/>
                        <button onClick={deleteHandler} className="trash-btn"> <i className="fas fa-trash"></i> </button>
                    </div>
            </div>
        </div>
    );
}

export default Todo;