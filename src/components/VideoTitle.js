import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute w-screen text-white ">
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="text-lg w-1/4">{overview}</p>
      <div className="mt-6">
        <button className="font-bold bg-green-500 px-8 py-4 rounded-lg textlg">
          <FontAwesomeIcon icon={faPlay} className="mr-2 " />
          Play
        </button>
        <button className="font-bold bg-gray-400 px-8 py-4 rounded-lg textlg ml-2">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 " />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
