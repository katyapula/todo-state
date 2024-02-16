import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

type NavigationProps = {};

export default function Navigation({}: NavigationProps) {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link className={styles.navbarItem} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={styles.navbarItem} to="/settings">
          Settings
        </Link>
      </li>
    </ul>
  );
}
