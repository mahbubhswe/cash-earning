import React from "react";
import styles from "../styles/ShareOnSocialMedia.module.css";
import social from "../public/img/social.gif";
import Image from "next/image";
export default function ShareOnSocialMedia() {
  return (
    <div className={styles.container}>
      <div className={styles.titleText}>Share With Your Friends</div>
      <div className={styles.clientContainer}>
        <Image src={social} alt="Picture" quality={100} />
      </div>
    </div>
  );
}
