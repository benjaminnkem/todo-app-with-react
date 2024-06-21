import { useState } from "react";
import TodoList from "./components/TodoList";
import { toast } from "sonner";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => setTodos((prev) => (todo ? [...todos, todo] : prev));
  const removeTodo = (todoId) => setTodos((prev) => (todos ? todos.filter((todo) => todo.id !== todoId) : prev));
  const completeTodo = (todoId) =>
    setTodos((prev) => {
      const todo = todos.find((todo) => todo.id === todoId);

      if (!todo) return prev;

      todo.complete = !todo.complete;
      const filteredTodos = todos.filter((todoLeft) => todoLeft.id !== todo.id);

      toast.success(`Task updated.`, { id: "task-updated" });
      return todo.complete ? [todo, ...filteredTodos] : [...filteredTodos, todo];
    });

  return (
    <div className="grid w-full h-screen place-content-center">
      <div className="space-y-4 min-w-96">
        <div className="p-4 font-bold text-center rounded-md bg-primary">
          <h1>React ToDo</h1>
        </div>

        <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} completeTodo={completeTodo} />
      </div>
    </div>
  );
};

export default App;
