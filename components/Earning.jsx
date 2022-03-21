import React, { useState } from "react";
import styles from "../styles/Earning.module.css";
export default function Profile() {
  const [point, setPoint] = useState();
  return (
    <div className="taskContainer">
      <div className={styles.profileContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.title}>Your Earning</div>
          <div className={styles.item}>Point: {point ? point : 0}</div>
        </div>
      </div>
    </div>
  );
}
