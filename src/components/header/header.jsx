import React from "react";
import styles from "./header.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

const Header = ({ totalCount }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <i className="fa-brands fa-google"></i>
      </div>
      <div className={styles.title}>habit tracker</div>
      <div className={styles.count}>{totalCount}</div>
    </div>
  );
};

export default Header;
