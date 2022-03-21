import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Button.module.css";
export default function StartButton() {
  const router = useRouter();
  function goToTask() {
    router.push("/task");
  }
  return (
    <div>
      <button
        onClick={() => goToTask()}
        className={styles.glowOnHover}
        type="button"
      >
        Start Earning
      </button>
    </div>
  );
}
