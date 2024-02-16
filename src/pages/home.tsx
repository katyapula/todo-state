import React, { useMemo, useState } from "react";
import Filters from "../components/Filters";
import { TFilterConfig, TTodo } from "../types";
import Todo from "../components/Todo";
import { useTodosQuery } from "../hooks/useTodosQuery";
import { filter } from "../utils/filter";

type HomeProps = {};

export default function Home({}: HomeProps) {
  const { todos, setTodo } = useTodosQuery();
  const [filterConfig, setFilterConfig] = useState<TFilterConfig>([
    { field: "completed", value: [false, true], type: "intersect" },
    { field: "title", value: "", type: "text" },
  ]);
  const filteredTodos = useMemo(() => {
    return filter(todos, filterConfig);
  }, [todos, filterConfig]);

  return (
    <>
      <Filters filterConfig={filterConfig} setFilterConfig={setFilterConfig} />
      <hr />
      {filteredTodos.map((todo: TTodo) => (
        <Todo todo={todo} setTodo={setTodo} key={todo.id} />
      ))}
    </>
  );
}
