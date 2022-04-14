import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAccountDetails } from "../../../Components/Services/auth";
import { getFavoritesMovies } from "../../../Components/Services/movies";

const initialState = {
    favorites: [],
    status: 'idle'
}

export const getFavorites = createAsyncThunk(
    'movies/getFavorites', async () => {
        try{
            const { id } = await getAccountDetails();
            const { results } = await getFavoritesMovies(id);
            return results;
        }catch(error){
            console.log(error);
        }
    }
)

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getFavorites.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getFavorites.fulfilled, (state, action) => {
            state.favorites = action.payload;
            state.status = 'success';
        });
    }
});
export default favoritesSlice.reducer;
export const favoritesList = state => state.favorites.favorites;