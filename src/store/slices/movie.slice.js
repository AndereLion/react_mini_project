import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    status: null,
    error: null
};
export const getAllMoviesByPage = createAsyncThunk(
    'movieSlice/getMovies',
    async (homePage, {rejectWithValue}) => {
        try {
            const movies = await movieService.getAllMoviesByPage(homePage);
            return movies.data.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllMoviesByPage.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getAllMoviesByPage.fulfilled]: (state, action) => {

            state.movies = action.payload
        },
        [getAllMoviesByPage.rejected]: (state, action) => {
        }
    }

});

const movieReducer = movieSlice.reducer;

export default movieReducer;