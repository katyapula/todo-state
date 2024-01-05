import { TFilterConfig, TTodo } from "../types";

function applyFilters(todo: TTodo, filterConfig: TFilterConfig) {
  for (let i = 0; i < filterConfig.length; i++) {
    const currentFilter = filterConfig[i];
    const currentTodoValue = todo[currentFilter.field];

    if (
      currentFilter.type === "intersect" &&
      !currentFilter.value.includes(currentTodoValue)
    ) {
      return false;
    }
    if (
      currentFilter.type === "text" &&
      !currentTodoValue.includes(currentFilter.value)
    ) {
      return false;
    }
  }
  return true;
}

export function filter(todos: TTodo[], filterConfig: TFilterConfig) {
  return todos.filter((todo) => {
    return applyFilters(todo, filterConfig);
  });
}
