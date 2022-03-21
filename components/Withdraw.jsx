import React, { useState } from "react";
import styles from "../styles/Withdraw.module.css";
export default function Profile() {
  const [point, setPoint] = useState();

  return (
    <div className="taskContainer">
      <div className={styles.profileContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.title}>Payment System</div>
          <button>Cashout</button>
        </div>
      </div>
    </div>
  );
}
