import { FC, useState } from "react";
import styles from "./Header.module.css";
import { formatDate } from "../../utils/formatDate";
import { formatTime } from "../../utils/formatTime";

const Header: FC = () => {
  const [date, setDate] = useState(formatDate());
  const [time, setTime] = useState(formatTime());

  setInterval(() => {
    setDate(formatDate());
  }, 60 * 1000);

  setInterval(() => {
    setTime(formatTime());
  }, 60);

  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>News App</h1>
      <div className={styles.DateTime}>
        <p className={styles.Time}>{time}</p>
        <p className={styles.Date}>{date}</p>
      </div>
    </header>
  );
};

export default Header;
