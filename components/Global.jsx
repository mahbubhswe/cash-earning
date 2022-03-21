import Image from "next/image";
import React from "react";
import cfw from "../public/img/cfw.gif";
import styles from "../styles/GlobalConnect.module.css";
export default function Global() {
  return (
    <div className={styles.container}>
      <div className={styles.titleText}>You Can Connected From Anywhare</div>
      <div className={styles.clientContainer}>
        
          <Image src={cfw} alt="Picture" quality={100}  />
       
      </div>
    </div>
  );
}
