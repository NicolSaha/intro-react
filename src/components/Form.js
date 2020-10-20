import React from "react";

const Form = () => {
    return (

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
                </form>
            </div>
    );
}

export default Form;