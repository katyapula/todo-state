import { useTodosQuery } from "../hooks/useTodosQuery";
import React, { useState } from "react";
import { TFilterConfig, TTodo } from "../types";

// const todos = [
//   { id: 1, completed: true },
//   { id: 2, completed: false },
//   { id: 3, completed: true },
//   { id: 4, completed: false },
//   { id: 5, completed: true },
// ];

// const filterConfig = [
//   { field: "completed", value: [true, true], type: "intersect" },
//   { field: "sdf", value: true, type: "intersect" },
//   { field: "sdhukguhf", value: true, type: "intersect" },
// ];

function applyFilters(todo: TTodo, filterConfig: TFilterConfig) {
  return filterConfig.every((filter) => {
    return filter.value.includes(todo[filter.field]);
  });
}

export function filter(todos: TTodo[], filterConfig: TFilterConfig) {
  return todos.filter((todo) => {
    return applyFilters(todo, filterConfig);
  });
}
