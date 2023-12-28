import React, { useMemo, useState } from "react";
import styles from "./App.module.css";
import Todo from "./components/Todo";
import Filters from "./components/Filters";
import { useTodosQuery } from "./hooks/useTodosQuery";
import { filter } from "./utils/filter";
import { TFilterConfig, TTodo } from "./types";

function App() {
  const { todos, setTodo } = useTodosQuery();
  const [filterConfig, setFilterConfig] = useState<TFilterConfig>([
    { field: "completed", value: [false, true], type: "intersect" },
  ]);
  const filteredTodos = useMemo(() => {
    if (filterConfig[0].value.length === 1) {
      return filter(todos, filterConfig);
    }
    return todos;
  }, [todos, filterConfig]);

  // Add text input for filtering by label

  return (
    <div className={styles.container}>
      <Filters filterConfig={filterConfig} setFilterConfig={setFilterConfig} />
      <hr />
      {filteredTodos.map((todo: TTodo) => (
        <Todo todo={todo} setTodo={setTodo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
