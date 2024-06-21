import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodos = create()(
  persist(
    (set) => ({
      todos: [],
      addTask: (task) => set((state) => ({ ...state, todos: [...state.todos, task] })),
      removeTask: (taskId) => set((state) => ({ ...state, todos: state.todos.filter((task) => task.id !== taskId) })),
      completeTask: (taskId) =>
        set((state) => {
          const task = state.todos.find((task) => task.id === taskId);

          // if task not found, do nothing
          if (!task) return state;

          // new todos
          task.completed = true;
          const updatedTasks = state.todos.filter((taskLeft) => taskLeft.id !== task.id);
          updatedTasks.push(task);

          return { ...state, todos: updatedTasks };
        }),
    }),
    {
      name: "todos",
    }
  )
);

export default useTodos;
