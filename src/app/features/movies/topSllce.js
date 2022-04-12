import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopRatedMovies } from "../../../Components/Services/movies";

const initialState = {
    topMovies: [],
    status: 'idle',
}

export const getTopMovies = createAsyncThunk(
    'movies/getTopMovies', async () => {
        try {
            const { results } = await getTopRatedMovies();
            return results;
        } catch (error) {
            console.log(error);
        }
    }
);

export const topMoviesSlice = createSlice({
    name: 'topMovies',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTopMovies.pending, (state) => {
                state.status = 'pending';
            })

            .addCase(getTopMovies.fulfilled, (state, action) => {
                state.topMovies = action.payload;
                state.status = 'success';
            });
    }
});
export default topMoviesSlice.reducer;
export const topList = state => state.topMovies.topMovies;