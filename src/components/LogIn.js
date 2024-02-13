import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidation } from "../utils/validations/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/slices/userSlice";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleClickButton = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    //early return
    if (message) return;

    if (!isSignIn) {
      //sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login =>", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(errorCode.slice(5));
        });
    }

    if (message === null) {
      email.current.value = "";
      password.current.value = "";
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>
      <div className="bg-black w-[30%] h-screen absolute top-[8rem] opacity-80 right-[35%] text-white">
        <form className="p-16" onSubmit={(e) => e.preventDefault()}>
          <h1 className="font-bold text-3xl mb-8">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={fullName}
              className="w-full bg-zinc-950  p-4 rounded-md border border-white mb-8"
              type="text"
              placeholder="Enter Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full bg-zinc-950  p-4 rounded-md border border-white mb-8"
            type="text"
            placeholder="Enter Email"
          />
          <input
            ref={password}
            className="w-full bg-zinc-950  p-4 rounded-md border border-white mb-8"
            type="password"
            placeholder="Enter Password"
          />
          {!isSignIn && (
            <input
              ref={confirmPassword}
              className="w-full bg-zinc-950  p-4 rounded-md border border-white mb-8"
              type="password"
              placeholder="Enter Confirm Password"
            />
          )}
          <p className="text-lg font-bold text-red-500 mb-4">{errorMessage}</p>
          <button
            className="w-full bg-red-700  p-4 rounded-md hover:bg-red-800 "
            onClick={handleClickButton}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {isSignIn && (
            <Link>
              <h2 className="mt-4 text-center">Forgot email or password ?</h2>
            </Link>
          )}
          {isSignIn && (
            <div className="mt-16">
              <input type="checkbox" className="h-5 w-5 " />
              <span className="pl-4 font-semibold">Remember me</span>
            </div>
          )}
          {isSignIn ? (
            <div className="mt-8">
              <p className="text-lg">
                New to Netflix?
                <span
                  className="ml-2 font-bold cursor-pointer"
                  onClick={toggleSignIn}
                >
                  Sign up now
                </span>
              </p>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-lg">
                Already registered
                <span
                  className="ml-2 font-bold cursor-pointer"
                  onClick={toggleSignIn}
                >
                  Sign in now
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogIn;
