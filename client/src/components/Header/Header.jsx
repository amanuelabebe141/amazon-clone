import React from "react";
import logo from "../../assets/image/logo.png";
import classes from "./Header.module.css";
function Header() {
  return (
    <>
      <header>
        <div className={classes.left}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.center}></div>
        <div className={classes.left}></div>
      </header>
    </>
  );
}

export default Header;
