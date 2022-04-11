import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_APIKEY;

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
    return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&lenguage=es-ES&page=1&region=US`)
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
