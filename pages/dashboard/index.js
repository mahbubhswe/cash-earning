import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DashboardTab from "../../components/DashboardTab";
import SignIn from "../../components/SignIn";
export default function Index() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(
      localStorage.getItem("cashEarning")
        ? JSON.parse(localStorage.getItem("cashEarning"))
        : null
    );
  }, []);
  if (user) {
    return (
      <Layout pageTitle={"Dashboard"}>
        <DashboardTab></DashboardTab>
      </Layout>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        height: "100vh",
        widows: "100vw",
        placeContent: "center",
      }}
    >
      <div
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div className="flex bg-cyan-300 p-3	rounded mb-5">
          <div className="py-1">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          <div>
            <p className="font-bold">
              {"I's look like you are not logged in.Please login first."}
            </p>
          </div>
        </div>

        <SignIn></SignIn>
      </div>
    </div>
  );
}