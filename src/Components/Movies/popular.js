import { useEffect } from "react";
import AppCarousel from "../Carousel";
import { useDispatch, useSelector } from 'react-redux';
import { popularList, getPopular } from '../../app/features/movies/popularSlice';

const PopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector(popularList);

    useEffect(() => {
        dispatch(getPopular());
    }, [])

    return (
        <AppCarousel data={popularMovies} />
    )
}
export default PopularMovies;