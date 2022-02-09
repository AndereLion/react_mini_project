import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import movieByIdReducer from "./slices/movieDetails.slice";
import movieByGenreReducer from "./slices/moviesBygenre.slice";
import moviesByWordReducer from "./slices/moviesByWord.slice";
import moviesUpcomingReducer from "./slices/moviesUpcoming.slice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        moviesById: movieByIdReducer,
        moviesByGenre: movieByGenreReducer,
        moviesByWord: moviesByWordReducer,
        moviesUpcoming: moviesUpcomingReducer
    }
});
export default store;