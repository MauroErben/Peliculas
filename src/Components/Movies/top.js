import AliceCarousel from "react-alice-carousel";
import MovieCard from "../Cards";
import { useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { getTopMovies, topList } from '../../app/features/movies/topSllce';
import { useDispatch, useSelector } from 'react-redux';

const TopRatedMovies = ({ handleDetails }) => {

    const dispatch = useDispatch();
    const topRatedList = useSelector(topList);

    const handleDragStart = (e) => e.preventDefault();

    const getCardTopRated = () => {
        const images = [];
        topRatedList.map((items) => {
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
        dispatch(getTopMovies());
    }, [dispatch]);

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