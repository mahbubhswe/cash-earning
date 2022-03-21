import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
export default function SignUp() {
  const router = useRouter();
  const [checkEmail, setCheckEmail] = useState(false);
  const [show, setShow] = useState(false);
  const [chackPassShow, setChackPassShow] = useState(false);
  const [confirmReg, setConfirmReg] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const firstNameCheck = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setUser({ ...user, firstName: value });
    }
  };
  const lastNameCheck = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (value === "" || re.test(value)) {
      setUser({ ...user, lastName: value });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (user.password.localeCompare(confirmPassword) != 0) {
      setShow(true);
      return;
    }
    if (user.password.length < 6) {
      setChackPassShow(true);
      return;
    }
    e.target.reset();

    const collRef = collection(db, "users");
    let check = true;
    const querySnapshot = await getDocs(collRef);
    querySnapshot.forEach((x) => {
      if (x.data().email == user.email) {
        check = false;
      }
    });
    if (check) {
      await addDoc(collRef, { ...user });
      setConfirmReg(true);
    } else {
      setCheckEmail(true);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div
            className="confirmReg"
            style={{ display: confirmReg ? "block" : "none" }}
          >
            Your account hase been created successfully. Now, you can sign in
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              required
              minLength={3}
              value={user.firstName}
              onChange={firstNameCheck}
              placeholder="First name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              required
              minLength={3}
              value={user.lastName}
              onChange={lastNameCheck}
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email address"
            />
            <p
              style={{ display: checkEmail ? "block" : "none" }}
              className="text-red-500 text-xs italic"
            >
              Sorry, this email address already exists with another account.
            </p>
            <p className="text-green-500 text-xs italic">
              Please, provide a valid E-mail address, Because, next you need to
              verify it.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>{" "}
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Confirm Password
            </label>{" "}
            <input
              className="appearance-none block w-full  bg-transparent border border-teal-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />{" "}
            <p
              style={{ display: show ? "block" : "none" }}
              className="text-red-500 text-xs italic"
            >
              Confirm password not matched. Please try again.
            </p>
            <p
              style={{ display: chackPassShow ? "block" : "none" }}
              className="text-red-500 text-xs italic"
            >
              Password should be six characters long.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3  text-center">
            <button
              type="submit"
              className="bg-gray-300 w-full bg-cyan-500 hover:bg-cyan-600  text-gray-800 font-bold py-2 px-4 rounded inline-flex"
            >
              <span className=" uppercase w-full text-center ">Sign Up</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
