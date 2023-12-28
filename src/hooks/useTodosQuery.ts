import { useEffect, useState } from "react";
import { TTodo } from "../types";
import { getTodos } from "../api";

export function useTodosQuery() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
  }, []);
  function setTodo(id: number) {
    const index: number = todos.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      todos[index].completed = !todos[index].completed;
    }
    setTodos([...todos]);
  }

  return { todos, setTodo };
}
