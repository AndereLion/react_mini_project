import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    moviesByGenre: [],
    status: null,
    error: null
};
export const getMoviesByGenre = createAsyncThunk(
    'moviesByGenreSlice/getMoviesByGenre',
    async ({genre, page}, {rejectWithValue}) => {
        try {
            const moviesByGenre = await movieService.getByGenre(genre, page);
            return moviesByGenre.data.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

const moviesByGenreSlice = createSlice({
    name: 'moviesByGenre',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesByGenre.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {

            state.moviesByGenre = action.payload
        },
        [getMoviesByGenre.rejected]: (state, action) => {

        }
    }

});

const movieByGenreReducer = moviesByGenreSlice.reducer;
export default movieByGenreReducer;