import { configureStore } from "@reduxjs/toolkit";
import { songsReducer } from "./slices/songsSlice";
import { moviesReducer, removeMovie, addMovie } from "./slices/moviesSlice";
export const store = configureStore({
  reducer: {
    counter: songsReducer.reducer,
    movies: moviesReducer.reducer,
  },
});

console.log(store.getState());

export { addMovie, removeMovie };
// const res = useSelect(() => {
//   return state.value;
// });

// console.log(res);
