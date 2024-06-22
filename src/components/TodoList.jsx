/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import Todo from "./Todo";
import { toast } from "sonner";

/**
 * Properties
 * - id
 * - task
 * - complete = false
 */

const TodoList = (props) => {
  const { todos, addTodo, removeTodo, completeTodo } = props;

  const [taskInput, setTaskInput] = useState("");
  const [addNewOn, setAddNewOn] = useState(false);

  const onInputChange = (e) => setTaskInput(e.target.value);

  const action = () => {
    if (addNewOn) {
      if (!taskInput) {
        toast.error("No task input provided");
        return;
      }

      addTodo({
        id: crypto.randomUUID(),
        task: taskInput,
        complete: false,
      });

      toast.success("New task added successfully", { id: "task-added" });
      setTaskInput("");

      // this hides the input after adding the todo
      setAddNewOn(false);
      return;
    }

    // turns on the add new state
    setAddNewOn(true);
  };

  return (
    <div className="p-5 bg-white border rounded-md">
      {todos && todos.length > 0 ? (
        <div className="divide-y max-h-[20rem] overflow-y-auto">
          {todos.map((todo, id) => (
            <Todo key={id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
        </div>
      ) : (
        <p className="pb-3 text-center text-gray-500">No todos</p>
      )}

      {addNewOn && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-grow w-full p-2 text-gray-500 border-b outline-none"
            placeholder="Enter Task"
            value={taskInput}
            onChange={onInputChange}
          />

          <MdCancel className="text-red-500 cursor-pointer" />
        </div>
      )}

      <button
        className="flex items-center justify-center w-full gap-2 py-2 mt-3 font-bold rounded-2xl bg-primary"
        onClick={action}
      >
        <FaPlus />
        <span>Add</span>
      </button>
    </div>
  );
};

export default TodoList;
