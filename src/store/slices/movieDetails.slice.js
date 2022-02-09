import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    moviesById: {},
    status: null,
    error: null
};
export const getMoviesById = createAsyncThunk(
    'movieSliceById/getMoviesById',
    async (id, {rejectWithValue}) => {
        try {
            const moviesById = await movieService.getById(id);

            return moviesById.data;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const movieByIdSlice = createSlice({
    name: 'moviesById',
    initialState,
    reducers: {},
    extraReducers: {
        [getMoviesById.pending]: (state) => {
            state.status = 'pending';
            state.error = null
        },
        [getMoviesById.fulfilled]: (state, action) => {

            state.moviesById = action.payload
        },
        [getMoviesById.rejected]: (state, action) => {

        }
    }

});

const movieByIdReducer = movieByIdSlice.reducer;

export default movieByIdReducer;