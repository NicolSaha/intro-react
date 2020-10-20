import React from "react";

const TodoList = () => {
    return(
        <div className="todo-container w-2/3 m-auto bg-white overflow-hidden shadow rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <ul className="todo-list"></ul>
            </div>
        </div>
    );
};

export default TodoList;