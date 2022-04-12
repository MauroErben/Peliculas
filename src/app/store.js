import { configureStore } from "@reduxjs/toolkit";
import popularReducer from '../app/features/movies/popularSlice';
import topMoviesReducer from "./features/movies/topSllce";
import upcomingMoviesReducer from './features/movies/upcomingSlice'; 
import detailsReducer from './features/movies/details/detailsSlice';
import trailerReducer from './features/movies/details/trailerSlice';

export default configureStore({
    reducer: {
        popular: popularReducer,
        topMovies: topMoviesReducer,
        upcoming: upcomingMoviesReducer,
        details: detailsReducer,
        trailer: trailerReducer
    }
});