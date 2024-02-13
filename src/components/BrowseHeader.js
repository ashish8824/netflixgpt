import {
  faBell,
  faCaretDown,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignOutList from "./SignOutList";

const BrowseHeader = () => {
  const [showSignOut, setShowSignOut] = useState(false);
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
          <img
            className="w-36"
            alt="logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          />
        </div>
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
      </div>
      <div className="mr-10 flex text-white items-center">
        <FontAwesomeIcon icon={faSearch} className="mr-6 h-6 " />
        <FontAwesomeIcon icon={faBell} className="mr-6 h-5" />
        <img
          className="cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseDown={handleMouseLeave}
          alt="logo"
          src="https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        />
        {showSignOut && <SignOutList />}
        <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
      </div>
    </div>
  );
};

export default BrowseHeader;
