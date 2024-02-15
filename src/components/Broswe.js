import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Broswe = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/**
        MainSection
          - Movie Trailer
          - Movie detail
        SecondarySection 
           - MoviesList*N
            - Movie Cards * N
        **/}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Broswe;
