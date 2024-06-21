import { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="grid place-content-center w-full h-screen">
      <div className="min-w-80 space-y-4">
        <div className="bg-primary p-4 font-bold text-center rounded-md">
          <h1>React ToDo</h1>
        </div>

        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
