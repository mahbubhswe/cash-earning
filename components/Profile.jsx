import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import profilePic from "../public/img/profilePic.png";
import { useRouter } from "next/router";
export default function Profile() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    setUser(
      localStorage.getItem("cashEarning")
        ? JSON.parse(localStorage.getItem("cashEarning"))
        : null
    );
  }, []);
  const userLogout = () => {
    if (confirm("You are going to logout from your account.") == true) {
      localStorage.removeItem("cashEarning");
      router.push("/");
    }
  };
  return (
    <div className="taskContainer">
      <div className={styles.profileContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.title}>Your Profile</div>
          <div
            style={{
              padding: "30px 0px",
              textAlign: "center",
            }}
          >
            <Image
              src={profilePic}
              height={120}
              width={120}
              quality={100}
              alt="Profile Pic"
            />
          </div>

          {user != null ? (
            <div>
              {" "}
              <div className={styles.item}>
                Name:
                <span style={{ color: "gray" }}>
                  {" " + user.firstName + " " + user.lastName}
                </span>{" "}
              </div>
              <div className={styles.item}>
                E-mail:{" "}
                <span style={{ color: "gray" }}>{" " + user.email}</span>
              </div>
              <div className={styles.item}>
                Password:{" "}
                <span style={{ color: "gray" }}>{" " + "********"}</span>
              </div>
              <div className={styles.item}>
                User ID: <span style={{ color: "gray" }}>{" " + user.id}</span>
              </div>
              <div className={styles.item}>
                <button
                  onClick={userLogout}
                  style={{
                    background: "red",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    color: "black",
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
