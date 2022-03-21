import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "./Layout";
import FormTab from "../components/FormTab";
import styles from "../styles/Home.module.css";
import dolargif from "../public/img/dolarbag.gif";
import StartButton from "./StartButton";

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(
      localStorage.getItem("cashEarning")
        ? JSON.parse(localStorage.getItem("cashEarning"))
        : null
    );
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.item}>
          <Image src={dolargif} alt="Picture" width={400} height={400} />
        </div>
        <div className={styles.item}>
          {user == null ? <FormTab></FormTab> : <StartButton></StartButton>}
        </div>
      </div>
    </Layout>
  );
}
