import React from "react";
import style from "./habit.module.css";

const Habit = ({ habit, onPlus, onMinus, onRemove }) => {
  const handlePlus = (habit) => {
    console.log("plus", habit);
    // onPlus();
  };

  return (
    <li className={style.item}>
      <span className={style.name}>{habit.name}</span>
      <button className={style.increase} onClick={(habit) => handlePlus(habit)}>
        +
      </button>
      <button className={style.decrease}>-</button>
      <button className={style.remove}>rm</button>
    </li>
  );
};

export default Habit;
