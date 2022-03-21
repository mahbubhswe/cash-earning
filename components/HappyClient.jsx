import Image from "next/image";
import React from "react";
import happyClient from "../public/img/happyClient.png";
import newClient from "../public/img/newClient.png";
import paid from "../public/img/paid.png";
import ourHappyClient from "../public/img/ourHappyClient.gif";
import styles from "../styles/HappyClient.module.css";
export default function HappyCLient() {
  return (
    <div className={styles.container}>
      <div className={styles.titleText}>Our Happy Clients</div>

      <div className={styles.clientContainer}>
        <div className={styles.item}>
          <Image src={happyClient} alt="Picture" quality={100} />
          <div
            style={{
              width: "100%",
              margin: "auto",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "25px",
            }}
          >
            <strong style={{ color: "wheat" }}>Total Joined</strong>
            <p style={{ color: "wheat" }}>159</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={paid} alt="Picture" quality={100} />
          <div
            style={{
              width: "100%",
              margin: "auto",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "25px",
            }}
          >
            <strong style={{ color: "wheat" }}>Total Paid</strong>
            <p style={{ color: "wheat" }}>$ 768</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src={newClient}
            alt="Picture"
            height={350}
            width={350}
            quality={100}
          />
          <div
            style={{
              width: "100%",
              margin: "auto",
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "25px",
            }}
          >
            <strong style={{ color: "wheat" }}>Join Today</strong>
            <p style={{ color: "wheat" }}>13</p>
          </div>
        </div>
      </div>
    </div>
  );
}
