import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

type NavigationProps = {};

export default function Navigation({}: NavigationProps) {
  const menuItems = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/settings",
      title: "Settings",
    },
    {
      url: "/contact",
      title: "Contact",
    },
  ];

  return (
    <ul className={styles.navbar}>
      {menuItems.map((item) => (
        <li>
          <Link className={styles.navbarItem} to={item.url}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
