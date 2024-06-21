/**
 * Properties
 * - id
 * - task
 * - complete
 */

import { useState } from "react";
import { MdCancel } from "react-icons/md";
import Todo from "./Todo";
import { FaPlus } from "react-icons/fa6";
import { toast } from "sonner";

const TodoList = ({ todos, addTodo, removeTodo, completeTodo }) => {
  const [addNewOn, setAddNewOn] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const action = () => {
    if (addNewOn) {
      addTodo({
        task: taskInput,
        id: crypto.randomUUID(),
        complete: false,
      });
      toast.success("New task added successfully", { id: "task-added" });

      setAddNewOn(false);
      setTaskInput("");
      return;
    }

    setAddNewOn(true);
  };

  return (
    <div className="relative p-5 bg-white border rounded-md">
      {todos && todos.length > 0 ? (
        <div className="divide-y max-h-[20rem] overflow-y-auto">
          {todos.map((todo, id) => (
            <Todo key={id} removeTodo={removeTodo} todo={todo} completeTodo={completeTodo} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-center pb-3 text-[#9ea8c4]">No todos</p>
        </div>
      )}

      {addNewOn && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-grow w-full p-2 text-gray-500 border-b outline-none"
            placeholder="Enter task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />

          <div className="text-red-400 cursor-pointer size-4" onClick={() => setAddNewOn(false)}>
            <MdCancel size={20} />
          </div>
        </div>
      )}

      <button
        className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-3 font-bold rounded-2xl -bottom-6 bg-primary"
        onClick={action}
      >
        <FaPlus />
        <span> {addNewOn ? "Add" : "New task"}</span>
      </button>
    </div>
  );
};

TodoList.propTypes = {
  todos: [],
  setTodos: Function,
  addTodo: Function,
  removeTodo: Function,
  completeTodo: Function,
};

export default TodoList;
