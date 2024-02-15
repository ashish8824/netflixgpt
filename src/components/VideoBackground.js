import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ videoId }) => {
  const videoTrailor = useSelector((store) => store?.movies?.trailorVideo);

  console.log(videoTrailor);

  useMovieTrailor(videoId);

  return (
    <div className="w-screen">
      <iframe
        className="w-full aspect-video  "
        src={
          "https://www.youtube.com/embed/7u3zBVAxx_w?si=" +
          videoTrailor?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
