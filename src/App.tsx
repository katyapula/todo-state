import React from "react";
import styles from "./App.module.css";
import { selectTheme } from "./core/slices";
import { useSelector } from "react-redux";
import DateHeader from "./components/DateHeader";
import Navigation from "./components/Navigation";
import AppRoutes from "./core/routes";

function App() {
  const theme = useSelector(selectTheme);
  const state = useSelector((state: any) => state.app);

  console.log(state);

  return (
    <div className={theme === "light" ? styles.light : styles.dark}>
      <div className={styles.container}>
        <Navigation />
        <DateHeader />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
