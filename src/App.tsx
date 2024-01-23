import React, { useMemo, useState } from "react";
import styles from "./App.module.css";
import Todo from "./components/Todo";
import Filters from "./components/Filters";
import { useTodosQuery } from "./hooks/useTodosQuery";
import { filter } from "./utils/filter";
import { TFilterConfig, TTodo } from "./types";
import { selectTheme, toggleTheme } from "./core/slices";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { todos, setTodo } = useTodosQuery();
  const [filterConfig, setFilterConfig] = useState<TFilterConfig>([
    { field: "completed", value: [false, true], type: "intersect" },
    { field: "title", value: "", type: "text" },
  ]);
  const filteredTodos = useMemo(() => {
    return filter(todos, filterConfig);
  }, [todos, filterConfig]);

  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div className={theme === "light" ? styles.dark : styles.light}>
      <div className={styles.container}>
        <button
          onClick={() => dispatch(toggleTheme())}
          className={styles["rainbow-button"]}
        >
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
        <Filters
          filterConfig={filterConfig}
          setFilterConfig={setFilterConfig}
        />
        <hr />
        {filteredTodos.map((todo: TTodo) => (
          <Todo todo={todo} setTodo={setTodo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
