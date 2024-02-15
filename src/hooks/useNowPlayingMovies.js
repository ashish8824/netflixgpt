import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/slices/moviesSlice";

const useNowPlayingMovies = () => {
  //fetching data from imbd api and store the data
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
