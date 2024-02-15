import {
  faBell,
  faCaretDown,
  faCaretUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignOutList from "./SignOutList";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const [showSignOut, setShowSignOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //store into redux when it is sign up or sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleMouseEnter = () => {
    setShowSignOut(true);
  };

  const handleMouseLeave = () => {
    setShowSignOut(false);
  };

  return (
    <div className="absolute px-[2rem] py-2 bg-gradient-to-b from-black w-screen flex items-center justify-between">
      <div className="flex items-center">
        <div>
          <img className="w-36" alt="logo" src={NETFLIX_LOGO} />
        </div>
        {user && (
          <div className="text-white ml-8">
            <ul className="flex gap-5">
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>TV Shows</li>
              </Link>
              <Link>
                <li>Movies</li>
              </Link>
              <Link>
                <li>New & Popular </li>
              </Link>
              <Link>
                <li>My List </li>
              </Link>
              <Link>
                <li>Browse by Languages</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      {user && (
        <div className="mr-10 flex text-white items-center">
          <FontAwesomeIcon icon={faSearch} className="mr-6 h-6 " />
          <FontAwesomeIcon icon={faBell} className="mr-6 h-5" />
          <img
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseDown={handleMouseLeave}
            alt="logo"
            src={USER_LOGO}
          />
          {showSignOut && <SignOutList />}
          {showSignOut ? (
            <FontAwesomeIcon icon={faCaretUp} className="ml-2" />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
