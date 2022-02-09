import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    moviesByGenre: [],
    status: null,
    error: null
};
export const getMoviesByWord = createAsyncThunk(
    'moviesByGenreSlice/getMoviesByGenre',
    async ({word, page}, {rejectWithValue}) => {
        try {
            const moviesByWord = await movieService.getByWord(word,page);
            return moviesByWord.data.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

const moviesByWordSlice = createSlice({
    name: 'moviesByWord',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesByWord.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMoviesByWord.fulfilled]: (state, action) => {

            state.moviesByWord = action.payload
        },
        [getMoviesByWord.rejected]: (state, action) => {

        }
    }

});

const moviesByWordReducer = moviesByWordSlice.reducer;

export default moviesByWordReducer;