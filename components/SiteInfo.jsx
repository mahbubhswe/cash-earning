import Head from "next/head";
import React from "react";
import styles from "../styles/SiteInfo.module.css";
export default function SiteInfo() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className={styles.titleText}>
        Earn Money by watching ads and completing simple tasks
        <i className="fas fa-badge-check"></i>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          <i className="fas fa-check" style={{ color: "#FFFFFF" }}></i> Join
          today and enjoy very low minimum payouts as $0.15. It is free and
          easy!
        </p>
        <p className={styles.text}>
          <i className="fas fa-check" style={{ color: "#FFFFFF" }}></i>{" "}
          Advertise for only $0.25 and reach thousands business orentated
        </p>
        <p className={styles.text}>
          <i className="fas fa-check" style={{ color: "#FFFFFF" }}></i>{" "}
          customers We delivering quality traffic since 2022
        </p>
      </div>
    </div>
  );
}
