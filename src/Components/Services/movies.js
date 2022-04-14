import axios from "axios";
import { showSuccessMessage } from "../Alerts";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_APIKEY;

const getSessionId = () => sessionStorage.getItem('session_id') ? sessionStorage.getItem('session_id') : null;

export const getPopularMovies = () => {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&lenguage=es&page=1`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ha ocurrido un error al obtener datos.');
        }
    }).catch(err => console.log(err));
}

export const getTopRatedMovies = () => {
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&lenguage=es-ES&page=1`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ha ocurrido un error al obtener datos.');
        }
    }).catch(err => console.log(err));
}

export const getUpcomingMovies = () => {
    return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&lenguage=es&page=1&region=US`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ha ocurrido un error al obtener datos.');
        }
    }).catch(err => console.log(err));
}

export const getMoviesDetails = ( id ) => {
    return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&lenguage=es`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ha ocurrido un error al obtener datos.');
        }
    }).catch(err => console.log(err));
}

export const getMoviesTrailer = ( id ) => {
    return axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&lenguage=es`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ha ocurrido un error al obtener datos.');
        }
    }).catch(err => console.log(err));
}

export const addMovieToFavorite = (account_id, values) => {
    return axios.post(`${BASE_URL}/account/${account_id}/favorite?api_key=${API_KEY}&session_id=${getSessionId()}`, values, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }).then(res => {
        if(res.data.success){
            showSuccessMessage(res.data.status_message);
            return res.data;
        }
    })
    .catch(error => console.log(error));
}

export const getFavoritesMovies = (account_id) => {
    return axios.get(`${BASE_URL}/account/${account_id}/favorite/movies?api_key=${API_KEY}&session_id=${getSessionId()}&language=es&sort_by=created_at.asc&page=1`)
    .then(res => res.data)
    .catch(error => console.log(error));
}