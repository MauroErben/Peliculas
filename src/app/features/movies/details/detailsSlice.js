import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMoviesDetails } from "../../../../Components/Services/movies";

const initialState = {
    details: {},
    status: 'idle'
}

export const getDetails = createAsyncThunk(
    'movies/getMovieDetails', async (id) => {
        try{
            const result = await getMoviesDetails(id);
            return result;
        }catch(error){
            console.log(error);
        }
    }
)

export const detailsSlice = createSlice({
    name: 'datails',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getDetails.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getDetails.fulfilled, (state, action) => {
            state.details = action.payload;
            state.status = 'success';
        });
    }
});

export default detailsSlice.reducer;
export const detailsList = state => state.details.details;
