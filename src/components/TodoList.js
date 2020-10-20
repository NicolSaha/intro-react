import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todo  todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text} id={todo.id}/>
                    ))}
                </ul>
    );
};

export default TodoList;