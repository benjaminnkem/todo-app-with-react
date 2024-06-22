import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="grid w-full h-screen place-content-center">
      <div className="space-y-4 min-w-96">
        <div className="p-4 font-bold text-center rounded-md bg-primary">
          <h1>React ToDo</h1>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default App;
