import userReducer from "../store/slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "../store/slices/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
