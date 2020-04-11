/* eslint import/no-unresolved: 0 */
import React from "react";
import { browserHistory } from "react-router";
import style from "./style.less";

const logout = () => {
  browserHistory.push("/logon");
};
const goHome = () => {
  browserHistory.push("/");
};

const Header = () => {
  const result = (
    <header className={style.header}>
      <div className={style.left}>
        <h1>React Starter</h1>
      </div>
    </header>
  );

  return result;
};

export default Header;
