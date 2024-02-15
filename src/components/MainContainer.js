import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //early return
  if (!movies) return;
  const mainMovie = movies[16];
  const { id, overview, title } = mainMovie;
  return (
    <div>
      <VideoTitle overview={overview} title={title} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
