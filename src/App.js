import Habits from "./components/habits/habits";
import styles from "./app.module.css";
import { useState } from "react";
import Header from "./components/header/header";

function App() {
  const [habits, setHabits] = useState([
    { id: 0, name: "coding", count: 0 },
    { id: 1, name: "reading", count: 0 },
    { id: 2, name: "running", count: 0 },
  ]);

  return (
    <div className={styles.app}>
      <Header totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits habits={habits} />
    </div>
  );
}

export default App;
