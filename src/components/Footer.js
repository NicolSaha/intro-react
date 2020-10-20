import React from "react";

const Footer = () => {
    return(
        <div className="border-t border-gray-200 mt-4 px-4 py-4 sm:px-6">
            <label htmlFor="selectTodosCategory"
                   className="block text-sm leading-5 font-medium text-gray-700">Todo Category</label>

            <select id="selectTodosCategory"
                    className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>

    )
}
export default Footer;

