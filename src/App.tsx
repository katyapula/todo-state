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
    { field: "title", value: "", type: "text" },
  ]);
  const filteredTodos = useMemo(() => {
    return filter(todos, filterConfig);
  }, [todos, filterConfig]);

  console.log(filterConfig);
  // delectus aut autem

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
