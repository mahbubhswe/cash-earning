import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    e.target.reset();
    const collRef = collection(db, "users");
    const q = query(collRef, where("email", "==", user.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data().password == user.password) {
        const userOb = { ...doc.data(), id: doc.id };
        localStorage.setItem("cashEarning", JSON.stringify(userOb));
        router.push("/dashboard");
        router.reload(window.location.pathname);
      } else {
        setShow(true);
      }
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Type email"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Password
            </label>
            <input
              required
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Type password"
            />
          </div>
          <p
            style={{ display: show ? "block" : "none" }}
            className=" pl-3 text-red-500 text-xs italic"
          >
            Sorry, your email or password not matched with any account.
          </p>
          ;
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  text-center">
            <button
              type="submit"
              className="bg-gray-300 w-full bg-cyan-500 hover:bg-cyan-600  text-gray-800 font-bold py-2 px-4 rounded inline-flex"
            >
              <span className=" uppercase w-full text-center ">Sign In</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
