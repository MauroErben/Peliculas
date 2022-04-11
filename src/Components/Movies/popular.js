import { getPopularMovies } from "../Services/movies";
import { useState, useEffect } from "react";
import AppCarousel from "../Carousel";

const PopularMovies = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    const getData = async () => {
        try {
            const { results } = await getPopularMovies();
            setPopularMovies(results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <AppCarousel data={popularMovies} />
    )
}
export default PopularMovies;