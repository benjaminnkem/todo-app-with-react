/* eslint-disable react/prop-types */

import { MdDeleteOutline } from "react-icons/md";

const Todo = ({ completeTodo, removeTodo, todo }) => {
  return (
    <div className="text-[#9ea8c4] flex items-center gap-1 p-2 justify-between group duration-300">
      <div className="flex items-center gap-2">
        <div
          className={`border rounded-full cursor-pointer border-black/40 size-3 ${todo.complete ? "bg-primary" : ""}`}
          onClick={() => completeTodo(todo.id)}
        ></div>
        <p className={todo.complete ? "line-through" : ""}>{todo.task}</p>
      </div>

      <button className="text-red-400 duration-300 opacity-0 group-hover:opacity-100">
        <MdDeleteOutline onClick={() => removeTodo(todo.id)} />
      </button>
    </div>
  );
};

export default Todo;
