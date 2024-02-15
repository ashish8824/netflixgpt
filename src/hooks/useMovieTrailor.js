import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailorVideo } from "../utils/store/slices/moviesSlice";

const useMovieTrailor = (videoId) => {
  const dispatch = useDispatch();

  console.log("video id =>", videoId);

  useEffect(() => {
    getMoviesTrailerId();
  }, []);

  const getMoviesTrailerId = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailor = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailorVideo(trailor));
  };
};

export default useMovieTrailor;
