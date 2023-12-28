import React from "react";
import styles from "../App.module.css";
import { TTodo } from "../types";

type TodoProps = {
  todo: TTodo;
  setTodo: (arg0: number) => void;
};

export default function Todo({ todo, setTodo }: TodoProps) {
  return (
    <div className={styles.todo}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => setTodo(todo.id)}
        />
        <span>
          {todo.title} {todo.completed.toString()}
        </span>
      </label>
    </div>
  );
}
