import React from "react";
import Habit from "../habit/habit";
import HabitAddForm from "../habitAddForm/habitAddForm";
import styles from "./habits.module.css";

const Habits = ({ habits }) => {
  return (
    <div className={styles.habits}>
      <HabitAddForm />
      <ul>
        {habits.map((item) => (
          <Habit key={item.id} habit={item} />
        ))}
      </ul>
      <button className={styles.reset}>reset</button>
    </div>
  );
};

export default Habits;
