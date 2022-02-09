import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    movies: [],
    status: null,
    error: null
};
export const getMoviesUpcoming = createAsyncThunk(
    'movieUpcomingSlice/getMoviesUpcoming',
    async (page, {rejectWithValue}) => {
        try {
            const moviesUpcoming = await movieService.getUpcoming(page);
            return moviesUpcoming.data.results;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


const moviesUpcomingSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesUpcoming.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMoviesUpcoming.fulfilled]: (state, action) => {

            state.moviesUpcoming = action.payload
        },
        [getMoviesUpcoming.rejected]: (state, action) => {
        }
    }

});

const moviesUpcomingReducer = moviesUpcomingSlice.reducer;

export default moviesUpcomingReducer;