import React from "react";
import styles from "./habitAddForm.module.css";

const HabitAddForm = () => {
  return (
    <div className={styles.add}>
      <input type="text" className={styles.input} />
      <button className={styles.btn}>add</button>
    </div>
  );
};

export default HabitAddForm;
