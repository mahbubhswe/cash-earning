import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const date = new Date();

  return (
    <div className={styles.container}>
      Copyright © {date.getFullYear()} Cash Earning. All Rights Reserved.
    </div>
  );
}
