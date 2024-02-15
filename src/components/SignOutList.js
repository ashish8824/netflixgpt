import {
  faArrowRightArrowLeft,
  faCircleQuestion,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { USER_SIGNOUT_SECTION } from "../utils/constants";

const SignOutList = () => {
  const navigate = useNavigate();
  const displayName = useSelector((store) => store?.user?.displayName);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-52 h-56 border border-black absolute top-[5rem] right-[5rem] text-white bg-black">
      <ul className="p-4 border-b-2 border-gray-600">
        <li>
          <img
            className="inline-block mr-2"
            alt="logo"
            src={USER_SIGNOUT_SECTION}
          />
          {displayName}
        </li>
        <li>
          <FontAwesomeIcon icon={faPencil} className="mr-4 mt-2" />
          Manage Profiles
        </li>
        <li>
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className="mr-4 mt-2" />
          Transfer Profile
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="mr-4 mt-2" />
          Account
        </li>

        <li>
          <FontAwesomeIcon icon={faCircleQuestion} className="mr-4 mt-2" />
          Help Center
        </li>
      </ul>
      <button className="font-bold px-8 py-2" onClick={handleSignOut}>
        Sign out of Netflix
      </button>
    </div>
  );
};

export default SignOutList;
