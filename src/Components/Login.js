import React from "react";
import Header from "./Header";
import BackgroundImg from "../Utils/BackgroundImg.png";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <img className="absolute" src={BackgroundImg} alt="Logo" />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black/70">
          <h1 className="font-bold text-3xl py-4 w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-4 my-4 w-full bg-gray-800 rounded-lg "
              type="text"
              placeholder="Enter Your Name "
            />
          )}
          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-lg "
            type="text"
            placeholder="Enter Your Email Address "
          />

          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-lg "
            type="password"
            placeholder="Enter Your Password "
          />
          <button
            className="p-4 my-6 w-full rounded-lg  bg-red-700"
            type="button"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
            {" "}
            {isSignInForm
              ? "New to Netflix ? Sign up Now"
              : "Already registered ? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
