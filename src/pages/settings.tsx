import React, { useRef } from "react";
import { selectTheme, toggleTheme, toggleDateFormat } from "../core/slices";
import styles from "../App.module.css";
import { useDispatch, useSelector } from "react-redux";

type SettingsProps = {};

export default function Settings({}: SettingsProps) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const dateInput = useRef<HTMLInputElement>(null);
  const handleSelectDate = () =>
    dispatch(toggleDateFormat(dateInput.current?.value || ""));

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <button onClick={handleToggleTheme} className={styles["rainbow-button"]}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>

      <div style={{ margin: "2em 0" }}>
        <label
          htmlFor="dateFormat"
          style={{ display: "block", margin: "1em 0" }}
        >
          Change date format
        </label>
        <input id="dateFormat" type="text" name="format" ref={dateInput} />
        <button onClick={handleSelectDate}>Select</button>
      </div>
    </>
  );
}
