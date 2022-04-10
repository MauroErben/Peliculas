import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getTendencias = () => {
    return axios.get(`${BASE_URL}/trending/movie/week?api_key=${APIKEY}&language=es`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ocurrio un error');
        }
    }).catch(err => console.log(err));
}