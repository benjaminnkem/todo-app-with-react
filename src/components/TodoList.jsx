/**
 * Properties
 * - id
 * - task
 * - complete
 */

import Todo from "./Todo";
import { FaPlus } from "react-icons/fa6";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="bg-white border rounded-md p-5 relative">
      {todos && todos.length > 0 ? (
        <>
          {todos.map((todo) => (
            <Todo key={todo.id} />
          ))}
        </>
      ) : (
        <p className="text-center pb-3 text-[#9ea8c4]">No todos</p>
      )}

      <button className="absolute px-4 rounded-2xl -bottom-6 py-2 bg-primary left-[35%] flex items-center gap-2">
        <FaPlus />
        <span>New task</span>
      </button>
    </div>
  );
};

TodoList.propTypes = {
  todos: [],
  setTodos: Function,
};

export default TodoList;
