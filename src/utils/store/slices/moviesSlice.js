import { createSlice } from "@reduxjs/toolkit";

const moviesSLice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorVideo } = moviesSLice.actions;
export default moviesSLice.reducer;
