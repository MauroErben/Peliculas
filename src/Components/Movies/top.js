import AliceCarousel from "react-alice-carousel";
import { getTopRatedMovies } from "../Services/movies";
import MovieCard from "../Cards";
import { useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

const TopRatedMovies = ({ handleDetails }) => {

    const [topRated, setTopRated] = useState([]);

    const getTopRated = async () => {
        try {
            const { results } = await getTopRatedMovies();
            setTopRated(results);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDragStart = (e) => e.preventDefault();

    const getCardTopRated = () => {
        const images = [];
        topRated.map((items) => {
            images.push(
                <MovieCard
                    imagen={`https://image.tmdb.org/t/p/original${items.backdrop_path}`}
                    titulo={items.original_title}
                    handleDrag={handleDragStart}
                    handleClick={() => handleDetails(items)}
                />
            )
        });
        return images;
    }

    useEffect(() => {
        getTopRated();
    }, []);

    return (
        <AliceCarousel
            autoWidth
            disableButtonsControls
            mouseTracking
            items={getCardTopRated()}
        />
    )
}
export default TopRatedMovies;