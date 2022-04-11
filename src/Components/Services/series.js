import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getSeriesPopular = () => {
    return axios.get(`${BASE_URL}/tv/popular?api_key=${APIKEY}&language=es&page=1`)
    .then(res => {
        if(res.status === 200){
            return res.data;
        }else{
            alert('Ocurrio un error');
        }
    }).catch(err => console.log(err));
}