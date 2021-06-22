import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>HotBox</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Status</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
