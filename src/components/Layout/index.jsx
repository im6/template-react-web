/* eslint import/no-unresolved: 0 */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import style from "./style.less";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";

const Layout = ({ children }) => (
  <div
    className={style.layout}
    style={{ background: `#f5f6f7 url(${img}) repeat-x 0 0` }}
  >
    <Header />
    <div className={style.menuContainer}>
      Link: &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">
        <span>Home</span>
      </Link>
      &nbsp;&nbsp;
      <Link to="/todos">
        <span>Todos</span>
      </Link>
    </div>
    <div className={style.main}>{children}</div>
    <Footer className={style.footer} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
