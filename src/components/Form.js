import React from "react";

const Form = () => {
    return (
        <div className="w-1/2 m-auto mt-4 bg-white overflow-hidden shadow rounded-lg">
            <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <h1>Nicole's Todolist</h1>
            </div>
            <div className="px-4 py-5 sm:p-6">
                <form>
                    <div>
                        <label for="addTodo" className="block text-sm font-medium leading-5 text-gray-700">Add Todo</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <div className="relative flex-grow focus-within:z-10">
                                <input type="text" id="addTodo" className="todo-input form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5" placeholder="Don't forget to smile today ..."/>
                            </div>
                            <button type="submit" className="addTodo-button -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                                <span className="inline-flex rounded-md shadow-sm">Add</span>
                            </button>
                        </div>
                    </div>

                    <label htmlFor="selectTodosCategory"
                           className="block text-sm leading-5 font-medium text-gray-700">Select Category</label>

                    <select id="selectTodosCategory"
                            className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                        <option>All</option>
                        <option>Completed</option>
                        <option>Uncompleted</option>
                    </select>
                </form>
            </div>
        </div>
    );
}

export default Form;